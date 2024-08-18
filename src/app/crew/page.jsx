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
  const [crewNum, setCrewNum] = useState("commander");
  function switchCrew(num) {
    setCrewNum(num);
  }
  useEffect(() => {
    const crewcomms = ["commander", "specialist", "pilot", "engineer"];

    function createCrew(arr) {
      let index = 0;

      return function () {
        const element = crewcomms[index];
        index = (index + 1) % arr.length; // Reset index to 0 when it reaches the end
        return element;
      };
    }

    const getCrew = createCrew(crewcomms);
    const change = () => setCrewNum(getCrew());
    window.addEventListener("wheel", change);
    return () => window.removeEventListener("wheel", change);
  }, []);
  return (
    <>
      <Image
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
      />
      <Nav />
      {crewNum === "commander" ? (
        <CrewProp
          role={crewData["0"].role}
          name={crewData["0"].name}
          bio={crewData["0"].bio}
          images={crewData["0"].images}
        />
      ) : (
        ""
      )}
      {crewNum === "specialist" ? (
        <CrewProp
          role={crewData["1"].role}
          name={crewData["1"].name}
          bio={crewData["1"].bio}
          images={crewData["1"].images}
        />
      ) : (
        ""
      )}
      {crewNum === "pilot" ? (
        <CrewProp
          role={crewData["2"].role}
          name={crewData["2"].name}
          bio={crewData["2"].bio}
          images={crewData["2"].images}
        />
      ) : (
        ""
      )}
      {crewNum === "engineer" ? (
        <CrewProp
          role={crewData["3"].role}
          name={crewData["3"].name}
          bio={crewData["3"].bio}
          images={crewData["3"].images}
        />
      ) : (
        ""
      )}

      <div className=" mt-16 ml-40 flex flex-row gap-4 fill-gray-800">
        <button
          onClick={() => switchCrew("commander")}
          className={crewNum === "commander" ? "w-4 fill-white " : "w-4 "}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </button>
        <button
          onClick={() => switchCrew("specialist")}
          className={crewNum === "specialist" ? "w-4 fill-white " : "w-4 "}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </button>
        <button
          onClick={() => switchCrew("pilot")}
          className={crewNum === "pilot" ? "w-4 fill-white " : "w-4 "}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </button>
        <button
          onClick={() => switchCrew("engineer")}
          className={crewNum === "engineer" ? "w-4 fill-white " : "w-4 "}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </button>
      </div>
    </>
  );
}
