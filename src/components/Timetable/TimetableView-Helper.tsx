import React from "react";

export declare type Nullable<T = void> = T | null | undefined;

export type TimetableViewMode = "month" | "week" | "day";

export type ViewDateObject = {
  year: number;
  month: number;
  day: number;
};
export interface TimeObjectType {
  hour: number;
  minute: number;
}

export interface EventOverlap {
  startDate: string | null;
  startHour: number | null;
  startMinute: number | null;
  endDate: string | null;
  endHour: number | null;
  endMinute: number | null;
}

export interface TimetableBuilderEventElementOptions {
  key: string;
  borderColor: string;
  content: JSX.Element;
  eventOccurance: {
    date: Date;
    startTime: {
      hour: number;
      minute: number;
    };
    endTime: {
      hour: number;
      minute: number;
    };
  };
  summaryMonthView?: JSX.Element;
  showTimeInMonthView: boolean;
  tooltip?: {
    id?: string;
    content: JSX.Element;
  };
}

export const dayAbbreviationsInOrder: readonly (
  | "U"
  | "M"
  | "T"
  | "W"
  | "R"
  | "F"
  | "S"
)[] = ["U", "M", "T", "W", "R", "F", "S"];

export const daysOfWeekThreeCharacters: readonly string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export function DoEventsOverlap(event1: EventOverlap, event2: EventOverlap) {
  // return event1Start < event2End && event1End > event2Start;
  if (
    !event1.startDate ||
    !event1.endDate ||
    event1.startHour === null ||
    event1.startMinute === null ||
    event1.endHour === null ||
    event1.endMinute === null
  )
    return false;
  if (
    !event2.startDate ||
    !event2.endDate ||
    event2.startHour === null ||
    event2.startMinute === null ||
    event2.endHour === null ||
    event2.endMinute === null
  )
    return false;
  if (
    !AreDatesTheSame(new Date(event1.startDate), new Date(event2.startDate)) ||
    !AreDatesTheSame(new Date(event1.endDate), new Date(event2.endDate))
  )
    return false;

  // Convert all times to minutes
  const event1StartMinute = ConvertTimeToMinutes(
    event1.startHour,
    event1.startMinute,
  );
  const event2StartMinute = ConvertTimeToMinutes(
    event2.startHour,
    event2.startMinute,
  );
  const event1EndMinute = ConvertTimeToMinutes(
    event1.endHour,
    event1.endMinute,
  );
  const event2EndMinute = ConvertTimeToMinutes(
    event2.startHour,
    event2.startMinute,
  );
  return (
    (event1StartMinute < event2EndMinute &&
      event1EndMinute > event2StartMinute) ||
    event1StartMinute === event2StartMinute ||
    event1EndMinute === event2EndMinute
  );
}

export function AreDatesTheSame(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export const ConvertCourseScheduleTimeToTimeObject = (
  time: Nullable<string>,
): TimeObjectType | null => {
  if (typeof time !== `string`) return null;
  if (time.length !== 4) return null;
  return {
    hour: parseInt(time.substring(0, 2)),
    minute: parseInt(time.substring(2)),
  };
};

export const ConvertDateToTimeObject = (date: Date): TimeObjectType | null => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};

export const ConvertCourseScheduleTimeToMinutes = (
  time: Nullable<string>,
): number => {
  const timeObject = ConvertCourseScheduleTimeToTimeObject(time);
  if (timeObject === null) return 0;
  return ConvertTimeToMinutes(timeObject.hour, timeObject.minute);
};

export const ConvertTimeToMinutes = (hour: number, minute: number) => {
  return hour * 60 + minute;
};

export const ConvertCourseScheduleConvertTimeToReadableFormat = (
  time: Nullable<string>,
): string => {
  const timeObject = ConvertCourseScheduleTimeToTimeObject(time);
  if (timeObject === null) return time ?? "";
  return ConvertTimeToReadableFormat(timeObject.hour, timeObject.minute);
};

export const ConvertTimeToReadableFormat = (
  hour: number,
  minute?: number,
): string => {
  return `${hour % 12 || 12}${
    typeof minute === "number" ? `:${String(minute).padStart(2, `0`)}` : ""
  } ${hour >= 12 ? `pm` : `am`}`;
};

