"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import { useInView } from "react-intersection-observer";

interface Props {
  imagen: string;
  mediaType: string;
  id: number;
  children: ReactNode;
  customSizes?: string;
}

export default function MainCard({
  imagen,
  mediaType,
  id,
  children,
  customSizes,
}: Props) {
  const currentMediaType =
    mediaType === "movie"
      ? "peliculas"
      : mediaType === "tv"
      ? "series"
      : "celebridades";

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Link
      ref={ref}
      href={`/${currentMediaType}/${id}`}
      className={`card w-full relative after:absolute after:inset-[3px] md:after:inset-[4px] before:inset-[3px] md:before:inset-[4px] before:absolute before:bg-[#1010103b] rounded-md after:rounded-md before:rounded-md border-b-2 border-transparent hover:border-main-color transition-all hover:-top-1 bg-secondary-black ${
        customSizes
          ? customSizes
          : "min-h-[65vw] sm:min-h-[44vw] md:min-h-[32vw] xl:min-h-[335px]"
      } ${inView ? "opacity-100 top-0" : "opacity-0 top-4"} `}
    >
      <div className="imagen rounded-md h-full w-full overflow-hidden">
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imagen}`}
          alt={`poster de la pelicula`}
          width={0}
          height={0}
          sizes="100vw"
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
