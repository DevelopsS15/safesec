"server-only";

import oracledb from "oracledb";
import sql, { join as sqlJoin } from "sql-template-tag";
import { B9_SSBSECT_Partial } from "./types/Banner9";
import { CourseMeetType, OccupantsByCampusBuildingFloor } from "./types/Routes";
import { CampusBuildingAbbreviation, sortObjectByKeys } from "./utils";
import { CampusCodesType } from "./zod/schemas";

export async function GetPeopleByCampusBuildingFloor({
  connection,
  courseMeets,
  startDate,
  endDate,
  campus,
}: {
  connection: oracledb.Connection;
  courseMeets: CourseMeetType[];
  campus?: CampusCodesType;
  startDate: Date;
  endDate?: Date;
}) {
  const validMeetByTermAndCRN: Record<string, CourseMeetType> = {};
  const validTermAndCRNs: string[] = [];
  for (let courseMeet of courseMeets) {
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

      if (endDate) {
        // Checks which classes are occuring between the time frame
        if (startDate <= meetStartDateTime && meetEndDateTime <= endDate) {
          validMeetByTermAndCRN[meetTermAndCRN] = courseMeet;
          validTermAndCRNs.push(meetTermAndCRN);
          break;
        }
      } else {
        // Checks which classes are happening at the current time
        if (meetStartDateTime <= startDate && startDate <= meetEndDateTime) {
          validMeetByTermAndCRN[meetTermAndCRN] = courseMeet;
          validTermAndCRNs.push(meetTermAndCRN);
          break;
        }
      }
    }
  }

  if (validTermAndCRNs.length === 0) {
    console.log(`No valid CRNs for the query`);
    return null;
  }

  const SSBSECT_query = sql`SELECT SSBSECT_TERM_CODE, SSBSECT_CRN, SSBSECT_CAMP_CODE, SSBSECT_ENRL
              FROM SSBSECT WHERE (SSBSECT_TERM_CODE || '_' || SSBSECT_CRN) IN (${sqlJoin(validTermAndCRNs)})`;
  const SSBSECT = await connection.execute(SSBSECT_query, {
    outFormat: oracledb.OUT_FORMAT_OBJECT,
  });

  console.log(`Total courses: ${SSBSECT.rows?.length}`);

  const studentsPerCampus: OccupantsByCampusBuildingFloor = {};
  const sectRows = SSBSECT.rows as B9_SSBSECT_Partial[];
  for (const course of sectRows) {
    const courseCampusCode = course["SSBSECT_CAMP_CODE"] as CampusCodesType;
    const meetTermAndCRN =
      course["SSBSECT_TERM_CODE"] + "_" + course["SSBSECT_CRN"];
    if (!studentsPerCampus[courseCampusCode]) {
      studentsPerCampus[courseCampusCode] = {};
    }

    const studentsPerCampusDict = studentsPerCampus[courseCampusCode]!;
    const courseMeetData = validMeetByTermAndCRN[meetTermAndCRN]!;
    const buildingCode = courseMeetData["BLDG_CODE"];

    // TODO: Should remove the unnecessary campus code from the BLDG_CODE
    const buildingCodeTrimmed = campus
      ? buildingCode.replace(CampusBuildingAbbreviation[campus], "")
      : buildingCode;

    if (!studentsPerCampusDict[buildingCodeTrimmed]) {
      studentsPerCampusDict[buildingCodeTrimmed] = {};
    }

    const studentsPerCampusBuildingDict =
      studentsPerCampusDict[buildingCodeTrimmed]!;
    const roomCode = courseMeetData["ROOM_CODE"];
    if (!roomCode) {
      continue;
    }

    const floorNumber = roomCode.substring(0, 1);
    if (!studentsPerCampusBuildingDict[floorNumber]) {
      studentsPerCampusBuildingDict[floorNumber] = 0;
    }
    studentsPerCampusBuildingDict[floorNumber] += course["SSBSECT_ENRL"];
  }
  console.log(studentsPerCampus);
  const studentsPerCampusSorted = sortObjectByKeys(
    studentsPerCampus,
  ) as OccupantsByCampusBuildingFloor;
  return studentsPerCampusSorted;
}
