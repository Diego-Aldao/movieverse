"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import MainCard from "@/components/cards/MainCard/MainCard";
import ContentCelebridad from "@/components/cards/MainCard/ContentCelebridad";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";
import SwiperReparto from "./SwiperReparto";
import { CastPeliculas, CastSeries } from "@/types/fetchTypes";

interface Props {
  cast: CastSeries[] | CastPeliculas[];
}

export default function Reparto({ cast }: Props) {
  return (
    <CustomSection titulo="reparto principal">
      <SwiperReparto>
        {cast.slice(0, 10).map((actor) => (
          <SwiperSlide key={actor.id} className="pb-8">
            <MainCard
              imagen={actor.profile_path || ""}
              mediaType="person"
              id={actor.id}
            >
              {"roles" in actor ? (
                <ContentCelebridad
                  nombre={actor.name}
                  personaje={actor.roles[0].character || ""}
                />
              ) : (
                <ContentCelebridad
                  nombre={actor.name}
                  personaje={actor.character}
                />
              )}
            </MainCard>
          </SwiperSlide>
        ))}
      </SwiperReparto>
    </CustomSection>
  );
}
