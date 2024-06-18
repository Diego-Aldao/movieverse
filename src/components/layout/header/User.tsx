"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImagenUsuario from "@/assets/Sin título.png";

export default function User() {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  return (
    <div
      className="botonPerfil w-8 h-8 xl:w-9 xl:h-9 hidden lg:inline-block relative"
      onMouseLeave={() => {
        setDropdownVisible(false);
      }}
      onMouseEnter={() => {
        setDropdownVisible(true);
      }}
    >
      <Link href="/login" className="">
        <div
          className={` h-8 w-8 xl:w-9 xl:h-9 rounded-full overflow-hidden hover:border-main-color border ${
            dropdownVisible && "border-main-color"
          }`}
        >
          <Image
            src={ImagenUsuario}
            alt=""
            width={32}
            height={32}
            className="inline-block xl:hidden"
          />
          <Image
            src={ImagenUsuario}
            alt=""
            width={36}
            height={36}
            className="hidden xl:inline-block"
          />
        </div>
      </Link>
      <div
        className={`dropdown absolute top-7 xl:top-8 pt-4 right-0 [transform-style:_preserve-3d] origin-center ${
          dropdownVisible
            ? "opacity-100 [transform:_translateZ(0)_scaleZ(1)]"
            : "opacity-0 [transform:_translate3d(36px,_-24px,_0)_scale3d(.0,_.0,_1)]"
        } transition-all`}
      >
        <ul className="dropdown flex flex-col gap-2 bg-main-black bg-opacity-45 p-2 rounded-md w-[150px] xl:w-[170px] border border-main-white border-opacity-15">
          <li className=" rounded-md hover:bg-main-black hover:bg-opacity-50 transition-colors ">
            <Link href="/perfil" className="w-full h-full p-4 block">
              <span className="flex flex-col gap-1 items-center">
                <span className="rounded-full bg-main-white w-12 h-12 mb-1 overflow-hidden border border-main-black">
                  <Image src={ImagenUsuario} alt="" width={48} height={48} />
                </span>
                <span className="text-sm xl:text-base first-letter:uppercase text-nowrap">
                  ver perfil
                </span>
              </span>
            </Link>
          </li>
          <li className="p-2 rounded-md hover:bg-main-black hover:bg-opacity-50 transition-colors group cursor-pointer">
            <span className="capitalize text-sm xl:text-base ">ajustes</span>
          </li>
          <li className="p-2 rounded-md hover:bg-main-black hover:bg-opacity-50 transition-colors group cursor-pointer">
            <span className="capitalize text-sm xl:text-base text-nowrap group-hover:text-red-500 transition-colors">
              cerrar sesion
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
