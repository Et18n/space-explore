import Image from "next/image";
import React from "react";

const TechProps = ({ name, images, description }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div className=" font-extralight text-lg text-gray-400">
            THE TERMINOLOGY
          </div>
          <div className=" text-5xl mt-3 mb-4">{name}</div>
          <p className=" w-[400px] text-lg font-light text-gray-400">
            {description}
          </p>
        </div>
        <div className=" -translate-y-10 align-middle">
          <Image
            src={images}
            width={500}
            height={500}
            alt="tech"
            style={{
              width: "auto",
              height: "430px",
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
