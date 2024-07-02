import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import React, { ReactNode } from "react";
import errorImage from "@/assets/errorImagePoster.webp";
import CustomImage from "@/components/CustomImage";

interface Props {
  imageSrc: string;
  children: ReactNode;
  nombre: string;
}

export default function MainInfo({ imageSrc, children, nombre }: Props) {
  return (
    <div className="main-info relative sm:flex sm:flex-col sm:gap-4">
      <div className="imagen max-w-[500px] min-h-[480px] lg:min-h-[450px] xl:min-h-[525px] sm:min-h-[370px] mx-auto sm:max-w-[250px] md:max-w-full w-full sm:rounded-md sm:overflow-hidden sm:after:hidden relative after:absolute after:inset-0 after:from-main-black after:bg-gradient-to-t after:from-15% after:to-transparent after:via-transparent">
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imageSrc}`}
          alt={`imagen de la celebridad ${nombre}`}
          errorImage={errorImage}
        />
      </div>
      <header className="flex items-center flex-col absolute bottom-0 left-0 w-full sm:relative sm:items-start">
        {children}
        <h1 className="text-2xl mt-4 font-semibold sm:hidden">{nombre}</h1>
      </header>
    </div>
  );
}
