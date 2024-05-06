import React from "react";
import generosPeliculas from "@/generos.json";
import generosTV from "@/generosTV.json";
import { numberToFixed } from "@/utils/fixedNumbers";

interface Props {
  nombre?: string;
  valoracion?: number;
  generos?: number[];
  mediaType: string;
  voteCount?: number;
}

export default function ContentAudiovisual({
  nombre,
  valoracion,
  generos,
  mediaType,
  voteCount,
}: Props) {
  const listadoGeneros = mediaType === "movie" ? generosPeliculas : generosTV;
  const currentGeneros = listadoGeneros.filter((genero) => {
    return generos?.includes(genero.id);
  });
  return (
    <div className="main-content flex flex-col gap-1 sm:gap-2">
      <h1 className="relative z-[2] line-clamp-1 md:text-lg xl:text-xl">
        {nombre}
      </h1>
      <ul className="generos flex gap-2 items-center relative z-[2]">
        {currentGeneros.slice(0, 2).map((genero) => (
          <li
            className="bg-[#ffffff0e] px-2 py-[3px] rounded-full text-[10px] sm:text-xs capitalize line-clamp-1"
            key={genero.id}
          >
            {genero.name}
          </li>
        ))}
      </ul>
      {valoracion !== undefined && voteCount ? (
        <span
          className={`px-3 mt-1 py-[2px] text-xs bg-[#ffffff0e] backdrop-blur-2xl rounded-full relative flex items-center gap-1 z-[2] self-end xl:text-sm ${
            valoracion >= 7
              ? "text-green-500"
              : valoracion >= 4
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          <span className="icon-[mdi--star] text-inherit"></span>
          {numberToFixed(valoracion)}
        </span>
      ) : (
        <span className="px-3 mt-1 py-[2px] text-[10px] bg-[#ffffff0e] backdrop-blur-2xl rounded-full relative flex items-center gap-1 z-[2] self-end xl:text-xs">
          Sin puntuar
        </span>
      )}
    </div>
  );
}
