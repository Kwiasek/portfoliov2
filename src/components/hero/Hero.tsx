import Image from "next/image";
import progressiveApp from "/public/undraw_progressive_app_m-9-ms.svg";
import { Logo } from "./Logo";
import "animate.css";
import { ArrowDown } from "../icons/ArrowDown";

export const Hero = () => {
  return (
    <header className="flex flex-col h-screen">
      <div className="w-full flex flex-col md:flex-row h-full justify-center gap-10 md:justify-around items-center">
        <div className="flex flex-col items-center w-full">
          <h1>
            <Logo className="text-7xl md:text-8xl animate__animated animate__tada" />
          </h1>
          <h2 className="text-lg md:text-2xl text-nowrap">
            Full-Stack Developer
          </h2>
        </div>
        <Image
          src={progressiveApp}
          alt="Computer and smartphone"
          className="max-w-[350px] lg:max-w-[400px] xl:max-w-[550px]"
          priority
        />
      </div>
      <a href="#about" className="self-center">
        <ArrowDown className="size-12  mb-8 animate-bounce" />
      </a>
    </header>
  );
};
