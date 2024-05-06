import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { numberToFixed } from "@/utils/fixedNumbers";
import getYearFromDate from "@/utils/getYearFromDate";
import getDurationFromMinutes from "@/utils/getDurationFromMinutes";
import { DetallePelicula } from "@/types/fetchTypes";
import SkeletonHero from "@/components/skeletons/PagePeliculasSeries/SkeletonHero";

interface Props {
  pelicula: DetallePelicula | undefined;
  loading: boolean;
}

export default function Hero({ pelicula, loading }: Props) {
  return (
    <>
      {loading && <SkeletonHero />}
      {pelicula && (
        <section
          className={`hero w-full relative  ${
            pelicula.overview ? "min-h-[700px]" : "min-h-[400px]"
          } after:bg-gradient-to-t after:from-main-black after:from-30% after:to-transparent after:w-full after:h-full after:top-0 after:left-0 after:absolute md:h-[500px] lg:h-[600px] xl: md:after:from-0% md:min-h-[0px]`}
        >
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${pelicula.poster_path}`}
            alt={"pelicula"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover absolute top-0 left-0  object-[50%,0px]"
          />
          {pelicula.backdrop_path && (
            <>
              <Image
                src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${pelicula.backdrop_path}`}
                alt={"pelicula"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover absolute top-0 left-0 hidden md:inline-block lg:hidden 2xl:hidden object-[50%,0px]"
              />
              <Image
                src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${pelicula.backdrop_path}`}
                alt={"pelicula"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover absolute top-0 left-0 hidden lg:inline-block 2xl:hidden object-[50%,0px]"
              />
              <Image
                src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.original}${pelicula.backdrop_path}`}
                alt={"pelicula"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover absolute top-0 left-0 hidden 2xl:inline-block  object-[50%,0px]"
              />
            </>
          )}

          <div className="flex flex-col w-full gap-4 max-w-7xl mx-auto px-4 md:px-8 lg:px-10 2xl:px-0 z-[2] absolute top-[50%] md:relative md:top-0 left-0 md:pt-36 lg:pt-48">
            <header className="flex flex-col justify-center">
              {pelicula.vote_average !== undefined && pelicula.vote_count ? (
                <div className={`flex items-center gap-2 w-full relative mb-2`}>
                  <span className="icon-[mdi--star] md:h-6 md:w-6 text-main-color"></span>
                  <span className="md:text-xl">
                    {numberToFixed(pelicula.vote_average)}
                  </span>
                </div>
              ) : (
                <span className="uppercase text-xs px-3 py-1 bg-[#2425267e] rounded-full w-fit">
                  sin calificar
                </span>
              )}

              <h1
                className={`w-fit text-3xl uppercase font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl max-w-[300px] sm:max-w-[450px] lg:max-w-[550px] relative`}
              >
                {pelicula.title}
              </h1>
              {pelicula.tagline && (
                <span className="text-sm md:text-base text-secondary-white italic">
                  {pelicula.tagline}
                </span>
              )}
            </header>

            <div className="sub-info flex items-center gap-4 flex-wrap">
              <span className="capitalize px-3 py-1 text-xs bg-[#2425267e] border-main-white border-opacity-5 border rounded-full md:px-4 md:text-sm">
                {getYearFromDate(pelicula.release_date)}
              </span>
              {pelicula.runtime && (
                <span className="capitalize px-3 py-1 text-xs bg-[#2425267e] border-main-white border-opacity-10 border rounded-full md:px-4 md:text-sm">
                  {getDurationFromMinutes(pelicula.runtime)}
                </span>
              )}

              {pelicula.runtime && pelicula.genres.length >= 1 && (
                <span className="hidden sm:inline-block divisor h-[2px] w-[2px] rounded-full bg-secondary-white"></span>
              )}
              {pelicula.genres.length >= 1 && (
                <ul className={`flex items-center gap-1`}>
                  {pelicula.genres.map((genero) => (
                    <li
                      className="capitalize px-3 py-1 text-xs bg-[#2425267e] border-main-white border-opacity-10 border rounded-full md:px-4 md:text-sm"
                      key={genero.id}
                    >
                      {genero.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="max-w-[600px] lg:max-w-[700px] md:max-w-[550px] flex flex-col gap-2">
              <p className="lg:text-lg relative line-clamp-6">
                {pelicula.overview}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
