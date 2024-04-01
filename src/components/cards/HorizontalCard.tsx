import Image from "next/image";
import React from "react";
import { baseUrlImagenes, tamañosImagenes } from "@/constants/constants";
import Generos from "../Generos";
import { numberToFixed } from "@/utils/fixedNumbers";
import { Audiovisual, Serie } from "@/types/fetchTypes";
import MainButton from "../buttons/MainButton";

interface Props {
  item: Serie | Audiovisual;
}

export default function HorizontalCard({ item }: Props) {
  return (
    <div className="cardSerie z-[2] max-w-[370px] md:max-w-[700px] xl:max-w-[900px] w-full  rounded-md overflow-hidden after:inset-0 after:absolute relative after:bg-gradient-to-r after:from-secondary-black after:via-[#242526b7]  after:overflow-hidden after:to-transparent min-h-[200px] h-[200px] md:h-[300px] xl:h-[400px]  lg:h-auto lg:max-h-[320px] xl:max-h-full">
      <Image
        src={`${baseUrlImagenes}${tamañosImagenes.pequeño}${item.backdrop_path}`}
        alt="bg-imagen"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover lg:hidden"
      />
      <Image
        src={`${baseUrlImagenes}${tamañosImagenes.mediano}${item.backdrop_path}`}
        alt="bg-imagen"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover hidden lg:block"
      />
      <div className="card-serie-content absolute w-full h-full top-0 left-0 z-[2] xl:gap-4 p-4 flex flex-col gap-2 md:p-8">
        <div className="header flex gap-2 xl:gap-4">
          <div className="header-image rounded-md overflow-hidden min-h-[105px] xl:min-h-[150] hidden lg:block">
            <Image
              src={`${baseUrlImagenes}${tamañosImagenes.pequeño}${item.poster_path}`}
              alt="bg-imagen"
              width={70}
              height={0}
              className="xl:hidden"
            />
            <Image
              src={`${baseUrlImagenes}${tamañosImagenes.pequeño}${item.poster_path}`}
              alt="bg-imagen"
              width={100}
              height={0}
              className="hidden xl:block"
            />
          </div>

          <div className="header-info flex flex-col gap-2 xl:gap-4">
            <h2 className="text-xl line-clamp-1 md:text-3xl xl:text-4xl">
              {item.name}
            </h2>
            <Generos
              tipo="tv"
              cantidad={3}
              listaGenerosNumericos={item.genre_ids}
              stylesItem="text-[10px] md:text-sm"
            />
          </div>
          <span className="header-valoracion ml-auto py-1 text-xs px-2 md:px-4 md:text-sm bg-[#242526b7] text-green-500 rounded-full flex gap-2 h-fit items-center">
            <span className="icon-[mdi--star] text-inherit"></span>
            {numberToFixed(item.vote_average)}
          </span>
        </div>

        <p className="text-xs line-clamp-4 xl:line-clamp-5 w-2/3 md:w-full md:max-w-[400px] xl:max-w-[500px] md:text-base">
          {item.overview}
        </p>
        <MainButton
          icon="icon-[mdi--arrow-right-thin]"
          nombre="ver detalle"
          destino="/series"
          customStyles="mt-auto text-xs md:text-base px-4 md:px-6 bg-[#242526a8]"
        />
      </div>
    </div>
  );
}
