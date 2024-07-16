"use client";
import React from "react";
import { TimetableEventWeekAndDayElement } from "./TimetableCourseWeekDayDisplay";
import {
  AreDatesTheSame,
  ConvertCourseScheduleTimeToMinutes,
  ConvertTimeToMinutes,
  GenerateEventDisplayWithDetails,
  GetDateFromDayOfWeek,
  GetYPositionInTimetable,
  TimetableBuilderEventElementOptions,
  ViewDateObject,
  daysOfWeekThreeCharacters,
} from "./TimetableView-Helper";
import TimetableWeekViewCSS from "~/styles/Timetable/TimetableView-Week.module.css";
import {
  useIntersectionObserver,
  useInterval,
  useResizeListener,
} from "primereact/hooks";
import { cn } from "~/lib/utils";
import BasicDialog from "../General/Dialog";

export default function TimetableWeekAndDayView(props: {
  isWeekView: boolean;
  isHeaderSticky?: boolean;
  isVisible?: boolean;
  viewdate?: ViewDateObject;
  events?: TimetableBuilderEventElementOptions[];
}) {
  const weekViewFirstDayOfWeekRef = React.useRef<HTMLButtonElement>(null);
  const dayViewFirstDayOfWeekColumnReference =
    React.useRef<HTMLButtonElement>(null);
  const [dayViewWidth, setDayViewWidth] = React.useState<number>(0);
  const [weekViewWidth, setWeekViewWidth] = React.useState<number>(0);
  const [pageWidth, setPageWidth] = React.useState(0);
  const isWeekView = props.isWeekView;
  const isHeaderSticky =
    typeof props.isHeaderSticky === `boolean` ? props.isHeaderSticky : true;
  const isVisible =
    typeof props.isVisible === `boolean` ? props.isVisible : true;
  const { year, month, day } = props.viewdate ?? {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  };
  const currentViewDate = React.useMemo(
    () => new Date(year, month, day),
    [day, month, year],
  );
  const currentUserDate = new Date();
  const events = Array.isArray(props.events) ? props.events : [];

  const timetableWrapperElementRef = React.useRef(null);
  const isTimetableVisible = useIntersectionObserver(
    timetableWrapperElementRef,
  );

  React.useEffect(() => {
    setPageWidth(window.innerWidth);
    if (isWeekView) {
      const firstDayWidth = weekViewFirstDayOfWeekRef.current?.clientWidth ?? 0;
      setWeekViewWidth(firstDayWidth);
    } else if (dayViewFirstDayOfWeekColumnReference.current) {
      setDayViewWidth(
        dayViewFirstDayOfWeekColumnReference.current.clientWidth ?? 0,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWeekView, isVisible, pageWidth, isTimetableVisible]);

  const [bindWindowResizeListener, unbindWindowResizeListener] =
    useResizeListener({
      listener: () => {
        setPageWidth(window.innerWidth);
      },
    }) as [() => void, () => void];

  React.useEffect(() => {
    bindWindowResizeListener();
    return () => unbindWindowResizeListener();
  }, [bindWindowResizeListener, unbindWindowResizeListener]);

  const [isPrinting, setIsPrinting] = React.useState<boolean>(false);

  React.useEffect(() => {
    const beforePrint = function () {
      setIsPrinting(true);
    };
    const afterPrint = function () {
      setIsPrinting(false);
    };

    const mediaPrint = (event: MediaQueryListEvent) => {
      const eventTarget = event.target as { matches: boolean } | null;
      if (eventTarget?.matches) {
        beforePrint();
      } else {
        afterPrint();
      }
    };

    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia("print");
      mediaQueryList.addEventListener("change", mediaPrint);
    }

    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
      if (window.matchMedia) {
        const mediaQueryList = window.matchMedia("print");
        mediaQueryList.removeEventListener("change", mediaPrint);
      }
    };
  }, []);

  const [currentDayForDialog, setCurrentDayForDialog] = React.useState<
    number | null
  >(null);

  const isUserCurrentDay = (dayOfWeek: number): boolean => {
    const dayOfWeekDate = isWeekView
      ? GetDateFromDayOfWeek(currentViewDate, dayOfWeek)
      : currentViewDate;
    return AreDatesTheSame(currentUserDate, dayOfWeekDate);
  };

  const dayColumnWidth = isWeekView
    ? isPrinting
      ? 100
      : weekViewWidth
    : dayViewWidth;
  const timetableTimeRangeWidth = !isPrinting && pageWidth > 800 ? 100 : 50;
  const displayTimetableIndicator = isUserCurrentDay(currentUserDate.getDay());
  const timetableIndicatorPosition =
    timetableTimeRangeWidth + new Date().getDay() * dayColumnWidth;
  const CourseElementDimensions = {
    timetableTimeRangeWidth,
    dayWidth: dayColumnWidth,
  };

  const isViewingCurrentDayDialog = typeof currentDayForDialog === `number`;

  const allEventsForTimetableEvent = events;

  const allDayEventsForTimetableEvent = React.useMemo(() => {
    if (!isViewingCurrentDayDialog) return [];
    const currentDayForDialogDate = isViewingCurrentDayDialog
      ? GetDateFromDayOfWeek(currentViewDate, currentDayForDialog)
      : new Date();
    return allEventsForTimetableEvent
      .filter((event) =>
        AreDatesTheSame(event.eventOccurance.date, currentDayForDialogDate),
      )
      .sort((a, b) => {
        if (
          a.eventOccurance.startTime === null ||
          b.eventOccurance.startTime === null
        )
          return 0;
        const aStartMinutes = ConvertTimeToMinutes(
          a.eventOccurance.startTime.hour,
          a.eventOccurance.startTime.minute,
        );
        const bStartMinutes = ConvertTimeToMinutes(
          b.eventOccurance.startTime.hour,
          b.eventOccurance.startTime.minute,
        );
        if (aStartMinutes > bStartMinutes) {
          return 1;
        } else if (bStartMinutes > aStartMinutes) {
          return -1;
        }
        return 0;
      });
  }, [
    GetDateFromDayOfWeek,
    allEventsForTimetableEvent,
    currentDayForDialog,
    isViewingCurrentDayDialog,
  ]);

  return (
    <div
      className={cn(
        TimetableWeekViewCSS.timetableWeekDayViewWrapper,
        isWeekView
          ? TimetableWeekViewCSS.isTimetableWeekView
          : TimetableWeekViewCSS.isTimetableDayView,
      )}
    >
      <div className="absolute">
        {allEventsForTimetableEvent.map((event) => (
          <TimetableEventWeekAndDayElement
            key={event.key}
            borderColor={event.borderColor}
            content={event.content}
            dimensions={CourseElementDimensions}
            eventOccurance={event.eventOccurance}
            isWeekView={isWeekView}
            previewDate={currentViewDate}
            tooltip={event.tooltip}
          />
        ))}
        <TimetableTimeIndicator
          dayPosition={timetableIndicatorPosition}
          displayTimetableIndicator={displayTimetableIndicator}
          isWeekView={isWeekView}
          widthTimetableIndicator={dayColumnWidth}
        />
      </div>
      <BasicDialog
        open={typeof currentDayForDialog === `number`}
        pt={{
          content: {
            className:
              allDayEventsForTimetableEvent.length === 0
                ? "w-full sm:w-64"
                : "max-w-sm",
          },
        }}
        onOpenChange={() => setCurrentDayForDialog(null)}
      >
        <div
          className={cn("text-xl font-bold", {
            "text-green-500":
              typeof currentDayForDialog === `number`
                ? isUserCurrentDay(currentDayForDialog)
                : false,
          })}
        >
          {typeof currentDayForDialog === `number`
            ? GetDateFromDayOfWeek(
                currentViewDate,
                currentDayForDialog,
              ).toDateString()
            : "Timetable Builder"}
        </div>
        <div>
          {allDayEventsForTimetableEvent.length > 0 ? (
            allDayEventsForTimetableEvent.map((event) => (
              <div key={event.key}>
                <GenerateEventDisplayWithDetails
                  borderColor={event.borderColor}
                  content={event.tooltip?.content ?? event.content}
                  endTime={event.eventOccurance.endTime}
                  startTime={event.eventOccurance.startTime}
                />
              </div>
            ))
          ) : (
            <div>No events</div>
          )}
        </div>
      </BasicDialog>
      <div
        ref={timetableWrapperElementRef}
        className={cn(
          "mx-auto w-full",
          isWeekView
            ? TimetableWeekViewCSS.timetableWeekView
            : TimetableWeekViewCSS.timetableDayView,
        )}
      >
        <TimetableRowWrapper
          className={cn(
            TimetableWeekViewCSS.timetableDaysOfWeekHeading,
            "h-[50px]",
            isHeaderSticky ? " print:static" : undefined,
          )}
        >
          <div></div>
          {isWeekView ? (
            Array(7)
              .fill(undefined)
              .map((_, index) => (
                <TimetableWeekDayHead
                  key={index}
                  dayOfWeek={index}
                  currentViewDate={currentViewDate}
                  GetDateFromDayOfWeek={GetDateFromDayOfWeek}
                  isUserCurrentDay={isUserCurrentDay}
                  ref={index === 0 ? weekViewFirstDayOfWeekRef : undefined}
                  setCurrentDayForDialog={setCurrentDayForDialog}
                />
              ))
          ) : (
            <TimetableWeekDayHead
              dayOfWeek={currentViewDate.getDay()}
              currentViewDate={currentViewDate}
              GetDateFromDayOfWeek={GetDateFromDayOfWeek}
              isUserCurrentDay={isUserCurrentDay}
              ref={dayViewFirstDayOfWeekColumnReference}
              setCurrentDayForDialog={setCurrentDayForDialog}
            />
          )}
        </TimetableRowWrapper>
        <TimetableTimeRangeRow
          endTime="9:50am"
          isWeekView={isWeekView}
          startTime="8:30am"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="11:20am"
          isWeekView={isWeekView}
          startTime="10:00am"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="12:50pm"
          isWeekView={isWeekView}
          startTime="11:30am"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="2:20pm"
          isWeekView={isWeekView}
          startTime="1:00pm"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="3:50pm"
          isWeekView={isWeekView}
          startTime="2:30pm"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="5:20pm"
          isWeekView={isWeekView}
          startTime="4:00pm"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="6:50pm"
          isWeekView={isWeekView}
          startTime="5:30pm"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="8:20pm"
          isWeekView={isWeekView}
          startTime="7:00pm"
        />
        <TimetableBreakRow isWeekView={isWeekView} />
        <TimetableTimeRangeRow
          endTime="9:50pm"
          isWeekView={isWeekView}
          startTime="8:30pm"
        />
      </div>
    </div>
  );
}

interface TimetableWeekDayHeadProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dayOfWeek: number;
  currentViewDate: Date;
  isUserCurrentDay: (dayOfWeek: number) => boolean;
  GetDateFromDayOfWeek: (currentViewDate: Date, value: number) => Date;
  setCurrentDayForDialog: React.Dispatch<React.SetStateAction<number | null>>;
}

const TimetableWeekDayHead = React.forwardRef<
  HTMLButtonElement,
  TimetableWeekDayHeadProps
>(
  (
    {
      className,
      dayOfWeek,
      currentViewDate,
      GetDateFromDayOfWeek,
      isUserCurrentDay,
      setCurrentDayForDialog,
      ...props
    },
    ref,
  ) => {
    const getMonthOfDay = (dayOfWeek: number) =>
      GetDateFromDayOfWeek(currentViewDate, dayOfWeek).toLocaleDateString(
        "en-US",
        {
          month: "short",
        },
      );
    const getDateOfDay = (dayOfWeek: number) =>
      GetDateFromDayOfWeek(currentViewDate, dayOfWeek).toLocaleDateString(
        "en-US",
        {
          day: "numeric",
        },
      );

    const dayOfWeekThreeCharacters = daysOfWeekThreeCharacters[dayOfWeek];
    return (
      <button
        {...props}
        ref={ref}
        aria-label={`See all the events that occur on ${GetDateFromDayOfWeek(
          currentViewDate,
          dayOfWeek,
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}`}
        className={cn(
          TimetableWeekViewCSS.viewDateDayOfWeekButton,
          "hover:bg-slate-300/50 dark:hover:bg-slate-950/50",
          {
            "text-green-500": isUserCurrentDay(dayOfWeek),
          },
          className,
        )}
        onClick={() => setCurrentDayForDialog(dayOfWeek)}
      >
        {getMonthOfDay(dayOfWeek)}{" "}
        <br className={TimetableWeekViewCSS.weekViewDateSeparator} />
        {getDateOfDay(dayOfWeek)}
        <br />
        {typeof dayOfWeekThreeCharacters === `string` ? (
          <>
            {dayOfWeekThreeCharacters.substring(0, 2)}
            <span>{dayOfWeekThreeCharacters.substring(2, 3)}</span>
          </>
        ) : (
          "ERR"
        )}
      </button>
    );
  },
);
TimetableWeekDayHead.displayName = "TimetableWeekDayHead";

