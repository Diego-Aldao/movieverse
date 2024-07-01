"use client";
import React from "react";
import ImagenesSlide from "./ImagenesSlide";
import { Estrenos } from "@/types/fetchTypes";
import Generos from "./Generos";
import Slide from "./Slide";
import SkeletonHero from "@/components/skeletons/PageInicio/SkeletonHero";
import FetchDataClient from "@/services/fetchDataClient";
import { BASE_URL_ESTRENOS } from "@/constants/constants";

//Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const { data: estrenos, loading } =
    FetchDataClient<Estrenos>(BASE_URL_ESTRENOS);
  const estrenosFiltrados = estrenos?.results
    .filter((estreno) => estreno.overview)
    .slice(0, 8);
  return (
    <Swiper
      className="w-full h-full"
      modules={[Navigation, Pagination, Parallax]}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      parallax={true}
      speed={500}
    >
      {loading && (
        <>
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <SwiperSlide key={i}>
                <SkeletonHero />
              </SwiperSlide>
            ))}
        </>
      )}
      {estrenosFiltrados && (
        <>
          {estrenosFiltrados.map((estreno, i) => {
            return (
              <SwiperSlide
                className="w-full h-full overflow-hidden"
                key={estreno.id}
              >
                <Slide
                  titulo={estreno.title}
                  votoPromedio={estreno.vote_average}
                  descripcion={estreno.overview}
                  id={estreno.id}
                  poster={estreno.poster_path}
                  generos={<Generos generos={estreno.genre_ids} />}
                >
                  <ImagenesSlide
                    imagenPoster={estreno.poster_path}
                    imagenBackdrop={estreno.backdrop_path}
                    firstSlide={i === 0}
                    altImagenes={estreno.title}
                  />
                </Slide>
              </SwiperSlide>
            );
          })}
        </>
      )}
    </Swiper>
  );
}
