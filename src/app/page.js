import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Nav from "./components/Nav";

const myFont = localFont({ src: "./haggard-nova-light.otf" });

export default function Home() {
  return (
    <>
      <Image
        src="/images/home/background-home-desktop.jpg"
        width={1000}
        height={1000}
        alt="background"
        className="absolute -z-10 bg-contain h-full w-full hidden md:block"
        quality={100}
        style={{
          width: "100%",
          height: "100%",
          top: "0",
        }}
        priority={true}
      />
      <Image
        src="/images/home/background-home-mobile.jpg"
        width={1000}
        height={1000}
        alt="background"
        className="absolute -z-10 bg-contain h-full w-full md:hidden"
        quality={100}
        style={{
          width: "100%",
          height: "100%",
          top: "0",
        }}
        priority={true}
      />
      <Nav />
      <div className=" text-center md:text-left flex md:flex-row flex-col mt-12 md:mt-40 md:mx-32 md:justify-between">
        <div className=" font-thin  ">
          <span className=" uppercase text-sm">So, you want to travel to</span>
          <div
            className={`${myFont.className} md:text-8xl text-7xl mt-4 mb-10`}
          >
            SPACE
          </div>
          <p className=" md:w-[390px] mx-[1em] text-md">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link href={"/destination"}>
          <div className=" bg-white text-black font-light md:right-1/2 rounded-full w-fit  h-fit md:px-10 md:py-28 md:text-5xl text-2xl md:mr-32 px-12 py-20 mx-[50%] -translate-x-[50%]  mt-24 xl:mt-0">
            EXPLORE
          </div>
        </Link>
      </div>
    </>
  );
}
