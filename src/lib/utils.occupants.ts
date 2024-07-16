import { B9_SSRMEET_Partial } from "./types/Banner9";

export const getAllCourseMeets = (SSRMEET_ROWS: B9_SSRMEET_Partial[]) =>
  SSRMEET_ROWS.map((SSRMEET_ROW) => {
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

    return meetData;
  });

export const SetTimeOnDate = (date: Date, hour: number, minute: number) => {
  const _date = new Date(date);
  _date.setHours(hour);
  _date.setMinutes(minute);
  return _date;
};

export const timetableTimeRanges: {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}[] = [
  {
    startHour: 8,
    startMinute: 30,
    endHour: 9,
    endMinute: 50,
  },
  {
    startHour: 10,
    startMinute: 0,
    endHour: 11,
    endMinute: 20,
  },
  {
    startHour: 11,
    startMinute: 30,
    endHour: 12,
    endMinute: 50,
  },
  {
    startHour: 13,
    startMinute: 0,
    endHour: 14,
    endMinute: 20,
  },
  {
    startHour: 14,
    startMinute: 30,
    endHour: 15,
    endMinute: 50,
  },
  {
    startHour: 16,
    startMinute: 0,
    endHour: 17,
    endMinute: 20,
  },
  {
    startHour: 17,
    startMinute: 30,
    endHour: 18,
    endMinute: 50,
  },
  {
    startHour: 19,
    startMinute: 0,
    endHour: 20,
    endMinute: 20,
  },
  {
    startHour: 20,
    startMinute: 30,
    endHour: 21,
    endMinute: 50,
  },
];
