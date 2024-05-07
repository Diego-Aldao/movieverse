import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import { ImagesCelebridad } from "@/types/fetchTypes";
import Image from "next/image";
import React from "react";

interface Props {
  imagenes: ImagesCelebridad;
}

export default function Hero({ imagenes }: Props) {
  return (
    <div className="hero absolute top-0 left-0 w-full after:absolute after:inset-0 after:bg-[#101010ce] hidden lg:grid grid-cols-6 gap-x-8">
      {imagenes.profiles.slice(1, 7).map((imagen, index) => (
        <div
          className={`imagen rounded-md overflow-hidden ${
            index % 2 === 0 ? "pt-20" : "pb-20"
          }`}
          key={imagen.file_path}
        >
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${imagen.file_path}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}