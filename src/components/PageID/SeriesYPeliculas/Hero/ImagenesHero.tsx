import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import Image from "next/image";
import React from "react";

interface Props {
  urlPoster: string;
  urlBackdrop: string;
}

export default function ImagenesHero({ urlPoster, urlBackdrop }: Props) {
  return (
    <div className="absolute top-0 left-0 w-full h-full min-h-[700px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {urlPoster ? (
        <>
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${urlPoster}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="object-[50%,0px] sm:hidden"
          />
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${urlPoster}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="object-[50%,0px] hidden sm:inline-block md:hidden"
          />
        </>
      ) : (
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${urlBackdrop}`}
          alt={"pelicula"}
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,0px] md:hidden"
        />
      )}
      {urlBackdrop ? (
        <>
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${urlBackdrop}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="hidden md:inline-block 2xl:hidden object-[50%,0px]"
          />
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.original}${urlBackdrop}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="hidden 2xl:inline-block object-[50%,0px]"
          />
        </>
      ) : (
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${urlPoster}`}
          alt={"pelicula"}
          width={0}
          height={0}
          sizes="100vw"
          className=" object-[50%,0px] hidden md:inline-block"
        />
      )}
    </div>
  );
}
