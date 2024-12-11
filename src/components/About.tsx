import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import hackerMind from "/public/undraw_hacker_mind_-6-y85.svg";
import { Technologys } from "./Technologys";
export const About = () => {
  return (
    <section id="about">
      <SectionHeader>About</SectionHeader>
      <div className="flex gap-5 flex-col-reverse md:flex-row md:justify-between">
        <p className="text-lg tracking-wider max-w-[80ch]">
          Hi, my name is Adam Kwiasowski, and I&apos;m a Computer Science
          student at Lodz University of Technology, PL. My journey into web
          development started during my time at technical high school, where I
          began exploring JavaScript. Later, I expanded my skills by diving into
          React and SCSS through online courses. Over time, I grew familiar with
          tools like Vite, Next.js, and TailwindCSS—technologies that now form
          the backbone of my projects.
          <br />
          <br />
          I&apos;ve nearly completed the comprehensive course{" "}
          <em>The Odin Project</em>, which not only sharpened my frontend skills
          but also introduced me to backend development. Some of my favorite
          projects from the course are showcased in my portfolio. Among the
          technologies I&apos;ve worked with, Next.js stands out as my favorite
          for its versatility and growing ecosystem, making it a tool I believe
          in for the future.
          <br />
          <br />
          Currently, my focus is on university studies, where I&apos;m tackling
          subjects like C, C++, computer graphics, and theoretical aspects of
          computer science. Web development remains a passionate side pursuit,
          allowing me to stay creative and explore new technologies.
        </p>
        <Image
          src={hackerMind}
          alt="hacker mind"
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>
      <h2 className="pt-10 md:pt-12 lg:pt-14 text-xl md:text-2xl lg:text-3xl font-bold">
        Technologys I use:
      </h2>
      <Technologys />
    </section>
  );
};
