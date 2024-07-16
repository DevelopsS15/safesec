"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import AbbotsfordMap from "~/components/Locations/AbbotsfordMap";
import CCLMap from "~/components/Locations/CCLMap";
import CEPMap from "~/components/Locations/CEPMap";
import HopeMap from "~/components/Locations/HopeMap";
import MissionMap from "~/components/Locations/MissionMap";

export default function HomePage() {
  const searchParams = useSearchParams();
  const selectedLocationId = searchParams.get("location") ?? "AB";

  let mapComponent = <></>;
  switch (selectedLocationId) {
    case "CEP":
      mapComponent = <CEPMap />;
      break;
    case "CH":
      mapComponent = <div>Chilliwack</div>;
      break;
    case "CC":
      mapComponent = <CCLMap />;
      break;
    case "AB":
      mapComponent = <AbbotsfordMap />;
      break;
    case "MI":
      mapComponent = <MissionMap />;
      break;
    case "HO":
      mapComponent = <HopeMap />;
      break;
    default:
      mapComponent = (
        <div className="p-8 text-xl">
          Sorry! This location either isn't supported yet or it doesn't exist.
        </div>
      );
      break;
  }

  return mapComponent;
}
