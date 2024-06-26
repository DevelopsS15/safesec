"use client";
import TimetableMonthViewCSS from "../../styles/Timetable/TimetableView-Month.module.css";
import { cn } from "~/lib/utils";
import {
  AreDatesTheSame,
  ConvertTimeToMinutes,
  ConvertTimeToReadableFormat,
  GenerateEventDisplayWithDetails,
  GetTotalDaysInMonth,
  TimetableBuilderEventElementOptions,
  daysOfWeekThreeCharacters,
} from "./TimetableView-Helper";
import { useMemo, useState } from "react";
import BasicDialog from "../General/Dialog";
import { Badge } from "../ui/badge";

export default function TimetableMonthView(props: {
  viewdate?: { month: number; day: number; year: number };
  events?: TimetableBuilderEventElementOptions[];
}) {
  const { viewdate } = props;
  if (!viewdate) return;
  const { month, year, day } = viewdate;
  const currentViewDate = new Date(year, month, day);
  const daysInMonth = GetTotalDaysInMonth(
    currentViewDate.getMonth() + 1,
    currentViewDate.getFullYear(),
  );
  const firstDateOfMonth = new Date(
    currentViewDate.getFullYear(),
    currentViewDate.getMonth(),
  );

  const GetDateFromWeekAndDay = (weekIndex: number, dayIndex: number) => {
    const day = weekIndex * 7 + dayIndex + 1;
    const dayData = {
      number: day - firstDateOfMonth.getDay(),
      month: "current",
    };
    switch (true) {
      case day <= firstDateOfMonth.getDay():
        const daysInPreviousMonth = GetTotalDaysInMonth(
          currentViewDate.getMonth(),
          currentViewDate.getFullYear(),
        );
        dayData.number =
          daysInPreviousMonth - firstDateOfMonth.getDay() + dayIndex + 1;
        dayData.month = "previous";
        break;
      // Handles the next month days
      case day - firstDateOfMonth.getDay() > daysInMonth:
        dayData.number = day - firstDateOfMonth.getDay() - daysInMonth;
        dayData.month = "next";
        break;
    }
    return dayData;
  };

  const isUserCurrentDay = (weekIndex: number, dayIndex: number) =>
    AreDatesTheSame(
      new Date(),
      new Date(
        currentViewDate.getFullYear(),
        currentViewDate.getMonth(),
        GetDateFromWeekAndDay(weekIndex, dayIndex).number,
      ),
    );

  return (
    <table className={TimetableMonthViewCSS.calendar}>
      <thead>
        <tr
          className={cn(
            TimetableMonthViewCSS.calendarDaysOfWeek,
            "sticky left-0 top-16 border-x border-b border-slate-300 bg-slate-200 dark:border-slate-800 dark:bg-slate-900 print:static print:bg-white print:text-black print:dark:bg-white",
          )}
        >
          <th>
            SU<span>N</span>
          </th>
          <th>
            MO<span>N</span>
          </th>
          <th>
            TU<span>E</span>
          </th>
          <th>
            WE<span>D</span>
          </th>
          <th>
            TH<span>U</span>
          </th>
          <th>
            FR<span>I</span>
          </th>
          <th>
            SA<span>T</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5].map((a, weekIndex) => (
          <tr key={`calendarWeek${a}`}>
            {daysOfWeekThreeCharacters.map((d, dayIndex) => {
              const loopDayNumber = GetDateFromWeekAndDay(weekIndex, dayIndex);
              let monthForEvents = currentViewDate.getMonth();
              if (loopDayNumber.month === "next") {
                monthForEvents += 1;
              } else if (loopDayNumber.month === "previous") {
                monthForEvents -= 1;
              }
              const calendarDayId = `calendarDay-${a}-${d}`;

              return (
                <CalendarDay
                  key={calendarDayId}
                  currentViewDate={currentViewDate}
                  events={Array.isArray(props.events) ? props.events : []}
                  GetDateFromWeekAndDay={GetDateFromWeekAndDay}
                  id={calendarDayId}
                  isUserCurrentDay={isUserCurrentDay(weekIndex, dayIndex)}
                  loopDayNumber={GetDateFromWeekAndDay(weekIndex, dayIndex)}
                  monthForEvents={monthForEvents}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CalendarDay({
  id,
  currentViewDate,
  monthForEvents,
  loopDayNumber,
  events,
  isUserCurrentDay,
}: {
  id: string;
  currentViewDate: Date;
  monthForEvents: number;
  loopDayNumber: {
    number: number;
    month: string;
  };
  events: TimetableBuilderEventElementOptions[];
  GetDateFromWeekAndDay: (
    weekIndex: number,
    dayIndex: number,
  ) => {
    number: number;
    month: string;
  };
  isUserCurrentDay: boolean;
}) {
  const targetDate: Date = useMemo(
    () =>
      new Date(
        currentViewDate.getFullYear(),
        monthForEvents,
        loopDayNumber.number,
      ),
    [currentViewDate, loopDayNumber.number, monthForEvents],
  );

  const [isDayDialogVisible, setDayDialogVisible] = useState<boolean>(false);

  const allEventsForDay: TimetableBuilderEventElementOptions[] = useMemo(
    () =>
      events
        .filter((event) =>
          AreDatesTheSame(new Date(event.eventOccurance.date), targetDate),
        )
        .sort((a, b) => {
          const aStartTime = a.eventOccurance.startTime;
          const bStartTime = b.eventOccurance.endTime;
          if (aStartTime === null || bStartTime === null) return 0;
          const aStartMinutes = ConvertTimeToMinutes(
            aStartTime.hour,
            aStartTime.minute,
          );
          const bStartMinutes = ConvertTimeToMinutes(
            bStartTime.hour,
            bStartTime.minute,
          );
          if (aStartMinutes > bStartMinutes) {
            return 1;
          } else if (bStartMinutes > aStartMinutes) {
            return -1;
          }
          return 0;
        }),
    [events, targetDate],
  );

  const maximumEventsToDisplayPerDay = 2;
  const classNameMonth =
    loopDayNumber.month === "current"
      ? undefined
      : cn(
          TimetableMonthViewCSS[`${loopDayNumber.month}Month`],
          "bg-slate-300 hover:bg-slate-300/75 dark:bg-slate-900/50 dark:hover:bg-slate-900/25 print:bg-slate-100 print:dark:bg-slate-100",
        );
  const calendaryDayTooltipId = allEventsForDay.length > 0 ? id : undefined;

  const shouldDisplayEvents =
    allEventsForDay.length > 0 && calendaryDayTooltipId;
  const cellMaxHeight = 160;

  return (
    <>
      <BasicDialog
        open={isDayDialogVisible}
        pt={{
          content: {
            className:
              allEventsForDay.length === 0 ? "w-full sm:w-64" : "max-w-sm",
          },
        }}
        onOpenChange={setDayDialogVisible}
      >
        <div className="text-xl font-bold">{targetDate.toDateString()}</div>
        <div>
          {isUserCurrentDay && (
            <Badge className="mb-1 block w-max" variant="secondary">
              Today
            </Badge>
          )}
          {allEventsForDay.length > 0 ? (
            allEventsForDay.map((event) => (
              <GenerateEventDisplayWithDetails
                key={event.key}
                borderColor={event.borderColor}
                content={event.tooltip?.content ?? event.content}
                endTime={event.eventOccurance.endTime}
                startTime={event.eventOccurance.startTime}
              />
            ))
          ) : (
            <div>No events</div>
          )}
        </div>
      </BasicDialog>
      <td
        id={calendaryDayTooltipId}
        aria-label={
          allEventsForDay.length > 0
            ? `${allEventsForDay.length} events on ${targetDate.toLocaleDateString(
                undefined,
                {
                  month: "long",
                  day: "numeric",
                },
              )}. Click to view the full details.`
            : `No events on ${targetDate.toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
              })}`
        }
        className={cn(
          TimetableMonthViewCSS.day,
          "border border-slate-300 bg-slate-200 hover:bg-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-900/50 print:bg-white print:text-black print:dark:bg-white",
          classNameMonth,
          isUserCurrentDay && loopDayNumber.month === "current"
            ? TimetableMonthViewCSS.currentDay
            : undefined,
          allEventsForDay.length > 0 ? "cursor-pointer" : undefined,
        )}
        style={{
          height: cellMaxHeight,
        }}
        onClick={
          allEventsForDay.length > 0
            ? () => setDayDialogVisible(true)
            : undefined
        }
      >
        <div
          className="vertical-align-top flex flex-col gap-1 overflow-hidden p-1"
          style={{
            maxHeight: cellMaxHeight,
          }}
        >
          <div
            className={cn(TimetableMonthViewCSS.dayNumber, {
              "aspect-square w-max rounded-sm bg-green-700 text-center text-white":
                isUserCurrentDay,
            })}
          >
            {loopDayNumber.number}
          </div>
          {shouldDisplayEvents &&
            allEventsForDay.map((event, index) => {
              if (index > maximumEventsToDisplayPerDay) return <></>;

              const totalEventsExceedingMaximumDisplay =
                allEventsForDay.length - maximumEventsToDisplayPerDay;
              const eventClassName =
                "rounded-sm border-2 bg-slate-100 p-1 text-xs font-bold dark:bg-slate-800 print:bg-white print:dark:bg-white";
              if (index === maximumEventsToDisplayPerDay)
                return (
                  <div
                    key={event.key}
                    className={cn(TimetableMonthViewCSS.event, eventClassName)}
                  >
                    +{totalEventsExceedingMaximumDisplay} event
                    {totalEventsExceedingMaximumDisplay > 1 ? "s" : ""}
                  </div>
                );

              return (
                <div
                  key={event.key}
                  className={cn(TimetableMonthViewCSS.event, eventClassName)}
                  style={{
                    borderColor: event.borderColor,
                  }}
                >
                  {event.showTimeInMonthView && (
                    <span className={TimetableMonthViewCSS.eventTime}>
                      {ConvertTimeToReadableFormat(
                        event.eventOccurance.startTime.hour,
                        event.eventOccurance.startTime.minute,
                      )}
                      <br />
                    </span>
                  )}
                  {event.summaryMonthView ?? event.content}
                </div>
              );
            })}
        </div>
      </td>
    </>
  );
}