export const ConvertDateToCourseScheduleTimeFormat = (date: Date) =>
  `${date.getHours().toString().padStart(2, "0")}${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

export function GetYPositionInTimetable(minutes: number) {
  // Subtract 510 for 8:30 from startMinutes, add 50 for table header
  if (isNaN(minutes)) return 50;
  return minutes - 510 + 50;
}

export function IsDateWithinViewDate(
  date: Date,
  viewDate: Date,
  isWeekView: boolean,
): boolean {
  const currentViewDate = new Date(viewDate);
  const tempPreviewDate = new Date(viewDate);
  if (isWeekView) {
    const firstDay = tempPreviewDate.getDate() - tempPreviewDate.getDay();
    const firstDayOfWeek = new Date(tempPreviewDate.setDate(firstDay));
    const lastDayOfWeek = new Date(currentViewDate.setDate(firstDay + 6));
    return firstDayOfWeek <= date && date <= lastDayOfWeek;
  } else {
    return AreDatesTheSame(tempPreviewDate, date);
  }
}

export const GetTotalDaysInMonth = (month: number, year: number) =>
  new Date(year, month, 0).getDate();

//Function to find the total occurances of a certain day of the week between two dates
export function FindDayOccurances(date1: Date, date2: Date, day?: number) {
  //Create an array to store all the dates between date1 and date2
  const allDates: Date[] = [];
  //Loop through all the dates between date1 and date2
  for (
    let d = new Date(date1);
    d <= new Date(date2);
    d.setDate(d.getDate() + 1)
  ) {
    //Push each date into the array
    if (day === undefined || new Date(d).getDay() === day)
      allDates.push(new Date(d));
  }
  return allDates;
}

export const GenerateEventDisplayWithDetails = ({
  startTime,
  endTime,
  content,
  borderColor,
}: {
  startTime: {
    hour: number;
    minute: number;
  } | null;
  endTime: {
    hour: number;
    minute: number;
  } | null;
  borderColor: string;
  content: JSX.Element;
}) => {
  return (
    <div
      className="my-1 rounded-sm border-2 p-2"
      style={{
        borderColor: borderColor,
      }}
    >
      {startTime && (
        <div className="text-sm">
          {ConvertTimeToReadableFormat(startTime.hour, startTime.minute)}
        </div>
      )}
      <div className="py-1">{content}</div>
      {endTime && (
        <div className="text-sm">
          {ConvertTimeToReadableFormat(endTime.hour, endTime.minute)}
        </div>
      )}
    </div>
  );
};

export function GetDateViewRangeFromDate(
  targetDate: Date,
  viewMode: TimetableViewMode = "day",
): {
  start: Date;
  end: Date;
} {
  const viewDateJs = targetDate;
  if (viewMode === "month") {
    const firstDateOfMonth = new Date(
      viewDateJs.getFullYear(),
      viewDateJs.getMonth(),
    );
    //
    const firstDayOfMonth = new Date(
      viewDateJs.getFullYear(),
      viewDateJs.getMonth(),
      1,
    );
    const firstDayOfWeek = firstDayOfMonth.getDay();
    // Calculate the difference between the first day of the month and the first day of the calendar
    const differenceFirstDay = (firstDayOfWeek + 7) % 7;
    // Subtract the difference from the first day of the month to get the first day displayed in the calendar
    const firstDayInCalendar = new Date(firstDayOfMonth);
    firstDayInCalendar.setDate(
      firstDayInCalendar.getDate() - differenceFirstDay,
    );
    //

    const daysInMonth = GetTotalDaysInMonth(
      viewDateJs.getMonth() + 1,
      viewDateJs.getFullYear(),
    );
    const assumedLastDayOfTimetable = 35 - firstDateOfMonth.getDay();
    const actualLastDayOfTimetable =
      assumedLastDayOfTimetable > daysInMonth
        ? assumedLastDayOfTimetable - daysInMonth
        : assumedLastDayOfTimetable;
    const lastDayOfTimetableDate = new Date(
      viewDateJs.getFullYear(),
      viewDateJs.getMonth() +
        (actualLastDayOfTimetable === assumedLastDayOfTimetable ? 0 : 1),
      actualLastDayOfTimetable,
    );
    return {
      start: firstDayInCalendar,
      end: lastDayOfTimetableDate,
    };
  } else if (viewMode === "week") {
    const viewStartDate = new Date(viewDateJs);
    const startDate = new Date(
      viewStartDate.setDate(viewStartDate.getDate() - viewStartDate.getDay()),
    );
    const viewEndDate = new Date(viewDateJs);
    const endDate = new Date(
      viewEndDate.setDate(viewEndDate.getDate() + (6 - viewEndDate.getDay())),
    );
    return {
      start: startDate,
      end: endDate,
    };
  } else {
    return {
      start: viewDateJs,
      end: viewDateJs,
    };
  }
}
