"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import { useInView } from "react-intersection-observer";
import UserInteraction from "../UserInteraction";
import errorImage from "@/assets/errorImagePoster.webp";
import CustomImage from "@/components/CustomImage";

interface Props {
  imagen: string;
  mediaType: string;
  id: number;
  children: ReactNode;
  customSizes?: string;
  nombre: string;
}

export default function MainCard({
  imagen,
  mediaType,
  id,
  children,
  customSizes,
  nombre,
}: Props) {
  const currentMediaType =
    mediaType === "movie"
      ? "peliculas"
      : mediaType === "tv"
      ? "series"
      : "celebridades";

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);
  return (
    <Link
      onMouseEnter={() => {
        setIsMouseInside(true);
      }}
      onMouseLeave={() => {
        setIsMouseInside(false);
      }}
      ref={ref}
      href={`/${currentMediaType}/${id}`}
      className={`card w-full relative rounded-md after:absolute after:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:rounded-bl-md after:rounded-bl-md after:rounded-br-xl after:right-0 after:-bottom-1 before:rounded-tl-xl  after:bg-main-color after:h-3  after:scale-x-0 hover:after:scale-x-100 after:transition-all before:absolute before:[transform-origin:0_100%] after:[transform-origin:0_100%] before:top-0 after:-z-[1] before:bg-main-color before:w-3 before:-left-1 before:scale-y-0 hover:before:scale-y-100 before:transition-all transition-all hover:[transform:_translate3d(0.3rem,-0.3rem,0px)] bg-secondary-black ${
        customSizes
          ? customSizes
          : "min-h-[65vw] sm:min-h-[44vw] md:min-h-[32vw] xl:min-h-[335px]"
      } ${inView ? "opacity-100 top-0" : "opacity-0 top-4"} `}
    >
      <div className="imagen bg-secondary-black rounded-md h-full w-full overflow-hidden relative before:inset-[3px] md:before:inset-[4px] before:absolute before:bg-[#1010103d] before:rounded-md before:z-[2]">
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.posterPequeño}${imagen}`}
          alt={nombre}
          noAnimation={true}
          errorImage={errorImage}
          unoptimized={true}
        />
      </div>
      <div className="contenido rounded-md w-full h-full absolute top-0 left-0 z-[2] after:rounded-md after:inset-[3px] md:after:inset-[4px] after:absolute after:bg-gradient-to-t after:from-[#101010] after:via-transparent after:to-transparent flex flex-col justify-between p-2 md:p-3 xl:p-4">
        <header className="flex items-center justify-end relative z-[10]">
          <UserInteraction
            isMouseInside={isMouseInside}
            dropdown={true}
            item={{
              id: id,
              nombre: nombre,
              img_path: imagen,
              media_type: mediaType,
            }}
          />
        </header>
        {children}
      </div>
    </Link>
  );
}
