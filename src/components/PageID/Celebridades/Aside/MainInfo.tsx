import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  imageSrc: string;
  children: ReactNode;
  nombre: string;
  conocidoPor: string;
}

export default function MainInfo({
  imageSrc,
  children,
  nombre,
  conocidoPor,
}: Props) {
  return (
    <div className="main-info relative sm:flex sm:flex-col sm:gap-4">
      <div className="imagen max-w-[500px] min-h-[480px] lg:min-h-[450px] xl:min-h-[525px] sm:min-h-[370px] mx-auto sm:max-w-[250px] md:max-w-full w-full sm:rounded-md sm:overflow-hidden sm:after:hidden relative after:absolute after:inset-0 after:from-[#101010] after:bg-gradient-to-t after:from-10% after:to-transparent after:via-transparent">
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imageSrc}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <header className="flex items-center flex-col absolute bottom-0 left-0 w-full sm:relative sm:items-start">
        {children}
        <h1 className="text-2xl mt-4 font-semibold sm:hidden">{nombre}</h1>
        <span className="sm:hidden">{conocidoPor}</span>
      </header>
    </div>
  );
}
