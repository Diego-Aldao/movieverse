"use client";
import React from "react";
import ImagenesSlide from "./ImagenesSlide";
import { Estreno } from "@/types";
import Generos from "./Generos";
import Slide from "./Slide";
//Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  estrenos: Estreno[];
}

export default function Slider({ estrenos }: Props) {
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
      {estrenos.slice(0, 7).map((estreno) => (
        <SwiperSlide className="w-full h-full overflow-hidden" key={estreno.id}>
          <Slide
            titulo={estreno.title}
            votoPromedio={estreno.vote_average}
            descripcion={estreno.overview}
            id={estreno.id}
            generos={<Generos generos={estreno.genre_ids} />}
          >
            <ImagenesSlide
              imagenPoster={estreno.poster_path}
              imagenBackdrop={estreno.backdrop_path}
            />
          </Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
