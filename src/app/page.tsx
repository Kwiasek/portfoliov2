import { About } from "@/components/About";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="px-10 md:px-40 w-full max-w-[1920px]">
      <Hero />
      <About />
    </div>
  );
}
