"use client";
import React, { useEffect, useState } from "react";
import MainCard from "@/components/cards/MainCard/MainCard";
import Filtros from "@/components/PagesPeliculasSeries/Filtros/Filtros";
import ContenidoPrincipal from "@/components/containers/SecondaryPages/ContenidoPrincipal";
import MainSection from "@/components/containers/SecondaryPages/MainSection";
import { BASE_URL_DISCOVER_SERIES } from "@/constants/constants";
import ContentAudiovisual from "@/components/cards/MainCard/ContentAudiovisual";
import FetchDataClient from "@/services/fetchDataClient";
import type { Serie, Series } from "@/types/fetchTypes";
import SkeletonMainCard from "@/components/skeletons/cards/SkeletonMainCard";
import NoData from "@/components/errors/NoData";
import { useInView } from "react-intersection-observer";
import getMonthPlusSix from "@/utils/getMonthPlusSix";

export default function ClientPageSeries() {
  const fechaMaxima = getMonthPlusSix();
  const initialURL = `${BASE_URL_DISCOVER_SERIES}page=1&sort_by=popularity.desc&primary_release_date.lte=${fechaMaxima}&vote_average.gte=0&vote_average.lte=10&vote_count.gte=0&with_runtime.gte=0&with_runtime.lte=360`;
  const [urlFetch, setUrlFetch] = useState<string>(initialURL);
  const { data: series, loading } = FetchDataClient<Series>(urlFetch);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [currentSeries, setCurrentSeries] = useState<Serie[] | undefined>(
    undefined
  );

  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    let newCurrentSeries;
    if (!series) return;
    if (!currentSeries || series.page === 1) {
      newCurrentSeries = series.results;
    } else if (series.results) {
      newCurrentSeries = [...currentSeries, ...series.results];
    } else {
      newCurrentSeries = currentSeries;
    }
    setCurrentSeries(newCurrentSeries);
  }, [series]);

  useEffect(() => {
    if (!inView) return;
    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
  }, [inView]);

  return (
    <MainSection titulo="series">
      <Filtros
        setUrlFetch={setUrlFetch}
        pageNumber={pageNumber}
        mediaType="tv"
      />
      <ContenidoPrincipal>
        {loading && <SkeletonMainCard cantidad={20} />}
        {currentSeries && currentSeries.length >= 1 && (
          <>
            {currentSeries.map((serie) => (
              <MainCard
                imagen={serie.poster_path || ""}
                key={serie.id}
                id={serie.id}
                mediaType="tv"
                nombre={serie.name}
              >
                <ContentAudiovisual
                  valoracion={serie.vote_average}
                  voteCount={serie.vote_count}
                  mediaType="tv"
                  generos={serie.genre_ids}
                  nombre={serie.name}
                />
              </MainCard>
            ))}
            {series && pageNumber < series.total_pages && (
              <div
                ref={ref}
                className="w-full col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16"
              >
                <SkeletonMainCard cantidad={10} />
              </div>
            )}
          </>
        )}
        <>
          {currentSeries?.length === 0 && series?.results.length === 0 && (
            <NoData nombre="no se encontraron series" />
          )}
        </>
      </ContenidoPrincipal>
    </MainSection>
  );
}
