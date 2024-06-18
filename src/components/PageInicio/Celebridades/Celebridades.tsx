import MainCard from "@/components/cards/MainCard/MainCard";
import fetchData from "@/data/fetchData";
import type { Celebridad, Celebridades } from "@/types/fetchTypes";
import React from "react";
import { BASE_URL_POPULAR_PEOPLE } from "@/constants/constants";
import ContentCelebridad from "@/components/cards/MainCard/ContentCelebridad";

export default async function Celebridades() {
  const urlFetch = `${BASE_URL_POPULAR_PEOPLE}page=1&include_adult=false`;
  const { results: celebridades } = await fetchData<Celebridades>(urlFetch);

  return (
    <div className="main-content grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5  gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16">
      {celebridades.map((tendencia: Celebridad) => (
        <MainCard
          nombre={tendencia.name}
          key={tendencia.id}
          imagen={tendencia.profile_path || ""}
          id={tendencia.id}
          mediaType={"person"}
        >
          <ContentCelebridad
            nombre={tendencia.name}
            apariciones={tendencia.known_for}
          />
        </MainCard>
      ))}
    </div>
  );
}
