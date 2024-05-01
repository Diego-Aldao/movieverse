import MainCard from "@/components/cards/MainCard";
import fetchData from "@/data/fetchData";
import type { Celebridad, Celebridades } from "@/types/fetchTypes";
import React from "react";
import { baseUrlTendencias } from "@/constants/constants";

export default async function Celebridades() {
  const url = `${baseUrlTendencias}/person/week`;
  const data = await fetchData<Celebridades>(url);

  return (
    <div className="main-content grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16">
      {data.results.map((tendencia: Celebridad) => (
        <MainCard
          key={tendencia.id}
          imagen={tendencia.profile_path || ""}
          nombre={tendencia.name}
          apariciones={tendencia.known_for}
          mediaType={"person"}
          id={tendencia.id}
        />
      ))}
    </div>
  );
}
