import { CampusCodesType } from "../zod/schemas";

export interface CourseMeetType {
  CRN: string;
  TERM_CODE: string;
  BEGIN_TIME: string;
  END_TIME: string;
  BLDG_CODE: string;
  ROOM_CODE: string | null;
  DATES: Set<Date>;
}

export type OccupantsByCampusBuildingFloor = Record<
  Partial<CampusCodesType>,
  Record<string, Record<string, number>>
>;
