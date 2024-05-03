import Image from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";

interface Props {
  imagen: string;
  mediaType: string;
  id: number;
  children: ReactNode;
}

export default function MainCard({ imagen, mediaType, id, children }: Props) {
  const currentMediaType =
    mediaType === "movie"
      ? "peliculas"
      : mediaType === "tv"
      ? "series"
      : "celebridades";

  return (
    <Link
      href={`/${currentMediaType}/${id}`}
      className="card w-full relative after:absolute after:inset-[3px] md:after:inset-[4px] before:inset-[3px] md:before:inset-[4px] before:absolute before:bg-[#1010103b] rounded-md after:rounded-md before:rounded-md"
    >
      <div className="imagen rounded-md h-full w-full overflow-hidden">
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imagen}`}
          alt={`poster de la pelicula`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="contenido rounded-md w-full h-full absolute top-0 left-0 z-[2] after:rounded-md after:inset-[3px] md:after:inset-[4px] after:absolute after:bg-gradient-to-t after:from-[#101010] after:via-transparent after:to-transparent flex flex-col justify-between p-2 md:p-3 xl:p-4">
        <header className="flex items-center justify-end">
          <div className="menu bg-[#10101017] rounded-full h-7 w-7 xl:h-8 xl:w-8 flex items-center justify-center backdrop-blur-xl">
            <span className="icon-[mdi--dots-vertical]"></span>
          </div>
        </header>
        {children}
      </div>
    </Link>
  );
}
