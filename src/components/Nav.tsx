import Link from "next/link";
import { Logo } from "./hero/Logo";

export const Nav = () => {
  return (
    <nav className="px-10 md:px-40 pt-8 md:pt-14 flex justify-between absolute top-0 left-0 w-full items-center">
      <a href="#">
        <Logo className="text-2xl md:text-4xl hover:drop-shadow-xl" />
      </a>
      <ul className="text:lg md:text-xl flex gap-4 md:gap-12">
        <li>
          <NavLink text="About" href="#about" />
        </li>
        <li>
          <NavLink text="Projects" href="#projects" />
        </li>
        <li>
          <NavLink text="Contact" href="#contact" />
        </li>
        <li>
          <NavLink text="Blog" href="/blog" />
        </li>
      </ul>
    </nav>
  );
};

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href} className="text-slate-300 hover:text-white">
      {text}
    </Link>
  );
};
