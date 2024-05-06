"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import MainCard from "@/components/cards/MainCard/MainCard";
import ContentCelebridad from "@/components/cards/MainCard/ContentCelebridad";
import FetchDataClient from "@/data/fetchDataClient";
import SkeletonReparto from "@/components/skeletons/PagePeliculasSeries/SkeletonReparto";
import { RepartoPelicula } from "@/types/fetchTypes";
import { BASE_URL_MOVIE_DETAIL, LENGUAJE_ESP } from "@/constants/constants";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";
import SwiperReparto from "./SwiperReparto";

interface Props {
  id: string | string[];
}

export default function Reparto({ id }: Props) {
  const { data: reparto, loading } = FetchDataClient<RepartoPelicula>(
    `${BASE_URL_MOVIE_DETAIL}${id}/credits${LENGUAJE_ESP}`
  );
  return (
    <CustomSection titulo="reparto principal">
      {loading && <SkeletonReparto />}
      {reparto && (
        <SwiperReparto>
          {reparto.cast.slice(0, 10).map((actor) => (
            <SwiperSlide key={actor.id} className="pb-8">
              <MainCard
                imagen={actor.profile_path || ""}
                mediaType="person"
                id={actor.id}
              >
                <ContentCelebridad
                  nombre={actor.name}
                  personaje={actor.character}
                />
              </MainCard>
            </SwiperSlide>
          ))}
        </SwiperReparto>
      )}
    </CustomSection>
  );
}
