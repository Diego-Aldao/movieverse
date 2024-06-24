import React from "react";
import { numberToFixed } from "@/utils/fixedNumbers";

interface Props {
  votoPromedio: number;
  cantidadDeVotos: number;
  titulo: string;
  tagline: string;
  id: number;
  poster: string;
  media_type: string;
}

export default function HeaderHero({
  votoPromedio,
  cantidadDeVotos,
  titulo,
  tagline,
  id,
  poster,
  media_type,
}: Props) {
  return (
    <header className="flex flex-col justify-center">
      <div className="header flex gap-4 md:gap-8 items-center w-fit mb-2">
        {votoPromedio !== undefined && cantidadDeVotos ? (
          <div className={`flex items-center gap-1 w-full relative `}>
            <span className="icon-[mdi--star] md:h-6 md:w-6 text-main-color"></span>
            <span className="md:text-xl">{numberToFixed(votoPromedio)}</span>
          </div>
        ) : (
          <span className="uppercase text-xs px-3 py-1 bg-[#2425267e] rounded-full w-fit mb-2">
            sin calificar
          </span>
        )}
      </div>

      <h1
        className={`w-fit text-3xl uppercase font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl tracking-tight max-w-[300px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[850px] relative`}
      >
        {titulo}
      </h1>
      {tagline && (
        <span className="text-sm md:text-base text-secondary-white italic">
          {tagline}
        </span>
      )}
    </header>
  );
}
