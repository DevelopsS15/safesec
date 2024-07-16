import { createNextHandler } from "@ts-rest/serverless/next";
import oracledb from "oracledb";
import { B9_SSRMEET_Partial } from "~/lib/types/Banner9";
import {
  CourseMeetType,
  OccupantsByCampusBuildingFloor,
} from "~/lib/types/Routes";
import { CampusBuildingAbbreviation } from "~/lib/utils";
import { getOracleConnection } from "~/lib/utils.db";
import {
  SetTimeOnDate,
  getAllCourseMeets,
  timetableTimeRanges,
} from "~/lib/utils.occupants";
import { GetPeopleByCampusBuildingFloor } from "~/lib/utils.occupants.server";
import { rootContract } from "~/ts-rest/contracts/contracts";

const handler = createNextHandler(
  rootContract,
  {
    occupants: {
      getOccupantsByLocation: async (args) => {
        const connection = await getOracleConnection();

        // const targetDate = new Date();
        const targetDate = new Date(2024, 9, 7, 10, 22, 0, 0);
        console.log(
          `${targetDate.toDateString()} ${targetDate.toLocaleTimeString()}`,
        );
        const SSRMEET = await connection.execute(
          `SELECT SSRMEET_TERM_CODE, SSRMEET_CRN, SSRMEET_BEGIN_TIME, SSRMEET_END_TIME, SSRMEET_BLDG_CODE,
                    SSRMEET_ROOM_CODE, SSRMEET_START_DATE, SSRMEET_END_DATE, SSRMEET_SUN_DAY, SSRMEET_MON_DAY, SSRMEET_TUE_DAY,
                    SSRMEET_WED_DAY, SSRMEET_THU_DAY, SSRMEET_FRI_DAY, SSRMEET_SAT_DAY
                    FROM SSRMEET
                    WHERE SSRMEET_BEGIN_TIME IS NOT NULL
                        AND SSRMEET_END_TIME IS NOT NULL
                        AND SSRMEET_BLDG_CODE != 'ONLINE'
                        AND SSRMEET_BLDG_CODE LIKE :bldgCode
                        AND TO_DATE(:targetDate, 'YYYY-MM-DD"T"HH24:MI:SS') BETWEEN 
                            TO_DATE(SSRMEET_START_DATE || ' ' || '0000', 'DD-MON-YY HH24MI') AND 
                            TO_DATE(SSRMEET_END_DATE || ' ' || '2359', 'DD-MON-YY HH24MI')`,
          [
            `${CampusBuildingAbbreviation[args.query.campus]}${args.query.building ?? "%"}`,
            targetDate.toISOString().substring(0, 19),
          ],
          { outFormat: oracledb.OUT_FORMAT_OBJECT },
        );

        if (!Array.isArray(SSRMEET.rows)) {
          return {
            status: 400,
            body: "Unable to fetch the course meetings (SSRMEET)",
          };
        }

        if (SSRMEET.rows.length === 0) {
          return {
            status: 400,
            body: `Unable to find any course meetings (SSRMEET) given the parameters`,
          };
        }

        console.log(`Total meets found: ${SSRMEET.rows.length}`);
        const meetRows = SSRMEET.rows as B9_SSRMEET_Partial[];
        const courseMeets: CourseMeetType[] = getAllCourseMeets(meetRows);

        const studentsPerCampusTime = await GetPeopleByCampusBuildingFloor({
          connection,
          courseMeets,
          campus: args.query.campus,
          startDate: SetTimeOnDate(
            targetDate,
            targetDate.getHours(),
            targetDate.getMinutes(),
          ),
        });
        if (!studentsPerCampusTime) {
          return {
            status: 400,
            body: "Unable to process the number of students for the provided time.",
          };
        }

        return {
          status: 200,
          body: studentsPerCampusTime[args.query.campus],
        };
      },
      getOccupantsForTimetable: async (args) => {
        const connection = await getOracleConnection();

        // const targetDate = new Date();
        const targetDate = args.body.date;
        console.log(
          `${targetDate.toDateString()} ${targetDate.toLocaleTimeString()}`,
        );
        const SSRMEET = await connection.execute(
          `SELECT SSRMEET_TERM_CODE, SSRMEET_CRN, SSRMEET_BEGIN_TIME, SSRMEET_END_TIME, SSRMEET_BLDG_CODE,
                    SSRMEET_ROOM_CODE, SSRMEET_START_DATE, SSRMEET_END_DATE, SSRMEET_SUN_DAY, SSRMEET_MON_DAY, SSRMEET_TUE_DAY,
                    SSRMEET_WED_DAY, SSRMEET_THU_DAY, SSRMEET_FRI_DAY, SSRMEET_SAT_DAY
                    FROM SSRMEET
                    WHERE SSRMEET_BEGIN_TIME IS NOT NULL
                        AND SSRMEET_END_TIME IS NOT NULL
                        AND SSRMEET_BLDG_CODE != 'ONLINE'
                        AND TO_DATE(:targetDate, 'YYYY-MM-DD"T"HH24:MI:SS') BETWEEN 
                            TO_DATE(SSRMEET_START_DATE || ' ' || '0000', 'DD-MON-YY HH24MI') AND 
                            TO_DATE(SSRMEET_END_DATE || ' ' || '2359', 'DD-MON-YY HH24MI')`,
          [targetDate.toISOString().substring(0, 19)],
          { outFormat: oracledb.OUT_FORMAT_OBJECT },
        );

        if (!Array.isArray(SSRMEET.rows)) {
          return {
            status: 500,
            body: "Unable to fetch the course meetings (SSRMEET)",
          };
        }

        if (SSRMEET.rows.length === 0) {
          return {
            status: 500,
            body: `Unable to find any course meetings (SSRMEET) given the parameters`,
          };
        }

        console.log(`Total meets found: ${SSRMEET.rows.length}`);
        const meetRows = SSRMEET.rows as B9_SSRMEET_Partial[];
        const courseMeets: CourseMeetType[] = getAllCourseMeets(meetRows);

        const occupantsPerTimeRange: (OccupantsByCampusBuildingFloor | null)[] =
          [];
        for (const timeRange of timetableTimeRanges) {
          const occupantsForTimeRange = await GetPeopleByCampusBuildingFloor({
            connection,
            courseMeets,
            startDate: SetTimeOnDate(
              targetDate,
              timeRange.startHour,
              timeRange.startMinute,
            ),
            endDate: SetTimeOnDate(
              targetDate,
              timeRange.endHour,
              timeRange.endMinute,
            ),
          });
          occupantsPerTimeRange.push(occupantsForTimeRange);
        }

        console.log(occupantsPerTimeRange);

        return {
          status: 200,
          body: occupantsPerTimeRange,
        };
      },
    },
  },
  {
    basePath: "/api/ts/v1",
    jsonQuery: true,
    responseValidation: true,
    handlerType: "app-router",
  },
);

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
