"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { GlobalContextProvider, useGlobalContext } from "../Context/store";

export default function Nav() {
  const btnclass = "animate-pulse  border-b-white border-b-2 rounded-sm w-fit";
  // const [tab, settab] = useState("");
  const { tab, settab } = useGlobalContext();
  function switchtab(tabname) {
    settab(tabname);
  }


  return (
    <nav className=" flex text-white list-none relative mt-10  md:w-[800px] ml-auto  h-[100px] justify-start self-end items-center">
      <Link href={"/"} className=" mb-12 ">
        <Image
          src="/images/shared/logo.svg"
          className=" absolute -left-[43vw]"
          width={50}
          height={50}
          alt="logo"
        />
      </Link>
      <hr className=" h-[1px] w-[70%] absolute -left-[35vw] bg-[#ffffff8d] border-none " />
      <div className=" absolute  -z-10 w-full h-full   bg-[#ffffff88] opacity-10  "></div>
      <div className="nav_links  flex gap-10 ">
        <li className=" cursor-pointer">
          <Link href={"/"}>
            <button
              className={`${
                tab === "home" ? btnclass : "border-b-2 border-transparent"
              } h-[100px] ml-24 `}
              onClick={() => {
                switchtab("home");
              }}
            >
              <span className=" font-bold">00</span> Home
            </button>
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link href={"/destination"}>
            <button
              className={`${
                tab === "destination"
                  ? btnclass
                  : "border-b-2 border-transparent"
              } h-[100px] `}
              onClick={() => {
                switchtab("destination");
              }}
            >
              <span className="font-bold">01</span> Destination
            </button>
          </Link>
        </li>
        <li className=" cursor-pointer">
          {" "}
          <Link href={"/crew"}>
            <button
              className={`${
                tab === "crew" ? btnclass : "border-b-2 border-transparent"
              } h-[100px] `}
              onClick={() => {
                switchtab("crew");
              }}
            >
              <span className="font-bold">02</span> Crew
            </button>{" "}
          </Link>
        </li>
        <li className=" cursor-pointer">
          {" "}
          <Link href={"/technology"}>
            <button
              className={`${
                tab === "technology"
                  ? btnclass
                  : "border-b-2 border-transparent"
              } h-[100px] `}
              onClick={() => {
                switchtab("technology");
              }}
            >
              <span className="font-bold">03</span> Technology{" "}
            </button>{" "}
          </Link>
        </li>
      </div>
    </nav>
  );
}
