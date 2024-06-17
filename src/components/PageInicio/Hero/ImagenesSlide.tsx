import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  imagenPoster?: string;
  imagenBackdrop: string | null | undefined;
}

export default function ImagenesSlide({ imagenPoster, imagenBackdrop }: Props) {
  const [ref, inView] = useInView({ threshold: 0 });

  const estilosImagenes = "min-h-[830px] object-[50%,0px]";

  return (
    <div
      ref={ref}
      className={`absolute transition-opacity w-full h-full top-0 left-0 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#18191A5d] before:w-full before:h-[400px] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-[#18191A] before:to-transparent before:z-[1] before:via-[#18191aa2] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {imagenPoster ? (
        <>
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imagenPoster}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className={`${estilosImagenes} md:hidden`}
            data-swiper-parallax="75%"
            data-swiper-parallax-scale="1.10"
          />
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${imagenPoster}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            data-swiper-parallax="75%"
            data-swiper-parallax-scale="1.10"
            className={`${estilosImagenes} hidden md:inline-block lg:hidden`}
          />
        </>
      ) : (
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${imagenBackdrop}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          data-swiper-parallax="75%"
          data-swiper-parallax-scale="1.10"
          className={`${estilosImagenes}  lg:hidden`}
        />
      )}
      {imagenBackdrop ? (
        <>
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${imagenBackdrop}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            data-swiper-parallax="75%"
            data-swiper-parallax-scale="1.10"
            className={`${estilosImagenes} hidden lg:inline-block 2xl:hidden`}
          />

          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.original}${imagenBackdrop}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            data-swiper-parallax="75%"
            data-swiper-parallax-scale="1.10"
            className={`${estilosImagenes} hidden 2xl:inline-block `}
          />
        </>
      ) : (
        <Image
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.original}${imagenPoster}`}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          data-swiper-parallax="75%"
          data-swiper-parallax-scale="1.10"
          className={`${estilosImagenes} hidden lg:inline-block object-[50%,20%]`}
        />
      )}
    </div>
  );
}
