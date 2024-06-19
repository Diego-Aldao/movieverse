"use client";
import React, { useEffect, useState } from "react";
import {
  BASE_URL_TOP_SERIES,
  BASE_URL_IMAGES,
  TAMAÑOS_IMAGENES,
} from "@/constants/constants";
import { Serie, Series } from "@/types/fetchTypes";
import HorizontalCard from "@/components/cards/HorizontalCard";
import MiniCard from "@/components/cards/MiniCard";
import FetchDataClient from "@/services/fetchDataClient";
import SkeletonMejoresSeries from "@/components/skeletons/PageInicio/SkeletonMejoresSeries";
import useSize from "@/hooks/useSize";

export default function MejoresSeries() {
  const { data: series, loading } =
    FetchDataClient<Series>(BASE_URL_TOP_SERIES);

  const [currentSeries, setCurrentSeries] = useState<Serie[]>();
  const [detailedSerie, setDetailedSerie] = useState<Serie>();

  const windowDimensions = useSize();

  useEffect(() => {
    if (!series) return;
    const seriesFiltradas = series.results.filter((serie) => serie.overview);
    setCurrentSeries(seriesFiltradas);
    setDetailedSerie(seriesFiltradas[0]);
  }, [series]);

  const imagenBackground = `${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${detailedSerie?.backdrop_path}`;

  const divStyle = {
    backgroundImage: `url(${imagenBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleClick = (id: number) => {
    if (!currentSeries) return;
    const serieClickeada = currentSeries.filter((serie) => serie.id === id);
    setDetailedSerie(serieClickeada[0]);
  };

  return (
    <>
      {loading && <SkeletonMejoresSeries cantidad={20} />}
      {currentSeries && (
        <>
          <span id="serie-detallada" className=" absolute top-0 left-0 "></span>
          {detailedSerie && (
            <div
              style={divStyle}
              className={`contenedor-horizontal-card lg:py-16 lg:rounded-md  bg-cover bg-no-repeat hidden sm:flex justify-center after:inset-0 after:absolute relative after: bg-main-black lg:after:bg-[#242526f1] after:bg-main-black`}
            >
              <HorizontalCard item={detailedSerie} />
            </div>
          )}

          <div className="contenedor-mini-card gap-5 w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {currentSeries.slice(0, 15).map((mini) => (
              <MiniCard
                noLink={windowDimensions.width <= 639}
                key={mini.id}
                nombre={mini.name}
                pathImagen={mini.backdrop_path}
                id={mini.id}
                handleClick={handleClick}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
