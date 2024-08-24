import Image from "next/image";
import React from "react";

const TechProps = ({ name, images, description }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 px-10">
        <div>
          <div className=" font-extralight text-lg text-gray-400">
            THE TERMINOLOGY
          </div>
          <div className=" text-5xl mt-3 mb-4">{name}</div>
          <p className=" md:w-[400px] w-72 text-lg font-light text-gray-400">
            {description}
          </p>
        </div>
        <div className=" -translate-y-10 align-middle">
          <Image
            className=" md:h-[23em] h-32 md:block hidden"
            src={images}
            width={500}
            height={500}
            alt="tech"
            style={{
              width: "auto",
            }}
            draggable={false}
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default TechProps;
