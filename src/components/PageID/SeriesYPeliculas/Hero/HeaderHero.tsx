import React from "react";
import { numberToFixed } from "@/utils/fixedNumbers";

interface Props {
  votoPromedio: number;
  cantidadDeVotos: number;
  titulo: string;
  tagline: string;
}

export default function HeaderHero({
  votoPromedio,
  cantidadDeVotos,
  titulo,
  tagline,
}: Props) {
  return (
    <header className="flex flex-col justify-center">
      {votoPromedio !== undefined && cantidadDeVotos ? (
        <div className={`flex items-center gap-2 w-full relative mb-2`}>
          <span className="icon-[mdi--star] md:h-6 md:w-6 text-main-color"></span>
          <span className="md:text-xl">{numberToFixed(votoPromedio)}</span>
        </div>
      ) : (
        <span className="uppercase text-xs px-3 py-1 bg-[#2425267e] rounded-full w-fit">
          sin calificar
        </span>
      )}

      <h1
        className={`w-fit text-3xl uppercase font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl max-w-[300px] sm:max-w-[450px] lg:max-w-[550px] relative`}
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
