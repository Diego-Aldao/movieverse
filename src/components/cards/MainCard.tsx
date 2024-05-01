import { KnownFor } from "@/types/fetchTypes";
import { numberToFixed } from "@/utils/fixedNumbers";
import Image from "next/image";
import React from "react";
import generosPeliculas from "@/generos.json";
import generosTV from "@/generosTV.json";
import Link from "next/link";

interface Props {
  nombre?: string;
  imagen: string;
  valoracion?: number;
  cardCelebridad?: boolean;
  generos?: number[];
  apariciones?: KnownFor[];
  mediaType: string;
  voteCount?: number;
  id: number;
}

interface PropsAudiovisual {
  nombre?: string;
  valoracion?: number;
  generos?: number[];
  mediaType: string;
  voteCount?: number;
}

interface PropsPersona {
  nombre?: string;
  apariciones?: KnownFor[];
}

function MainContentAudiovisual({
  nombre,
  valoracion,
  generos,
  mediaType,
  voteCount,
}: PropsAudiovisual) {
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
function MainContentPersona({ nombre, apariciones }: PropsPersona) {
  return (
    <div className="main-content flex flex-col gap-1 sm:gap-2">
      <h1 className="relative z-[2] line-clamp-1 md:text-lg xl:text-xl">
        {nombre}
      </h1>
      <ul className="conocido-por relative z-[2] flex flex-wrap gap-3 gap-y-1">
        {apariciones?.map((aparicion) => (
          <li key={aparicion.id} className="text-xs line-clamp-1">
            {aparicion.name || aparicion.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MainCard({
  nombre,
  imagen,
  valoracion,
  generos,
  apariciones,
  mediaType,
  voteCount,
  id,
}: Props) {
  const currentMediaType =
    mediaType === "movie"
      ? "peliculas"
      : mediaType === "tv"
      ? "series"
      : "celebridades";
  const cardCelebridad = currentMediaType === "celebridades";

  return (
    <Link
      href={`/${currentMediaType}/${id}`}
      className="card w-full min-h-[250px] relative after:absolute after:inset-[3px] md:after:inset-[4px] before:inset-[3px] md:before:inset-[4px] before:absolute before:bg-[#1010103b] rounded-md after:rounded-md before:rounded-md"
    >
      <div className="imagen rounded-md h-full w-full overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${imagen}`}
          alt={`poster de la pelicula`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="contenido rounded-md w-full h-full absolute top-0 left-0 z-[2] after:rounded-md after:inset-[3px] md:after:inset-[4px] after:absolute after:bg-gradient-to-t after:from-[#101010] after:via-transparent after:to-transparent flex flex-col justify-between p-2 md:p-3 xl:p-4">
        <header className="flex items-center justify-end ">
          <div className="menu bg-[#10101017] rounded-full h-7 w-7 xl:h-8 xl:w-8 flex items-center justify-center backdrop-blur-xl">
            <span className="icon-[mdi--dots-vertical]"></span>
          </div>
        </header>
        {cardCelebridad ? (
          <MainContentPersona nombre={nombre} apariciones={apariciones} />
        ) : (
          <MainContentAudiovisual
            nombre={nombre}
            valoracion={valoracion}
            generos={generos}
            mediaType={mediaType}
            voteCount={voteCount}
          />
        )}
      </div>
    </Link>
  );
}
