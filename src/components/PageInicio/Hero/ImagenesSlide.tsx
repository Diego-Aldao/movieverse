import Image from "next/image";
import React from "react";

interface Props {
  imagenPoster?: string;
  imagenBackdrop: string | null | undefined;
}

export default function ImagenesSlide({ imagenPoster, imagenBackdrop }: Props) {
  const baseUrl = "https://image.tmdb.org/t/p/";

  const tamaños = {
    pequeño: "w500",
    mediano: "w780",
    grande: "w1280",
    original: "original",
  };

  const estilosImagenes =
    "object-cover w-full h-full min-h-[830px] object-[50%,0px]";

  return (
    <div className="absolute top-0 left-0 w-full h-full after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#1010105d] before:w-full before:h-[400px] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-[#18191A] before:to-transparent before:z-[1] before:via-[#18191aa2]">
      <Image
        src={`${baseUrl}${tamaños.pequeño}${imagenPoster}`}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className={`${estilosImagenes} md:hidden`}
        data-swiper-parallax="75%"
        data-swiper-parallax-scale="1.10"
      />
      <Image
        src={`${baseUrl}${tamaños.mediano}${imagenPoster}`}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        data-swiper-parallax="75%"
        data-swiper-parallax-scale="1.10"
        className={`${estilosImagenes} hidden md:inline-block lg:hidden`}
      />
      <Image
        src={`${baseUrl}${tamaños.grande}${imagenBackdrop}`}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        data-swiper-parallax="75%"
        data-swiper-parallax-scale="1.10"
        className={`${estilosImagenes} hidden lg:inline-block 2xl:hidden`}
      />

      <Image
        src={`${baseUrl}${tamaños.original}${imagenBackdrop}`}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        data-swiper-parallax="75%"
        data-swiper-parallax-scale="1.10"
        className={`${estilosImagenes} hidden 2xl:inline-block `}
      />
    </div>
  );
}