function TimetableTimeIndicator(props: {
  isWeekView: boolean;
  dayPosition: string | number;
  widthTimetableIndicator: string | number;
  displayTimetableIndicator?: boolean;
}) {
  function GetCurrentTimeToMinutes() {
    const currentTime = new Date();
    return ConvertCourseScheduleTimeToMinutes(
      currentTime.getHours().toString().padStart(2, "0") +
        currentTime.getMinutes().toString().padStart(2, "0"),
    );
  }
  const [timeIndicatorMinutes, setTimeIndicatorMinutes] = React.useState(
    GetCurrentTimeToMinutes(),
  );

  const positionOfIndicator = GetYPositionInTimetable(timeIndicatorMinutes);
  const shouldDisplayIndicator =
    positionOfIndicator >= 50 && positionOfIndicator < 850
      ? props.displayTimetableIndicator
      : false;

  useInterval(
    () => {
      setTimeIndicatorMinutes(GetCurrentTimeToMinutes());
    },
    60 * 1000,
    true,
  );

  if (!shouldDisplayIndicator) return <></>;
  return (
    <div
      aria-label="The current time indicator"
      className={cn(
        TimetableWeekViewCSS.timetableIndicator,
        "flex items-center z-[100]",
      )}
      style={{
        top: positionOfIndicator - 4,
        left: props.isWeekView
          ? props.dayPosition
          : "var(--timeRangeColumnWidth)",
        width: props.widthTimetableIndicator,
      }}
    >
      <div
        className={cn(
          TimetableWeekViewCSS.timetableIndicatorArrow,
          "border-l-[4px] border-green-500",
        )}
      ></div>
      <div className="h-[2px] flex-1 bg-green-500"></div>
      <div
        className={cn(
          TimetableWeekViewCSS.timetableIndicatorArrow,
          "border-r-[4px] border-green-500",
        )}
      ></div>
    </div>
  );
}

