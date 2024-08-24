"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import PlanetProp from "../components/PlanetProp";
import { useState } from "react";

const planets = [
  {
    key: "1",
    name: "Moon",
    images: {
      webp: "/images/destination/image-moon.webp",
    },
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    key: "2",
    name: "Mars",
    images: {
      webp: "/images/destination/image-mars.webp",
    },
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    key: "3",
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "/images/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    key: "4",
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "/images/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export default function Destination() {
  console.log(planets[0].images.webp);
  function planetswitch(tabname) {
    setPlanet(tabname);
  }
  const [planet, setPlanet] = useState("moon");
  // console.log(planet);
  const tabClasses = " border-b-2 border-b-white";
  return (
    <>
      {/* background image */}
      <Image
        className="hidden md:block"
        src="/images/destination/background-destination-desktop.jpg"
        width={1000}
        height={1000}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          zIndex: "-10",
        }}
        priority={true}
        alt="background_destination"
      />
      <Image
        className=" md:hidden"
        src="/images/destination/background-destination-mobile.jpg"
        width={1000}
        height={1000}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          zIndex: "-10",
        }}
        priority={true}
        alt="background_destination"
      />
      {/* Navbar Component */}
      <Nav />

      {/* Prop for the planets */}
      <div className=" flex flex-col-reverse md:flex-row ">
        {planet === "moon" ? (
          <PlanetProp
            name={planets["0"].name}
            desc={planets["0"].description}
            images={planets["0"].images.webp}
            distance={planets["0"].distance}
            travel={planets["0"].travel}
          />
        ) : (
          ""
        )}
        {planet === "mars" ? (
          <PlanetProp
            name={planets["1"].name}
            desc={planets["1"].description}
            images={planets["1"].images.webp}
            distance={planets["1"].distance}
            travel={planets["1"].travel}
          />
        ) : (
          ""
        )}
        {planet === "europa" ? (
          <PlanetProp
            name={planets["2"].name}
            desc={planets["2"].description}
            images={planets["2"].images.webp}
            distance={planets["2"].distance}
            travel={planets["2"].travel}
          />
        ) : (
          ""
        )}
        {planet === "titan" ? (
          <PlanetProp
            name={planets["3"].name}
            desc={planets["3"].description}
            images={planets["3"].images.webp}
            distance={planets["3"].distance}
            travel={planets["3"].travel}
          />
        ) : (
          ""
        )}
        <div className=" mt-20 relative ">
          <div className="planet_links absolute -top-20 md:-top-4  md:right-[29vw] -right-[50%] -translate-x-[100%] md:translate-x-0  flex flex-row gap-4 z-[9]  list-none">
            <li>
              <button
                className={
                  planet === "moon"
                    ? tabClasses
                    : "border-b-transparent border-b-2"
                }
                onClick={() => {
                  planetswitch("moon");
                }}
              >
                MOON
              </button>
            </li>
            <li>
              <button
                className={
                  planet === "mars"
                    ? tabClasses
                    : "border-b-transparent border-b-2"
                }
                onClick={() => {
                  planetswitch("mars");
                }}
              >
                MARS
              </button>
            </li>
            <li>
              <button
                className={
                  planet === "europa"
                    ? tabClasses
                    : "border-b-transparent border-b-2"
                }
                onClick={() => {
                  planetswitch("europa");
                }}
              >
                EUROPA
              </button>
            </li>
            <li>
              <button
                className={
                  planet === "titan"
                    ? tabClasses
                    : "border-b-transparent border-b-2"
                }
                onClick={() => {
                  planetswitch("titan");
                }}
              >
                TITAN
              </button>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
