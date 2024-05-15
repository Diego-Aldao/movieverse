import Image from "next/image";
import React from "react";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import MainButton from "../buttons/MainButton";

interface Props {
  pathImagen: string;
  nombre: string;
  hasButton: boolean;
  destino?: string;
}

export default function MiniCard({
  pathImagen,
  nombre,
  hasButton,
  destino,
}: Props) {
  return (
    <div className="w-full flex h-[120px] sm:h-full after:bg-[#242526b7] after:inset-0 after:absolute relative rounded-md overflow-hidden max-w-[370px] mx-auto sm:max-w-full md:h-full">
      <Image
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${pathImagen}`}
        alt="bg-imagen"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="main-content-mini w-full h-full absolute z-[2] flex flex-col  p-2">
        <h2 className="text-xl line-clamp-1 sm:text-lg md:text-xl">{nombre}</h2>
        {hasButton && destino && (
          <MainButton
            icon="icon-[mdi--arrow-right-thin]"
            nombre="ver detalle"
            destino={destino}
            customStyles="mt-auto text-xs"
          />
        )}
      </div>
    </div>
  );
}
