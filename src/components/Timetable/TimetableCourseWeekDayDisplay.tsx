import {
  ConvertTimeToMinutes,
  ConvertTimeToReadableFormat,
  GenerateEventDisplayWithDetails,
  GetYPositionInTimetable,
  IsDateWithinViewDate,
} from "./TimetableView-Helper";
import TimetableViewWeekCSS from "~/styles/Timetable/TimetableView-Week.module.css";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "primereact/hooks";
import { cn } from "~/lib/utils";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export function TimetableEventWeekAndDayElement(props: {
  isWeekView: boolean;
  eventOccurance: {
    date: Date | string;
    startTime: {
      hour: number;
      minute: number;
    } | null;
    endTime: {
      hour: number;
      minute: number;
    } | null;
  };
  borderColor: string;
  content: JSX.Element;
  tooltip?: {
    id?: string;
    content: JSX.Element;
  };
  previewDate: Date;
  dimensions: {
    timetableTimeRangeWidth: number;
    dayWidth: number;
  };
}) {
  const expandedWrapperRef = useRef<HTMLDivElement>(null);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [overrideExpandedPosition, setOverrideExpandedPosition] = useState<{
    active: boolean;
    position: number;
  }>({
    active: false,
    position: 0,
  });
  const { isWeekView, eventOccurance } = props;
  const HideExpanded = () => {
    setExpanded(false);
    setOverrideExpandedPosition({
      active: false,
      position: 0,
    });
  };
  useClickOutside(expandedWrapperRef, () => {
    HideExpanded();
  });

  const eventDate = new Date(eventOccurance.date);

  const eventDayOfWeekPosition = eventDate.getDay();
  // If the start and end dates are the same, it is one time occurence
  const currentViewDate = new Date(props.previewDate);

  // Set the horizontal position in the timetable
  const { timetableTimeRangeWidth, dayWidth } = props.dimensions;
  const dayPosition =
    Math.floor(dayWidth) * eventDayOfWeekPosition + timetableTimeRangeWidth;

  const eventXPosition = isWeekView ? dayPosition : timetableTimeRangeWidth;
  const eventWidth = dayWidth;

  useEffect(() => {
    if (
      expandedContentRef.current === null ||
      !isExpanded ||
      overrideExpandedPosition.active
    )
      return;
    const expandedBounding = expandedContentRef.current.getBoundingClientRect();
    setOverrideExpandedPosition({
      active:
        expandedBounding.left + expandedBounding.width >
        document.documentElement.clientWidth,
      position: dayPosition - expandedBounding.width - 8,
    });
  }, [dayPosition, isExpanded, overrideExpandedPosition.active]);

  if (
    eventOccurance.startTime === null ||
    eventOccurance.endTime === null ||
    !IsDateWithinViewDate(eventDate, currentViewDate, isWeekView)
  )
    return <></>;

  // Set the vertical position in the timetable
  const eightThirtyPosition = GetYPositionInTimetable(
    ConvertTimeToMinutes(8, 30),
  );
  const nineFiftyMinutes = ConvertTimeToMinutes(21, 50);
  const nineFiftyPosition = GetYPositionInTimetable(nineFiftyMinutes);

  const endTimeMinutes = ConvertTimeToMinutes(
    eventOccurance.endTime.hour,
    eventOccurance.endTime.minute,
  );
  const startTimeMinutes = ConvertTimeToMinutes(
    eventOccurance.startTime.hour,
    eventOccurance.startTime.minute,
  );
  if (
    GetYPositionInTimetable(endTimeMinutes) < eightThirtyPosition ||
    GetYPositionInTimetable(startTimeMinutes) > nineFiftyPosition
  )
    return <></>;

  const eventYPosition = Math.max(
    GetYPositionInTimetable(startTimeMinutes),
    eightThirtyPosition,
  );
  const eventActualDuration = endTimeMinutes - startTimeMinutes;
  // If duration results in end time exceeding 9:50pm, show element until 9:50pm

  const eventDuration =
    eventYPosition + eventActualDuration > nineFiftyPosition
      ? nineFiftyPosition - eventYPosition
      : eventActualDuration;

  const isEventDurationGreaterThanPeriod = eventDuration >= 80;

  return (
    <div className="absolute w-0" ref={expandedWrapperRef}>
      <Popover
        open={isWeekView && isExpanded}
        onOpenChange={(open) => setExpanded(open)}
      >
        <PopoverTrigger asChild>
          <button
            disabled={!isWeekView}
            className={cn(
              TimetableViewWeekCSS.course,
              "border-2 bg-slate-100 dark:bg-slate-800 print:bg-white print:text-black print:dark:bg-white",
              {
                isDayView: !isWeekView,
                "cursor-pointer": isWeekView,
              },
            )}
            style={{
              top: eventYPosition,
              left: eventXPosition,
              width: eventWidth,
              borderColor: props.borderColor,
              height: eventDuration,
              gridTemplateRows: isEventDurationGreaterThanPeriod
                ? "max-content auto max-content auto max-content"
                : "auto max-content auto",
            }}
          >
            {isEventDurationGreaterThanPeriod && (
              <div className={TimetableViewWeekCSS.courseTime}>
                {ConvertTimeToReadableFormat(
                  eventOccurance.startTime.hour,
                  eventOccurance.startTime.minute,
                )}
              </div>
            )}
            <div></div>
            <div className="flex w-full max-w-full flex-col justify-center overflow-hidden">
              {props.content}
            </div>
            <div></div>
            {isEventDurationGreaterThanPeriod && (
              <div className={TimetableViewWeekCSS.courseTime}>
                {ConvertTimeToReadableFormat(
                  eventOccurance.endTime.hour,
                  eventOccurance.endTime.minute,
                )}
              </div>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-max border border-slate-400 bg-slate-200 drop-shadow-md dark:border-slate-600 dark:bg-slate-800"
          side="right"
        >
          <PopoverArrow className="fill-slate-400 dark:fill-slate-600" />
          <GenerateEventDisplayWithDetails
            borderColor={props.borderColor}
            content={props.tooltip?.content ?? props.content}
            endTime={eventOccurance.endTime}
            startTime={eventOccurance.startTime}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
