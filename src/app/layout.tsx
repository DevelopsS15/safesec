import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import Image from "next/image";

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

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <main className="grid max-h-screen min-h-screen grid-cols-[max-content_auto] bg-[#95c48b] align-top text-white">
          <div className="max-w-80 bg-[#87B27D] p-2">
            <Image
              src={"/UFV-logo-white.png"}
              width={512}
              height={128}
              alt="UFV Logo"
              className="max-w-64"
            />
            <div className="text-right text-2xl font-bold">
              Safety & Security
            </div>
            <div className="my-2 h-[2px] w-full bg-[#a1c299]"></div>
            <div className="grid grid-cols-1 gap-1">
              <Link
                href={"/timetable"}
                className="rounded-md bg-green-200 bg-opacity-10 px-3 py-2 hover:bg-green-200 hover:bg-opacity-25"
              >
                Overview
              </Link>
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
          {children}
        </main>
      </body>
    </html>
  );
}
