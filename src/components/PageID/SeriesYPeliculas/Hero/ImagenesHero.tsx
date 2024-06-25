import CustomImage from "@/components/CustomImage";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import React from "react";
import errorImagePoster from "@/assets/errorImagePoster.webp";
import errorImageBackdrop from "@/assets/errorImagebackdrop.webp";

interface Props {
  urlPoster: string;
  urlBackdrop: string;
}

export default function ImagenesHero({ urlPoster, urlBackdrop }: Props) {
  return (
    <div className="absolute top-0 left-0 w-full h-full min-h-[700px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-secondary-black">
      <CustomImage
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${urlPoster}`}
        alt={"pelicula"}
        customClases="object-[50%,0px] md:hidden"
        priority={true}
        errorImage={errorImagePoster}
      />
      <CustomImage
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${urlBackdrop}`}
        alt={"pelicula"}
        customClases="hidden md:inline-block 2xl:hidden object-[50%,0px]"
        priority={true}
        errorImage={errorImageBackdrop}
      />
      <CustomImage
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.original}${urlBackdrop}`}
        alt={"pelicula"}
        customClases="hidden 2xl:inline-block object-[50%,0px]"
        priority={true}
        errorImage={errorImageBackdrop}
      />
    </div>
  );
}
