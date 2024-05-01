import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full pointer-events-none px-4 md:px-8 lg:px-10 pt-4 md:pt-6 lg:pt-8 h-24 lg:h-48 absolute top-0 left-0 z-50 bg-gradient-to-b from-[#18191ac2] to-transparent">
      <nav className="flex items-center justify-between pointer-events-auto relative">
        <span className="capitalize text-main-color font-bold text-2xl lg:text-3xl logo">
          movieverse
        </span>
        <ul className="nav-desktop hidden lg:flex items-center gap-12">
          <li className=" font-medium lg:text-lg text-lg first-letter:uppercase tracking-wide">
            <Link href="/peliculas">peliculas</Link>
          </li>
          <li className=" font-medium lg:text-lg text-lg first-letter:uppercase tracking-wide">
            <Link href="/series">series de television</Link>
          </li>
          <li className=" font-semibold lg:text-lg text-lg first-letter:uppercase tracking-wide">
            <Link href="/celebridades">celebridades</Link>
          </li>
        </ul>
        <div className="interaccion-mobile flex items-center gap-4">
          <span className="icon-[mdi--search] h-7 w-7 hidden lg:inline-block"></span>
          <span className="icon-[mdi--user-outline] h-7 w-7"></span>
          <span className="icon-[mdi--menu] h-7 w-7 lg:hidden"></span>
          <span className="icon-[mdi--bookmark-outline] h-7 w-7 hidden lg:inline-block"></span>
          <span className="icon-[mdi--heart-outline] h-7 w-7 hidden lg:inline-block"></span>
        </div>
      </nav>
    </header>
  );
}
