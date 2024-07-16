export type B9_SSRMEET_Partial = {
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
};

export type B9_SSBSECT_Partial = {
  SSBSECT_TERM_CODE: string;
  SSBSECT_CRN: string;
  SSBSECT_CAMP_CODE: string;
  SSBSECT_ENRL: number;
};
