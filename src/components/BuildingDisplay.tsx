import { PopoverArrow } from "@radix-ui/react-popover";
import { type PropsWithChildren } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function BuildingDisplay({
  building,
  selectedBuilding,
  setSelectedBuilding,
  svgPath,
}: PropsWithChildren<{
  building: string;
  selectedBuilding: string | null;
  setSelectedBuilding: (name: string | null) => void;
  svgPath: string;
}>) {
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
          <div className="grid grid-cols-2 bg-slate-50 px-2">
            <div>1</div>
            <div>128</div>
          </div>
          <div className="grid grid-cols-2 bg-slate-100/75 px-2">
            <div>2</div>
            <div>256</div>
          </div>
          <div className="grid grid-cols-2 bg-slate-50 px-2">
            <div>3</div>
            <div>128</div>
          </div>
          <div className="grid grid-cols-2 bg-slate-100/75 px-2 font-bold">
            <div>Total</div>
            <div>512</div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
