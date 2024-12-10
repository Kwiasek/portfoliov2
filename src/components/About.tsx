import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import hackerMind from "/public/undraw_hacker_mind_-6-y85.svg";
export const About = () => {
  return (
    <section id="about">
      <SectionHeader>About</SectionHeader>
      <div className="flex gap-5 flex-col-reverse md:flex-row md:justify-between">
        <p className="text-lg tracking-wide max-w-[80ch]">
          Hi, my name is Adam Kwiasowski, I am currently Computer Science
          student at Lodz University of Technology, PL. I’m learning Web
          Development since high school, and I find it as an entertaining way to
          challenge myself.
        </p>
        <Image
          src={hackerMind}
          alt="hacker mind"
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>
      <h2 className="pt-10 md:pt-12 lg:pt-14 text-xl md:text-2xl lg:text-3xl font-bold">
        Technologys I use
      </h2>
    </section>
  );
};
