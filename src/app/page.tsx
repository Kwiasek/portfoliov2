import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="px-10 md:px-40 w-full max-w-[1920px]">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
