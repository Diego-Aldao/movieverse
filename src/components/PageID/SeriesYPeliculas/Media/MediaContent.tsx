"use client";
import CustomImage from "@/components/CustomImage";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import React, { useEffect, useState } from "react";
import errorImagePoster from "@/assets/errorImagePoster.webp";
import errorImageBackdrop from "@/assets/errorImagebackdrop.webp";

interface Props {
  imagenesUrls: string[];
  tipo: string;
  altImagen: string;
}

export default function MediaContent({ imagenesUrls, tipo, altImagen }: Props) {
  const [currentImage, setCurrentImage] = useState<string>(imagenesUrls[0]);

  useEffect(() => {
    setCurrentImage(imagenesUrls[0]);
  }, [imagenesUrls]);

  const handleClick = (imagenUrl: string) => {
    setCurrentImage(imagenUrl);
  };

  return (
    <div
      className={`media-content grid gap-4 ${
        tipo === "posters"
          ? "sm:grid-cols-2 min-h-[1000px] sm:min-h-[460px] md:min-h-[510px] lg:min-h-[440px] xl:min-h-[570px]"
          : "min-h-[400px] sm:min-h-[620px] md:min-h-[730px] lg:min-h-[640px] xl:min-h-[800px]"
      }`}
    >
      <div
        className={`current-media rounded-md overflow-hidden border-2 border-secondary-black md:max-w-full lg:min-h-0 w-full md:max-h-full mx-auto ${
          tipo === "posters" && "max-w-[400px] max-h-[600px]"
        }`}
      >
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${currentImage}`}
          alt={altImagen}
          customClases=" w-full h-full sm:hidden"
          errorImage={
            tipo === "posters" ? errorImagePoster : errorImageBackdrop
          }
        />
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${currentImage}`}
          alt={altImagen}
          customClases="hidden sm:inline-block lg:hidden"
          errorImage={
            tipo === "posters" ? errorImagePoster : errorImageBackdrop
          }
        />
        <CustomImage
          src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${currentImage}`}
          alt={altImagen}
          customClases="hidden lg:inline-block"
          errorImage={
            tipo === "posters" ? errorImagePoster : errorImageBackdrop
          }
        />
      </div>
      <div
        className={`grid-media grid grid-cols-3 sm:grid-cols-4 gap-2 content-evenly md:gap-y-4 ${
          tipo === "wallpapers" && "sm:grid-cols-4"
        }`}
      >
        {imagenesUrls.slice(0, 12).map((imagenUrl) => (
          <div
            key={imagenUrl}
            className={`rounded-md overflow-hidden h-fit border-2 transition-[opacity,border-color] cursor-pointer  after:inset-0 after:absolute after:bg-main-black  relative ${
              currentImage === imagenUrl
                ? "border-main-color after:bg-main-black/0 hover:border-main-color"
                : "border-transparent after:bg-main-black/50 hover:border-secondary-white/25 hover:after:bg-main-black/40"
            }`}
            onClick={() => {
              handleClick(imagenUrl);
            }}
          >
            <CustomImage
              src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imagenUrl}`}
              alt={altImagen}
              customClases="object-contain"
              unoptimized={true}
              errorImage={
                tipo === "posters" ? errorImagePoster : errorImageBackdrop
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
