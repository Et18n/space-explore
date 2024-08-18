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
        className="absolute -z-10 bg-contain h-full w-full"
        quality={100}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: "0",
        }}
      />
      <Nav />
      <div className=" flex md:flex-row mt-40 ml-32 mr-32 justify-between">
        <div className=" font-thin  ">
          <span className=" uppercase">So, you want to travel to</span>
          <div className={`${myFont.className} text-8xl mt-4 mb-10`}>SPACE</div>
          <p className=" w-[390px]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link href={"/destination"}>
          <div className=" bg-white text-black font-light right-1/2 rounded-full w-fit h-fit px-10 py-28 text-5xl mr-32">
            EXPLORE
          </div>
        </Link>
      </div>
    </>
  );
}
