import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import React from "react";
import User from "./User";
import MenuMobile from "@/components/MenuMobile";
import SecondaryButton from "@/components/buttons/SecondaryButton";

export default function Header() {
  return (
    <header className="w-full pointer-events-none px-4 md:px-8 lg:px-10 pt-4 md:pt-6 lg:pt-8 h-24 lg:h-48 absolute top-0 left-0 z-50 bg-gradient-to-b from-[#18191ac2] to-transparent">
      <nav className="flex items-center justify-between pointer-events-auto relative xl:gap-2 2xl:gap-4">
        <div className="xl:flex-1">
          <Logo />
        </div>
        <ul className="nav-desktop hidden lg:flex items-center gap-12 xl:flex-1">
          <li className="font-medium text-base xl:text-lg first-letter:uppercase tracking-wide">
            <SecondaryButton destino="/peliculas" nombre="peliculas" />
          </li>
          <li className=" font-medium text-base xl:text-lg first-letter:uppercase tracking-wide">
            <SecondaryButton destino="/series" nombre="series de television" />
          </li>
          <li className=" font-medium text-base xl:text-lg first-letter:uppercase tracking-wide">
            <SecondaryButton destino="/celebridades" nombre="celebridades" />
          </li>
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
