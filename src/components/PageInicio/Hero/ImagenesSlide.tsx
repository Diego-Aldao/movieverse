import CustomImage from "@/components/CustomImage";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import React from "react";
import { useInView } from "react-intersection-observer";
import errorImage from "@/assets/errorImagebackdrop.webp";

interface Props {
  imagenPoster?: string;
  imagenBackdrop: string | null | undefined;
  firstSlide: boolean;
}

export default function ImagenesSlide({
  imagenPoster,
  imagenBackdrop,
  firstSlide,
}: Props) {
  const [ref, inView] = useInView({ threshold: 0 });

  const estilosImagenes = "min-h-[830px] object-[50%,0px]";

  return (
    <div
      ref={ref}
      className={`absolute transition-opacity w-full h-full top-0 left-0 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#18191A5d] before:w-full before:h-[400px] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-[#18191A] before:to-transparent before:z-[1] before:via-[#18191aa2] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/*custom image no puede recibir como prop data-swiper-parallax, asi que es necesario envolverlo en otro elemento, y a este pasarle las propiedades para el parallax*/}
      <div data-swiper-parallax="75%" data-swiper-parallax-scale="1.10">
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imagenPoster}`}
          alt=""
          customClases={`${estilosImagenes} md:hidden`}
          priority={firstSlide}
          errorImage={errorImage}
        />
      </div>
      <div data-swiper-parallax="75%" data-swiper-parallax-scale="1.10">
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${imagenPoster}`}
          alt=""
          customClases={`${estilosImagenes} hidden md:inline-block lg:hidden`}
          priority={firstSlide}
          errorImage={errorImage}
        />
      </div>
      <div data-swiper-parallax="75%" data-swiper-parallax-scale="1.10">
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${imagenBackdrop}`}
          alt=""
          customClases={`${estilosImagenes} hidden lg:inline-block 2xl:hidden`}
          priority={firstSlide}
          errorImage={errorImage}
        />
      </div>
      <div data-swiper-parallax="75%" data-swiper-parallax-scale="1.10">
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.original}${imagenBackdrop}`}
          alt=""
          customClases={`${estilosImagenes} hidden 2xl:inline-block `}
          priority={firstSlide}
          errorImage={errorImage}
        />
      </div>
    </div>
  );
}
