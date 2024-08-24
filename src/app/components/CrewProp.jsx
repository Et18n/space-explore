import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"] });
const nova = localFont({ src: "./haggard-nova-light.otf" });
const CrewProp = ({ role, name, bio, images }) => {
  return (
    <div>
      <div className={`${nova.className} grid grid-cols-2 md:px-40 px-10`}>
        <div className=" flex flex-col">
          <div
            className={`${roboto.className}  text-nowrap text-2xl font-thin`}
          >
            <span className=" text-gray-600 font-bold mr-4">02</span>
            MEET YOUR CREW
          </div>

          <div className=" text-nowrap mt-10  md:mt-32 text-3xl text-gray-400 font-thin">
            {role}
          </div>
          <div className=" md:text-6xl text-3xl w-[300px] md:w-full md:mt-4">
            {name}
          </div>
          <p className=" md:w-[450px] text-gray-400 mt-3 md:mt-10 w-72 ">
            {bio}
          </p>
        </div>
        <div>
          <Image
            className="w-auto h-56 bottom-0 right-20 md:h-[500px] md:w-auto md:bottom-0 md:right-[150px]  md:block "
            src={images}
            alt="crew"
            width={500}
            height={500}
            style={{
              position: "absolute",
            }}
            draggable={false}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewProp;
