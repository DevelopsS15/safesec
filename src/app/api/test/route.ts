import { NextResponse } from "next/server";
import oracledb from "oracledb";
import sql, { join as sqlJoin } from "sql-template-tag";
import { env } from "~/env";

export async function GET() {
  const connection = await oracledb.getConnection({
    user: env.ORACLE_DB_USER,
    password: env.ORACLE_DB_PASSWORD,
    connectString: env.DATABASE_URL,
  });

  const targetDate = new Date(2023, 9, 10, 9, 22, 0, 0);
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
  //   Filter by campus:             AND SSRMEET_BLDG_CODE LIKE 'CEP%'

  if (!Array.isArray(SSRMEET.rows))
    return NextResponse.json({
      success: false,
      data: `Unable to get SSRMEET`,
    });

  interface CourseMeetType {
    CRN: string;
    TERM_CODE: string;
    BEGIN_TIME: string;
    END_TIME: string;
    BLDG_CODE: string;
    ROOM_CODE: string;
    DATES: Set<Date>;
  }
  const allCourseMeets: CourseMeetType[] = [];
  console.log(`Total meets found: ${SSRMEET.rows.length}`);
  const meetRows = SSRMEET.rows as {
    SSRMEET_CRN: string;
    SSRMEET_TERM_CODE: string;
    SSRMEET_BEGIN_TIME: string;
    SSRMEET_END_TIME: string;
    SSRMEET_BLDG_CODE: string;
    SSRMEET_ROOM_CODE: string;
    SSRMEET_SUN_DAY: string | null;
    SSRMEET_MON_DAY: string | null;
    SSRMEET_TUE_DAY: string | null;
    SSRMEET_WED_DAY: string | null;
    SSRMEET_THU_DAY: string | null;
    SSRMEET_FRI_DAY: string | null;
    SSRMEET_SAT_DAY: string | null;
    SSRMEET_START_DATE: Date;
    SSRMEET_END_DATE: Date;
  }[];
  meetRows.forEach((SSRMEET_ROW) => {
    const meetData = {
      CRN: SSRMEET_ROW["SSRMEET_CRN"],
      TERM_CODE: SSRMEET_ROW["SSRMEET_TERM_CODE"],
      BEGIN_TIME: SSRMEET_ROW["SSRMEET_BEGIN_TIME"],
      END_TIME: SSRMEET_ROW["SSRMEET_END_TIME"],
      BLDG_CODE: SSRMEET_ROW["SSRMEET_BLDG_CODE"],
      ROOM_CODE: SSRMEET_ROW["SSRMEET_ROOM_CODE"],
      DATES: new Set<Date>(),
    };
    const allDaysOfWeek = [
      SSRMEET_ROW["SSRMEET_SUN_DAY"],
      SSRMEET_ROW["SSRMEET_MON_DAY"],
      SSRMEET_ROW["SSRMEET_TUE_DAY"],
      SSRMEET_ROW["SSRMEET_WED_DAY"],
      SSRMEET_ROW["SSRMEET_THU_DAY"],
      SSRMEET_ROW["SSRMEET_FRI_DAY"],
      SSRMEET_ROW["SSRMEET_SAT_DAY"],
    ];
    let currentDate = SSRMEET_ROW["SSRMEET_START_DATE"];
    const endDate = SSRMEET_ROW["SSRMEET_END_DATE"];
    while (currentDate <= endDate) {
      if (allDaysOfWeek[currentDate.getDay()] != null) {
        meetData["DATES"].add(currentDate);
      }
      var date = new Date(currentDate);
      date.setDate(date.getDate() + 1);
      currentDate = date;
    }

    allCourseMeets.push(meetData);
  });

  async function GetPeopleByCampusBuildingFloor(
    startDate: Date,
    endDate: Date,
  ) {
    const validMeetByTermAndCRN: Record<string, CourseMeetType> = {};
    const validTermAndCRNs: string[] = [];
    for (let courseMeet of allCourseMeets) {
      const meetTermAndCRN = courseMeet["TERM_CODE"] + "_" + courseMeet["CRN"];
      if (validMeetByTermAndCRN[meetTermAndCRN]) {
        continue;
      }

      const beginTimeString = courseMeet["BEGIN_TIME"];
      const beginTimeHour = Number.parseInt(beginTimeString.substring(0, 2));
      const beginTimeMinute = Number.parseInt(beginTimeString.substring(2));

      const endTimeString = courseMeet["END_TIME"];
      const endTimeHour = Number.parseInt(endTimeString.substring(0, 2));
      const endTimeMinute = Number.parseInt(endTimeString.substring(2));

      for (const date of courseMeet["DATES"]) {
        const meetStartDateTime = new Date(date);
        meetStartDateTime.setHours(beginTimeHour);
        meetStartDateTime.setMinutes(beginTimeMinute);

        const meetEndDateTime = new Date(date);
        meetEndDateTime.setHours(endTimeHour);
        meetEndDateTime.setMinutes(endTimeMinute);

        if (startDate <= meetStartDateTime && meetEndDateTime <= endDate) {
          validMeetByTermAndCRN[meetTermAndCRN] = courseMeet;
          validTermAndCRNs.push(meetTermAndCRN);
          break;
        }
      }
    }

    if (validTermAndCRNs.length === 0) {
      return NextResponse.json({
        success: false,
        data: `Unable to find any courses during this time`,
      });
    }

    const SSBSECT_query = sql`SELECT SSBSECT_TERM_CODE, SSBSECT_CRN, SSBSECT_CAMP_CODE, SSBSECT_ENRL
      FROM SSBSECT WHERE (SSBSECT_TERM_CODE || '_' || SSBSECT_CRN) IN (${sqlJoin(validTermAndCRNs)})`;
    const SSBSECT = await connection.execute(SSBSECT_query, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    console.log(`Total courses: ${SSBSECT.rows?.length}`);

    const studentsPerCampus: Record<
      string,
      Record<string, Record<string, number>>
    > = {};
    const sectRows = SSBSECT.rows as {
      SSBSECT_TERM_CODE: string;
      SSBSECT_CRN: string;
      SSBSECT_CAMP_CODE: string;
      SSBSECT_ENRL: number;
    }[];
    for (const course of sectRows) {
      const courseCampusCode = course["SSBSECT_CAMP_CODE"];
      const meetTermAndCRN =
        course["SSBSECT_TERM_CODE"] + "_" + course["SSBSECT_CRN"];
      if (!studentsPerCampus[courseCampusCode]) {
        studentsPerCampus[courseCampusCode] = {};
      }

      const studentsPerCampusDict = studentsPerCampus[courseCampusCode]!;
      const courseMeetData = validMeetByTermAndCRN[meetTermAndCRN]!;
      const buildingCode = courseMeetData["BLDG_CODE"];
      if (!studentsPerCampusDict[buildingCode]) {
        studentsPerCampusDict[buildingCode] = {};
      }

      const studentsPerCampusBuildingDict =
        studentsPerCampusDict[buildingCode]!;
      const floorNumber = courseMeetData["ROOM_CODE"].substring(0, 1);
      if (!studentsPerCampusBuildingDict[floorNumber]) {
        studentsPerCampusBuildingDict[floorNumber] = 0;
      }
      studentsPerCampusBuildingDict[floorNumber] += course["SSBSECT_ENRL"];
      
      if(!studentsPerCampusBuildingDict["TOTAL"]){
        studentsPerCampusBuildingDict["TOTAL"] = 0;
      }
      studentsPerCampusBuildingDict["TOTAL"] += course["SSBSECT_ENRL"];
    }
    console.log(studentsPerCampus);
    return studentsPerCampus;
  }

  function SetTimeOnDate(date: Date, hour: number, minute: number) {
    const _date = new Date(date);
    _date.setHours(hour);
    _date.setMinutes(minute);
    return _date;
  }

  const studentsPerCampusTimeA = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 8, 30),
    SetTimeOnDate(targetDate, 9, 50),
  );
  const studentsPerCampusTimeB = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 10, 0),
    SetTimeOnDate(targetDate, 11, 20),
  );
  const studentsPerCampusTimeC = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 11, 30),
    SetTimeOnDate(targetDate, 12, 50),
  );
  const studentsPerCampusTimeD = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 13, 0),
    SetTimeOnDate(targetDate, 14, 20),
  );
  const studentsPerCampusTimeE = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 14, 30),
    SetTimeOnDate(targetDate, 15, 50),
  );
  const studentsPerCampusTimeF = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 16, 0),
    SetTimeOnDate(targetDate, 17, 20),
  );
  const studentsPerCampusTimeG = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 17, 30),
    SetTimeOnDate(targetDate, 18, 50),
  );
  const studentsPerCampusTimeH = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 19, 0),
    SetTimeOnDate(targetDate, 20, 20),
  );
  const studentsPerCampusTimeI = await GetPeopleByCampusBuildingFloor(
    SetTimeOnDate(targetDate, 20, 30),
    SetTimeOnDate(targetDate, 21, 50),
  );

  await connection.close();
  return NextResponse.json({
    A: studentsPerCampusTimeA,
    B: studentsPerCampusTimeB,
    C: studentsPerCampusTimeC,
    D: studentsPerCampusTimeD,
    E: studentsPerCampusTimeE,
    F: studentsPerCampusTimeF,
    G: studentsPerCampusTimeG,
    H: studentsPerCampusTimeH,
    I: studentsPerCampusTimeI,
  });
}
