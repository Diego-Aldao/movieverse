import React from "react";
import Image from "next/image";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";

import type { Similar } from "@/types/fetchTypes";

interface Props {
  similares: Similar;
}

export default function Similares({ similares }: Props) {
  const similaresFiltrados = similares.results
    .filter((similar) => similar.backdrop_path)
    .slice(0, 8);
  return (
    <CustomSection
      titulo="similares"
      customStyles="lg:col-start-2"
      asideSection={true}
    >
      <div className="main-content grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1">
        {similaresFiltrados.map((similar) => (
          <div
            key={similar.id}
            className="relative flex items-center justify-center after:absolute after:inset-0 after:bg-[#101010c7] rounded overflow-hidden max-h-[100px] lg:max-h-[150px]"
          >
            <span className="absolute font-semibold z-[2] text-xs md:text-sm w-full text-center line-clamp-1 px-2 lg:text-base xl:text-lg">
              {"name" in similar ? similar.name : similar.title}
            </span>
            <Image
              src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${similar.backdrop_path}`}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </CustomSection>
  );
}
