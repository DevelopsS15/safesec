"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { TSRestClient } from "~/components/Global/TSRestClient";
import AbbotsfordMap from "~/components/Locations/AbbotsfordMap";
import CCLMap from "~/components/Locations/CCLMap";
import CEPMap from "~/components/Locations/CEPMap";
import HopeMap from "~/components/Locations/HopeMap";
import MissionMap from "~/components/Locations/MissionMap";
import { rootContract } from "~/ts-rest/contracts/contracts";

const campusLinks: {
  location: string;
  locationId: string;
}[] = [
  {
    location: "Abbotsford",
    locationId: "AB",
  },
  {
    location: "Clearbrook Centre",
    locationId: "CC",
  },
  {
    location: "Canada Education Park",
    locationId: "CEP",
  },
  {
    location: "Mission",
    locationId: "MI",
  },
  {
    location: "Hope",
    locationId: "HO",
  },
];

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

  return (
    <main className="grid max-h-screen min-h-screen grid-cols-[max-content_auto] bg-[#95c48b] align-top text-white">
      <div className="max-w-80 bg-[#87B27D] p-2">
        <Image
          src={"/UFV-logo-white.png"}
          width={512}
          height={128}
          alt="UFV Logo"
          className="max-w-64"
        />
        <div className="text-right text-2xl font-bold">Safety & Security</div>
        <div className="my-2 h-[2px] w-full bg-[#a1c299]"></div>
        <div className="grid grid-cols-1 gap-1">
          {campusLinks.map((campusLink) => (
            <Link
              key={campusLink.locationId}
              href={`/?location=${campusLink.locationId}`}
              className="rounded-md bg-green-200 bg-opacity-10 px-3 py-2 hover:bg-green-200 hover:bg-opacity-25"
            >
              {campusLink.location}
            </Link>
          ))}
        </div>
      </div>
      {mapComponent}
    </main>
  );
}
