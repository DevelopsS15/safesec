import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideCalendar,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  GetViewDateObjectFromDate,
  TimetableViewMode,
  ViewDateObject,
} from "../Timetable/TimetableView-Helper";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import React from "react";
import { Calendar } from "../ui/calendar";

export const ViewDateNavigatorComponent = ({
  viewMode = "week",
  setViewDateToGivenDate,
  switchViewDate,
}: {
  viewMode?: TimetableViewMode;
  switchViewDate: (viewMode: TimetableViewMode, direction: -1 | 1) => void;
  setViewDateToGivenDate: (date: Date) => ViewDateObject;
}) =>
  viewMode && (
    <>
      <div className="flex gap-2">
        <div className="flex items-center">
          <Button
            aria-label="Go to the previous week in the timetable"
            className="h-8 rounded-r-none px-2 py-1"
            variant="success"
            onClick={() => switchViewDate(viewMode, -1)}
          >
            <LucideArrowLeft className="size-4" />
          </Button>
          <Button
            aria-label="Set the current viewing week to today"
            className="h-8 rounded-none"
            size="sm"
            variant="success"
            onClick={() => setViewDateToGivenDate(new Date())}
          >
            Today
          </Button>
          <Button
            aria-label="Go to the next week in the timetable"
            className="h-8 rounded-l-none px-2 py-1"
            variant="success"
            onClick={() => switchViewDate(viewMode, 1)}
          >
            <LucideArrowRight className="size-4" />
          </Button>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              aria-label="Open calendar selector"
              className="h-8 px-2 py-1"
              variant="success"
            >
              <LucideCalendar className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center" className="w-auto p-0">
            <Calendar
              initialFocus
              disabled={(date) => date < new Date("2015-01-01")}
              mode="single"
              selected={undefined}
              onSelect={(e) => setViewDateToGivenDate(e!)}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );

export default function useViewDateHandler() {
  const [viewDate, setViewDate] = React.useState<ViewDateObject>(
    GetViewDateObjectFromDate(new Date()),
  );
  const setViewDateToGivenDate = (date: Date) => {
    const dateObject = GetViewDateObjectFromDate(date);
    setViewDate(dateObject);
    return dateObject;
  };

  const switchViewDate = (viewMode: TimetableViewMode, direction: 1 | -1) => {
    const newViewYear = viewDate.year;
    let newViewMonth = viewDate.month;
    let newViewDay = viewDate.day;

    if (viewMode === "month") {
      if (direction > 0) {
        newViewMonth += 1;
      } else if (direction < 0) {
        newViewMonth -= 1;
      }
      newViewDay = 1;
    } else {
      const dayIncrement = viewMode === "week" ? 7 : 1;
      if (direction > 0) {
        newViewDay += dayIncrement;
      } else if (direction < 0) {
        newViewDay -= dayIncrement;
      }
    }
    setViewDateToGivenDate(new Date(newViewYear, newViewMonth, newViewDay));
  };

  return {
    viewDate,
    setViewDate,
    setViewDateToGivenDate,
    switchViewDate,
    ViewDateNavigatorComponent,
  };
}
