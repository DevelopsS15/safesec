"use client";
import React from "react";
import { TSRestClient } from "~/components/Global/TSRestClient";
import useViewDateHandler from "~/components/Hooks/useViewDateHandler";
import {
  GetDateViewRangeFromDate,
  TimetableBuilderEventElementOptions,
  TimetableViewMode,
  ViewDateObject,
} from "~/components/Timetable/TimetableView-Helper";
import TimetableWeekAndDayView from "~/components/Timetable/TimetableView-WeekAndDay";
import { OccupantsByCampusBuildingFloor } from "~/lib/types/Routes";
import { timetableTimeRanges } from "~/lib/utils.occupants";

export default function Page() {
  const {
    viewDate,
    switchViewDate,
    setViewDateToGivenDate,
    ViewDateNavigatorComponent,
  } = useViewDateHandler();

  const [occupantsData, setOccupantsData] = React.useState<
    {
      date: Date;
      occupants: (OccupantsByCampusBuildingFloor | null)[];
    }[]
  >([]);
  const [occupantDatesFetched, setOccupantsDatesFetched] = React.useState<
    Set<string>
  >(new Set());

  React.useEffect(() => {
    const { start, end: endDate } = GetDateViewRangeFromDate(
      new Date(viewDate.year, viewDate.month, viewDate.day),
      "week",
    );
    let currentDate = new Date(start);
    let allDates = new Set<Date>();
    const _occupantsData = [...occupantsData];
    const _occupantDatesFetched = new Set(occupantDatesFetched);
    while (currentDate <= endDate) {
      //   if (!occupantDatesFetched.has(currentDate.toDateString())) {
      allDates.add(currentDate);
      // _occupantDatesFetched.add(currentDate.toDateString());
      //   }
      var date = new Date(currentDate);
      date.setDate(date.getDate() + 1);
      currentDate = date;
    }
    // setOccupantsDatesFetched(_occupantDatesFetched);
    for (const targetDate of allDates) {
      TSRestClient.occupants
        .getOccupantsForTimetable({
          body: {
            date: targetDate.toISOString(),
          },
        })
        .then((response) => {
          if (response.status === 200) {
            _occupantsData.push({
              date: targetDate,
              occupants: response.body,
            });
            setOccupantsData(_occupantsData);
          } else {
            console.log(
              `Unable to fetch for  ${targetDate.toISOString()}: ${response.status === 500 || response.status === 401 ? response.body : "Unknown error"}`,
            );
          }
        })
        .catch((err) => {
          console.log(`Unable to fetch ${targetDate.toISOString()}`);
        });
    }

    console.log(allDates);
  }, [viewDate]);

  console.log(occupantsData);

  const events: TimetableBuilderEventElementOptions[] = occupantsData

    .map((occupantDataForDate) =>
      occupantDataForDate.occupants
        .filter((timeRange) => timeRange !== null)
        .map((timeRange, timeRangeIndex) => {
          const timeRangeTimes = timetableTimeRanges[timeRangeIndex]!;
          //   if (!timeRange)
          //     return {
          //       key: `${occupantDataForDate.date.toISOString()}-`,
          //       borderColor: "#00000000",
          //       content: <></>,
          //       eventOccurance: {
          //         date: occupantDataForDate.date,
          //         startTime: {
          //           hour: timeRangeTimes.startHour,
          //           minute: timeRangeTimes.startMinute,
          //         },
          //         endTime: {
          //           hour: timeRangeTimes.endHour,
          //           minute: timeRangeTimes.endMinute,
          //         },
          //       },
          //     };
          return {
            key: `${occupantDataForDate.date.toISOString()}-${timeRangeIndex}`,
            borderColor: "green",
            content: <></>,
            eventOccurance: {
              date: occupantDataForDate.date,
              startTime: {
                hour: timeRangeTimes.startHour,
                minute: timeRangeTimes.startMinute,
              },
              endTime: {
                hour: timeRangeTimes.endHour,
                minute: timeRangeTimes.endMinute,
              },
            },
            showTimeInMonthView: false,
            tooltip: {
              content: (
                <div>
                  <div>
                    Abbotsford
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2 font-bold">
                      <div>Building</div>
                      <div>Floor</div>
                      <div>Students</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div>ABA</div>
                      <div></div>
                      <div>100</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div></div>
                      <div>1</div>
                      <div>25</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div></div>
                      <div>2</div>
                      <div>50</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div></div>
                      <div>3</div>
                      <div>25</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div></div>
                      <div className="font-semibold">Total</div>
                      <div>100</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/50 px-2">
                      <div></div>
                      <div>&nbsp;</div>
                      <div></div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div>ABD</div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div></div>
                      <div>1</div>
                      <div>20</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div></div>
                      <div>2</div>
                      <div>20</div>
                    </div>
                    <div className="grid grid-cols-3 bg-slate-100/75 px-2">
                      <div></div>
                      <div className="font-semibold">Total</div>
                      <div>40</div>
                    </div>
                  </div>
                  {/* {JSON.stringify(timeRange.A)} */}
                  {/* {Object.entries(timeRange).map(([key, value]) => (
                    <div key={key}>
                      <div className="grid grid-cols-2 bg-slate-100/75 px-2 font-bold">
                        <div>Floor</div>
                        <div>Students</div>
                      </div>
                      {Object.entries(value).map(([keyBuilding, valueBuilding]) => (
                        <div
                          key={keyBuilding}
                          className="grid grid-cols-2 bg-slate-50 px-2"
                        >
                          <div>{keyBuilding}</div>
                          <div>Smt</div>
                        </div>
                      ))}
                      <div className="grid grid-cols-2 bg-slate-100/75 px-2 font-bold">
                        <div>Total</div>
                        <div>
                          {Object.values(value).reduce((a, b) => a + b)}
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              ),
            },
          };
        }),
    )
    .flat(1);

  return (
    <div className="w-full max-w-[800px]">
      <div className="my-2 flex w-full">
        <div className="flex-1"></div>
        <ViewDateNavigatorComponent
          switchViewDate={switchViewDate}
          setViewDateToGivenDate={setViewDateToGivenDate}
        />
      </div>
      <TimetableWeekAndDayView
        isHeaderSticky={false}
        isWeekView={true}
        events={events}
        viewdate={viewDate}
      />
    </div>
  );
}
