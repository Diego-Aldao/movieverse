import React from "react";
import getYearFromDate from "@/utils/getYearFromDate";
import { ContentRatingsResult, Genre } from "@/types/fetchTypes";
import getDurationFromMinutes from "@/utils/getDurationFromMinutes";
import MainTag from "@/components/tags/MainTag";

interface Props {
  estreno: string;
  duracion: never[] | number[];
  generos: Genre[];
  edadMinima: ContentRatingsResult;
}

export default function MainInfoHero({
  estreno,
  duracion,
  generos,
  edadMinima,
}: Props) {
  return (
    <div className="sub-info flex items-center gap-4 flex-wrap">
      <MainTag>{getYearFromDate(estreno)}</MainTag>
      {duracion.length >= 1 && (
        <MainTag>{getDurationFromMinutes(duracion[0])}</MainTag>
      )}
      {edadMinima && <MainTag>{edadMinima.rating}</MainTag>}
      {duracion && generos.length >= 1 && (
        <span className="hidden sm:inline-block h-[2px] w-[2px] rounded-full bg-secondary-white"></span>
      )}
      {generos.length >= 1 && (
        <ul className={`flex items-center gap-1`}>
          {generos.map((genero) => (
            <MainTag key={genero.id}>{genero.name}</MainTag>
          ))}
        </ul>
      )}
    </div>
  );
}
