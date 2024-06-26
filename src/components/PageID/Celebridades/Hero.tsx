import CustomImage from "@/components/CustomImage";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import { ImagesCelebridad } from "@/types/fetchTypes";
import React from "react";
import errorImagen from "@/assets/errorImagePoster.webp";

interface Props {
  imagenes: ImagesCelebridad;
}

export default function Hero({ imagenes }: Props) {
  const cantidadDeImagenes =
    imagenes.profiles.length > 6
      ? imagenes.profiles.slice(1, 7)
      : imagenes.profiles.slice(0, 6);
  const cantidadDeColumnas = Math.min(imagenes.profiles.length, 6);
  return (
    <div className="hero absolute top-0 left-0 w-full after:absolute after:inset-0 after:bg-[#101010ce] hidden lg:block">
      <div
        className={`grid lg:grid grid-cols-${cantidadDeColumnas} ${
          cantidadDeImagenes.length === 6 ? "w-full" : "w-fit"
        } mx-auto gap-x-8`}
      >
        {cantidadDeImagenes.map((imagen, index) => (
          <div
            className={`imagen rounded-md overflow-hidden min-h-[300px] ${
              index % 2 === 0 ? "pt-20" : "pb-20"
            }`}
            key={imagen.file_path}
          >
            <CustomImage
              src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.posterPequeño}${imagen.file_path}`}
              alt=""
              errorImage={errorImagen}
              triggerOnce={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
