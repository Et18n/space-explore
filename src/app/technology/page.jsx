"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import { useState } from "react";
import localFont from "next/font/local";
import TechProps from "../components/TechProps";
import { Roboto } from "next/font/google";
const myFont = localFont({ src: "./haggard-nova-light.otf" });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"] });

const techData = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "/images/technology/image-spaceport-portrait.jpg",
      landscape: "/images/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "/images/technology/image-space-capsule-portrait.jpg",
      landscape: "/images/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const btnClasses = "text-gray-900 bg-white";
export default function Technology() {
  const [tech, setTech] = useState("launch");
  function switchTech(id) {
    setTech(id);
  }
  return (
    <div>
      <Image
        className=" hidden md:block"
        src={"/images/technology/background-technology-desktop.jpg"}
        width={1000}
        height={1000}
        alt="background_tech"
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
        className=" "
        src={"/images/technology/background-technology-mobile.jpg"}
        width={1000}
        height={1000}
        alt="background_tech"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          zIndex: "-10",
        }}
        priority={true}
      />
      <Nav />
      {/* Main Technology */}
      <div
        className={`${roboto.className} ml-10 md:ml-[20vw] text-2xl font-medium`}
      >
        <span className=" mr-4 text-gray-600 font-medium font-sans ">03</span>
        SPACE LAUNCH 101
      </div>
      <div className={`grid md:grid-cols-3 mt-20 ${myFont.className}`}>
        <div
          className={`flex md:flex-col gap-8 [&>*]:border-white [&>*]:border-[1px] [&>*]:rounded-full [&>*]:px-7 [&>*]:py-5 [&>*]:text-xl [&>*]:text-center w-fit justify-self-end self-start md:mr-20 ml-10 -mt-10 md:mt-0 mb-10 ${myFont.className} `}
        >
          <button
            className={tech === "launch" ? btnClasses : ""}
            onClick={() => switchTech("launch")}
          >
            1
          </button>
          <button
            className={tech === "port" ? btnClasses : ""}
            onClick={() => {
              switchTech("port");
            }}
          >
            2
          </button>
          <button
            className={tech === "capsule" ? btnClasses : ""}
            onClick={() => switchTech("capsule")}
          >
            3
          </button>
        </div>
        <div className=" col-span-2">
          {tech === "launch" ? (
            <TechProps
              name={techData["0"].name}
              images={techData["0"].images.portrait}
              description={techData["0"].description}
            />
          ) : (
            ""
          )}
          {tech === "port" ? (
            <TechProps
              name={techData["1"].name}
              images={techData["1"].images.portrait}
              description={techData["1"].description}
            />
          ) : (
            ""
          )}
          {tech === "capsule" ? (
            <TechProps
              name={techData["2"].name}
              images={techData["2"].images.portrait}
              description={techData["2"].description}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
