import Image from "next/image";
import React from "react";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import MainButton from "../buttons/MainButton";

interface Props {
  pathImagen: string;
  nombre: string;
  hasButton: boolean;
  handleClick?: (nombre: string) => void;
}

export default function MiniCard({
  pathImagen,
  nombre,
  hasButton,
  handleClick,
}: Props) {
  return (
    <div
      className="w-full flex h-[120px] sm:h-full after:bg-[#242526b7] after:inset-0 after:absolute relative rounded-md overflow-hidden max-w-[370px] mx-auto sm:max-w-full md:h-full"
      onClick={() => {
        handleClick && handleClick(nombre);
      }}
    >
      <Image
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${pathImagen}`}
        alt="bg-imagen"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
      <div className="main-content-mini w-full h-full absolute z-[2] flex flex-col p-2 sm:items-center sm:justify-center">
        <h2 className="text-xl line-clamp-2 sm:text-lg sm:text-center">
          {nombre}
        </h2>
        {hasButton && (
          <MainButton
            icon="icon-[mdi--arrow-right-thin]"
            nombre="ver detalle"
            destino="/series"
            customStyles="mt-auto text-xs sm:hidden"
          />
        )}
      </div>
    </div>
  );
}
