import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "./haggard-nova-light.otf" });

const PlanetProp = ({ name, images, desc, distance, travel, planetcharge }) => {
  return (
    <>
      <div className="  flex flex-col md:flex-row justify-between -mt-8  mx-[1em] md:mx-60">
        <div className=" flex flex-col justify-center items-center gap-5">
          <div className="words mt-0 md:mr-28 text-2xl">
            <span className=" text-gray-600 font-bold md:mr-4 text-center w-screen">
              01
            </span>{" "}
            PICK YOUR DESTINATION
          </div>
          <div>
            <Image
              className=" w-56 md:w-[26rem]"
              src={images}
              width={400}
              height={400}
              draggable={false}
              alt="planet image"
              priority={true}
            />
          </div>
        </div>
        <div className=" md:mt-28 md:ml-36 text-center   md:text-left">
          <div className={`${myFont.className}   text-8xl`}>{name}</div>
          <p className=" w-[400px]">{desc}</p>
          <hr className=" mt-12  border-b-[1px] border-gray-500 w-full md:w-[450px] " />
          <div className=" flex flex-row  md:text-left justify-between mt-10 ml-[2em] md:ml-0   w-fit">
            <div className=" flex flex-col  mr-[6em] ">
              <div>AVG. DISTANCE</div>
              <div className={`${myFont.className}`}>{distance} </div>
            </div>
            <div className=" flex flex-col">
              <div>EST. TRAVEL TIME</div>
              <div className={`${myFont.className}`}>{travel}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetProp;
