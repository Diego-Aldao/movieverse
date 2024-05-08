import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import Image from "next/image";
import React from "react";

interface Props {
  urlPoster: string;
  urlBackdrop: string;
}

export default function ImagenesHero({ urlPoster, urlBackdrop }: Props) {
  return (
    <>
      {urlPoster ? (
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${urlPoster}`}
          alt={"pelicula"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover absolute top-0 left-0 object-[50%,0px]"
        />
      ) : (
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${urlBackdrop}`}
          alt={"pelicula"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover absolute top-0 left-0 object-[50%,0px]"
        />
      )}
      {urlBackdrop && (
        <>
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${urlBackdrop}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover absolute top-0 left-0 hidden md:inline-block lg:hidden 2xl:hidden object-[50%,0px]"
          />
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${urlBackdrop}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover absolute top-0 left-0 hidden lg:inline-block 2xl:hidden object-[50%,0px]"
          />
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.original}${urlBackdrop}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover absolute top-0 left-0 hidden 2xl:inline-block  object-[50%,0px]"
          />
        </>
      )}
    </>
  );
}
