"use client";
import CustomImage from "@/components/CustomImage";
import MainButton from "@/components/buttons/MainButton";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";
import MainTag from "@/components/tags/MainTag";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import { LastEpisodeToAir, Season } from "@/types/fetchTypes";
import getYearFromDate from "@/utils/getYearFromDate";
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import Link from "next/link";
import React from "react";

interface Props {
  ultimoEpisodio: LastEpisodeToAir | null;
  proximoEpisodio: LastEpisodeToAir | null;
  numeroDeEpisodios: number;
  numeroDeTemporadas: number;
  temporadas: Season[];
  enProduccion: boolean;
  banner: string;
  id:string;
}

export default function UltimaTemporada({
  ultimoEpisodio,
  temporadas,
  banner,
  id
}: Props) {
  const formater = useDateFormatter({ dateStyle: "medium" });
  const titulo =
    ultimoEpisodio === null
      ? "siguiente temporada"
      : ultimoEpisodio.episode_type === "finale"
      ? "ultima temporada"
      : "temporada actual";

  const getTemporadaActual = (temporadaUltimoCapitulo: number) => {
    return temporadas.filter(
      (temporada) => temporada.season_number === temporadaUltimoCapitulo
    );
  };

  const temporadaActual =
    ultimoEpisodio === null
      ? temporadas[0]
      : getTemporadaActual(ultimoEpisodio.season_number)[0];

      let fechaUltimoEpisodio: CalendarDate | string = "";

    if (ultimoEpisodio) {
      fechaUltimoEpisodio = parseDate(ultimoEpisodio.air_date);
      fechaUltimoEpisodio = formater.format(fechaUltimoEpisodio.toDate(getLocalTimeZone()))
    }


  return (
    <CustomSection titulo={titulo} customStyles="lg:col-start-1">
      <div className="ultima-temporada relative flex items-end sm:items-center justify-center max-w-[320px] w-full sm:max-w-[800px] xl:max-w-[900px] mx-auto">
        <div className="imagen w-full relative after:inset-0 after:absolute after:bg-gradient-to-b after:from-transparent after:via-main-black/75 after:to-main-black rounded-md overflow-hidden after:sm:bg-main-black/75 after:sm:from-transparent after:sm:to-transparent after:sm:via-transparent sm:max-h-[300px] xl:max-h-[400px]">
          <CustomImage
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${temporadaActual.poster_path}`}
            alt=""
            customClases="sm:hidden"
            errorImage={""}
          />
          <CustomImage
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${banner}`}
            alt=""
            customClases="hidden sm:block"
            errorImage={""}
          />
        </div>
        <div className="contenido absolute flex flex-col sm:flex-row gap-4 w-full items-start px-2 sm:px-4">
          <div className="min-w-[150px] h-[210px] xl:min-w-[200px] xl:min-h-[280px] hidden sm:block">
            <CustomImage
              src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${temporadaActual.poster_path}`}
              alt=""
              errorImage={""}
            />
          </div>

          <div className="main-info flex flex-col gap-4 w-fit">
            <span className="text-2xl font-semibold font-cabin xl:text-3xl">
              {temporadaActual.name}
            </span>
            <div className="subinfo flex gap-2">
              <MainTag customStyles="flex gap-2 items-center">
                <span className="icon-[mdi--star] md:h-6 md:w-6 text-main-color"></span>

                {temporadaActual.vote_average}
              </MainTag>

              <MainTag>{getYearFromDate(temporadaActual.air_date)}</MainTag>
              <MainTag>{temporadaActual.episode_count} episodios</MainTag>
            </div>
            <p className="line-clamp-5 first-letter:capitalize max-w-[550px] xl:max-w-[600px]">
              {temporadaActual.overview}
            </p>
            {ultimoEpisodio && (
              <div className="ultimo-capitulo flex gap-2 gap-x-1 text-sm flex-wrap items-center">
                <span className="w-full text-base first-letter:uppercase  transition-all">
                  ultimo episodio: <Link href={`/series/${id}/temporadas/${ultimoEpisodio.season_number}`} className="group hover:text-main-color transition-colors">{ultimoEpisodio.name} <span className="icon-[mdi--arrow-top-right] w-3 h-3 transition-all relative group-hover:-top-1 group-hover:-right-1"></span></Link>  <MainTag customStyles="text-main-color hidden sm:inline-block">final de temporada</MainTag>
                </span>
                <MainTag>
                  {ultimoEpisodio.season_number}x
                  {ultimoEpisodio?.episode_number}
                </MainTag>
                {fechaUltimoEpisodio.length >= 1 && <MainTag>{fechaUltimoEpisodio}</MainTag>}
                {ultimoEpisodio.episode_type === "finale" && <MainTag customStyles="text-main-color sm:hidden">final de temporada</MainTag>}
              </div>
            )}
          </div>
        </div>
      </div>
      <MainButton nombre="ver todas las temporadas" destino={`/series/${id}/temporadas`} icon="icon-[mdi--arrow-right-thin]"/>
    </CustomSection>
  );
}
