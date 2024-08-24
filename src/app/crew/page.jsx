"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import CrewProp from "../components/CrewProp";

const myFont = localFont({ src: "./haggard-nova-light.otf" });
const crewData = [
  {
    name: "Douglas Hurley",
    images: "/images/crew/image-douglas-hurley.webp",

    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: "/images/crew/image-mark-shuttleworth.webp",

    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: "/images/crew/image-victor-glover.webp",

    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: "/images/crew/image-anousheh-ansari.webp",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
export default function Crew() {
  const [inx, setinx] = useState(0);
  useEffect(() => {
    let i = 0;

    window.addEventListener("wheel", () => {
      console.log(i);
      i = (i + 1) % crewData.length; // Reset index to 0 when it reaches the end
      setinx(i);
    });
    //return () => window.removeEventListener("wheel", change);
  }, []);
  return (
    <>
      <Image
        className="hidden lg:block"
        src={"/images/crew/background-crew-desktop.jpg"}
        width={1000}
        alt="background_crew"
        height={1000}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          zIndex: "-10",
        }}
        priority={true}
      />
      <Image
        className="lg:hidden"
        src={"/images/crew/background-crew-mobile.jpg"}
        width={1000}
        alt="background_crew"
        height={1000}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          zIndex: "-10",
        }}
        priority={true}
      />
      <Nav />

      {
        <CrewProp
          role={crewData[inx].role}
          name={crewData[inx].name}
          bio={crewData[inx].bio}
          images={crewData[inx].images}
        />
      }

      <div className="  mt-16 ml-10 md:ml-40 flex flex-row gap-4 fill-gray-800">
        {crewData.map((crew, index) => {
          return (
            <button
              onClick={() => setinx(index)}
              className={index == inx ? "w-4 fill-white " : "w-4 "}
              key={index}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </button>
          );
        })}
      </div>
    </>
  );
}