//
//
//
const getColumnsByMode = (isWeekView: boolean) => (isWeekView ? 8 : 2);
const cellRightBorder = "border-r border-slate-400/50";

const TimetableRowWrapper = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      TimetableWeekViewCSS.timetableRow,
      "grid bg-slate-200 dark:bg-slate-900 print:bg-white print:text-black print:dark:bg-white",
      props.className,
    )}
  >
    {props.children}
  </div>
));

TimetableRowWrapper.displayName = "TimetableRowWrapper";

function TimetableTimeRangeRow({
  startTime,
  isWeekView,
  endTime,
}: {
  startTime: string;
  isWeekView: boolean;
  endTime: string;
}) {
  const columns = getColumnsByMode(isWeekView);
  return (
    <TimetableRowWrapper className="h-[80px]">
      <div
        className={cn(
          TimetableWeekViewCSS.timetableTimeRangeCell,
          "flex flex-col justify-center py-[2px]",
          cellRightBorder,
        )}
      >
        <div>{startTime}</div>
        <div className="flex-1"></div>
        <div>{endTime}</div>
      </div>
      {Array(columns - 1)
        .fill(undefined)
        .map((_, index) => (
          <div
            key={index}
            className={index < columns - 2 ? cellRightBorder : undefined}
          ></div>
        ))}
    </TimetableRowWrapper>
  );
}

function TimetableBreakRow({ isWeekView }: { isWeekView: boolean }) {
  const columns = getColumnsByMode(isWeekView);
  return (
    <TimetableRowWrapper className="h-[10px] border-y border-y-slate-400 dark:border-y-slate-700">
      {Array(columns)
        .fill(undefined)
        .map((_, index) => (
          <div
            key={index}
            className={cn(index < columns - 1 ? cellRightBorder : undefined)}
          ></div>
        ))}
    </TimetableRowWrapper>
  );
}
