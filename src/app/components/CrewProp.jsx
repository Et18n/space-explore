import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const myFont = localFont({ src: "./haggard-nova-light.otf" });

const CrewProp = ({ role, name, bio, images }) => {
  return (
    <div>
      <div className={`${myFont.className} grid grid-cols-2 px-40`}>
        <div className=" flex flex-col">
          <div className=" text-xl font-thin">
            <span className=" text-gray-600 font-bold mr-4">02</span>
            MEET YOUR CREW
          </div>

          <div className=" mt-32 text-3xl text-gray-400 font-thin">{role}</div>
          <div className=" text-6xl mt-4">{name}</div>
          <p className=" w-[450px] text-gray-400 mt-10">{bio}</p>
        </div>
        <div>
          <Image
            src={images}
            alt="crew"
            width={500}
            height={500}
            style={{
              position: "absolute",
              bottom: "0",
              right: "150px",
              width: "auto",
              height: "500px",
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewProp;
