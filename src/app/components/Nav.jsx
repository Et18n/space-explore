"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { GlobalContextProvider, useGlobalContext } from "../Context/store";

export default function Nav() {
  const btnclass = "  border-b-white border-b-2 rounded-sm w-fit";
  const { tab, settab } = useGlobalContext();
  function switchtab(tabname) {
    settab(tabname);
  }
  function somethingaboutaburger(setting) {
    setopen(setting);
  }
  const [open, setopen] = useState("close");
  return (
    <nav className="flex text-white list-none  relative md:mt-10 justify-between  md:w-[800px] md:ml-auto ml-5  h-[100px] md:justify-start self-end items-center">
      <Link
        href={"/"}
        className=" mb-12  "
        onClick={() => {
          settab("home");
        }}
      >
        <Image
          src="/images/shared/logo.svg"
          className=" absolute w-10 md:w-12 z-10 md:-left-[40vw] "
          width={50}
          height={50}
          alt="logo"
        />
      </Link>
      <hr className=" h-[1px] w-[70%] absolute -left-[35vw] bg-[#ffffff8d] border-none hidden xl:block " />
      {/* Phone Menu */}
      <div className="small_screen_selection_menu sm:hidden mr-[1em] ">
        <button
          className={open === "close" ? "block" : "hidden"}
          onClick={() => {
            somethingaboutaburger("open");
          }}
        >
          <Image
            src={"/images/shared/icon-hamburger.svg"}
            width={30}
            height={30}
            style={{
              width: "auto",
              height: "auto",
              position: "absolute",
              right: "1.5em",
              top: "2.5em",
            }}
            alt="burger_king"
          ></Image>
        </button>
        <button
          className={open === "open" ? "" : "hidden"}
          onClick={() => {
            somethingaboutaburger("close");
          }}
        >
          <Image
            className=" fill-black"
            src={"/images/shared/icon-close.svg"}
            width={30}
            height={30}
            style={{
              width: "auto",
              height: "auto",
              position: "absolute",
              right: "2em",
              top: "2em",
              zIndex: "10",
            }}
            alt="burger_king"
          ></Image>
        </button>
        {/* Phone Menu Navbar */}
        <div
          className={
            open === "open"
              ? "flex  text-center justify-center bg-gray-500  backdrop:opacity-5  -translate-x-[1em] mt-40  py-24 w-[98vw] absolute -top-40 left-0 "
              : "hidden w-0"
          }
        >
          <div className="nav_links   ">
            <li className=" cursor-pointer">
              <Link href={"/"}>
                <button
                  className={`${tab === "home" ? btnclass : ""}   `}
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
                  }  `}
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
                  }  `}
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
                  } `}
                  onClick={() => {
                    switchtab("technology");
                  }}
                >
                  <span className="font-bold">03</span> Technology{" "}
                </button>{" "}
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
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
                } h-[100px] mr-7 `}
                onClick={() => {
                  switchtab("technology");
                }}
              >
                <span className="font-bold ">03</span> Technology{" "}
              </button>{" "}
            </Link>
          </li>
          <div className=" absolute  -z-10 w-full h-full   bg-[#ffffff88] opacity-10  "></div>
        </div>
      </div>
    </nav>
  );
}
