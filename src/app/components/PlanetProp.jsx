import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "./haggard-nova-light.otf" });

const PlanetProp = ({ name, images, desc, distance, travel, planetcharge }) => {
  return (
    <>
      <div className="  flex flex-row justify-between mx-60">
        <div className=" flex flex-col justify-center items-center gap-12">
          <div className="words mr-28 text-2xl">
            <span className=" text-gray-600 font-bold mr-4">01</span> PICK YOUR
            DESTINATION
          </div>
          <div>
            <Image
              src={images}
              width={400}
              height={300}
              draggable={false}
              alt="planet image"
              priority={true}
            />
          </div>
        </div>
        <div className=" mt-28 ml-36">
          <div className={`${myFont.className}   text-8xl`}>{name}</div>
          <p className=" w-[400px]">{desc}</p>
          <hr className=" mt-12 border-b-[1px] border-gray-500 w-[450px]" />
          <div className=" flex flex-row justify-between mt-10   w-fit">
            <div className=" flex flex-col mr-[6em] ">
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
