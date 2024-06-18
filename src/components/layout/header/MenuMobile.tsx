"use client";
import React, { useState } from "react";
import imgPerfil from "@/assets/perfil.webp";
import Image from "next/image";
import { INTERNAL_NAVIGATION } from "@/constants/constants";
import Link from "next/link";

export default function MenuMobile() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  return (
    <>
      <span
        onClick={() => {
          setMenuVisible(true);
        }}
        className="icon-[mdi--menu] h-8 w-8 md:hidden"
      ></span>
      <div
        onClick={() => {
          setMenuVisible(false);
        }}
        className={`menyu fixed bottom-0 left-0 w-full h-full flex flex-col justify-end bg-main-black/80 md:hidden ${
          menuVisible
            ? " opacity-100 visible z-[90] delay-0"
            : "opacity-0 invisible -z-[90] delay-200"
        } transition-all`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`menu-contenido w-full bg-secondary-black h-[70%] rounded-t-lg p-4 flex flex-col gap-y-8 relative transition-all ${
            menuVisible
              ? " bottom-0 opacity-100 visible delay-200"
              : "-bottom-4 opacity-0 invisible delay-0"
          }`}
        >
          <button
            onClick={() => {
              setMenuVisible(false);
            }}
            className={`p-2 absolute right-4 rounded-full bg-main-black w-fit h-fit flex items-center justify-center transition-all  ${
              menuVisible
                ? " top-4 opacity-100 visible delay-300"
                : "top-8 opacity-0 invisible delay-0"
            }`}
          >
            <span className="icon-[mdi--close] h-6 w-6 "></span>
          </button>
          <Link
            href="/perfil"
            onClick={() => {
              setMenuVisible(false);
            }}
            className="profile rounded-t-lg overflow-hidden relative flex gap-2 items-center py-6 px-4 after:absolute after:w-1/2 after:h-[1px] after:bottom-0 after:left-0 after:right-0 after:mx-auto after:bg-main-white/15 mt-12 rounded-lg hover:bg-main-black bg-main-black/5 transition-colors"
          >
            <div className="img-profile rounded-full bg-main-white w-14 h-14 overflow-hidden border-2 border-main-black">
              <Image src={imgPerfil} alt="" width={56} height={56} />
            </div>
            <div className="data-user flex flex-col">
              <span className="capitalize backdrop-blur-sm bg-main-black/15">
                saint laurent
              </span>
              <span className="text-xs backdrop-blur-sm bg-main-black/15">
                @saintlaurent
              </span>
            </div>
          </Link>
          <ul className="listado  flex flex-col gap-4">
            {INTERNAL_NAVIGATION.map((link) => (
              <li
                key={link.id}
                className="bg-main-black/5 capitalize p-2 px-4 rounded-md"
              >
                <Link
                  href={link.destino}
                  onClick={() => {
                    setMenuVisible(false);
                  }}
                >
                  {link.nombre}
                </Link>
              </li>
            ))}
            <li className="bg-main-black/5 capitalize p-2 px-4 rounded-md">
              ajustes
            </li>
          </ul>
          <button className="bg-main-black uppercase font-semibold text-sm text-start rounded-md py-2 px-4 mt-auto">
            cerrar sesion
          </button>
        </div>
      </div>
    </>
  );
}
