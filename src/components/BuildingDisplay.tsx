import { PopoverArrow } from "@radix-ui/react-popover";
import React, { type PropsWithChildren } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { TSRestClient } from "./Global/TSRestClient";
import { CampusCodesType } from "~/lib/zod/schemas";
import { LucideLoader2 } from "lucide-react";

export default function BuildingDisplay({
  campus,
  building,
  selectedBuilding,
  setSelectedBuilding,
  svgPath,
}: PropsWithChildren<{
  campus: CampusCodesType;
  building: string;
  selectedBuilding: string | null;
  setSelectedBuilding: (name: string | null) => void;
  svgPath: string;
}>) {
  const [occupantsData, setOccupantsData] = React.useState<Record<
    CampusCodesType,
    Record<string, number>
  > | null>(null);
  const [occupantsDataState, setOccupantsDataState] = React.useState<
    "idle" | "fetching"
  >("idle");

  React.useEffect(() => {
    if (selectedBuilding !== building || occupantsData) return;
    const runAsync = async () => {
      setOccupantsDataState("fetching");
      const request = await TSRestClient.occupants.getOccupantsByLocation({
        query: {
          campus,
          building,
        },
      });
      setOccupantsDataState("idle");
      if (request.status === 200) {
        setOccupantsData(request.body);
      } else {
        console.error(
          `Error occured ${request.status}: ${request.body ?? "Unknown"}`,
        );
      }
    };
    runAsync();
  }, [selectedBuilding]);

  return (
    <Popover
      open={selectedBuilding === building}
      onOpenChange={() =>
        selectedBuilding === null
          ? setSelectedBuilding(building)
          : setSelectedBuilding(null)
      }
    >
      <PopoverTrigger asChild>
        <path
          fillOpacity={selectedBuilding === building ? 0.25 : 0}
          className="transition-all duration-100"
          fill="green"
          d={svgPath}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <div>
          <h1 className="text-xl font-bold">Building {building}</h1>
          <div className="grid grid-cols-2 bg-slate-100/75 px-2 font-bold">
            <div>Floor</div>
            <div>Students</div>
          </div>
          {occupantsDataState === "fetching" ? (
            <div>
              <LucideLoader2 className="animate-spin" />
            </div>
          ) : occupantsData ? (
            <>
              {Object.entries(occupantsData[building]).map((value) => (
                <div
                  key={value[0]}
                  className="grid grid-cols-2 bg-slate-50 px-2"
                >
                  <div>{value[0]}</div>
                  <div>{value[1]}</div>
                </div>
              ))}
              <div className="grid grid-cols-2 bg-slate-100/75 px-2 font-bold">
                <div>Total</div>
                <div>
                  {Object.values(occupantsData[building]).reduce(
                    (a, b) => a + b,
                  )}
                </div>
              </div>
            </>
          ) : (
            <div>No data</div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
