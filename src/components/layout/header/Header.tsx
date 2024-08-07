"use client";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import React from "react";
import User from "./User";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import MenuMobile from "./MenuMobile";
import { INTERNAL_NAVIGATION } from "@/constants/constants";
import useScroll from "@/hooks/useScroll";

export default function Header() {
  const scrollY = useScroll();
  return (
    <header
      className={`w-full pointer-events-none px-4 md:px-8 transition-all lg:px-10 pt-4 md:pt-6 lg:pt-8 h-24 lg:h-48 left-0 z-50 bg-gradient-to-b  to-transparent
        ${scrollY >= 300 && scrollY < 700 && "opacity-0 -top-4"}
        ${
          scrollY >= 700
            ? "fixed opacity-100 top-0 from-main-black via-main-black/50"
            : "absolute opacity-100 top-0 from-main-black/80"
        }`}
    >
      <nav className="flex items-center justify-between pointer-events-auto relative xl:gap-2 2xl:gap-4">
        <div className="xl:flex-1">
          <Logo sloganOn={true} />
        </div>
        <ul className="nav-desktop hidden md:flex items-center gap-8 lg:gap-12 xl:flex-1">
          {INTERNAL_NAVIGATION.slice(1, 4).map((item) => (
            <li key={item.id}>
              <SecondaryButton
                customStyles="text-sm lg:text-base"
                destino={item.destino}
                nombre={item.nombre}
              />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 lg:w-[158px] justify-end xl:flex-1">
          <SearchBar />
          <User />
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
}
