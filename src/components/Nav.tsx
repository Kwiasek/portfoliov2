"use client";

import Link from "next/link";
import { Logo } from "./hero/Logo";
import { redirect, usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export const Nav = () => {
  const pathname = usePathname();
  const supabase = createClient();

  const signOut = () => {
    supabase.auth.signOut();
    redirect("/");
  };
  return (
    <nav className="px-10 md:px-40 pt-8 md:pt-14 flex justify-between absolute top-0 left-0 w-full items-center">
      <Link href="/">
        <Logo className="text-2xl md:text-4xl hover:drop-shadow-xl" />
      </Link>
      <ul className="text:lg md:text-xl flex gap-4 md:gap-12">
        <li>
          <NavLink text="Blog" href="/blog" />
        </li>
        {pathname.startsWith("/admin") ? (
          <>
            <li>
              <NavLink text="Admin" href="/admin" />
            </li>
            <li>
              <p
                className="text-red-800 hover:text-red-500 cursor-pointer"
                onClick={signOut}
              >
                Logout
              </p>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink text="About" href="#about" />
            </li>
            <li>
              <NavLink text="Projects" href="#projects" />
            </li>
            <li>
              <NavLink text="Contact" href="#contact" />
            </li>
          </>
        )}
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
