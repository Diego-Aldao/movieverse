"use client";
import React, { useEffect, useState } from "react";
import Filtros from "@/components/PagesPeliculasSeries/Filtros/Filtros";
import ContenidoPrincipal from "@/components/containers/SecondaryPages/ContenidoPrincipal";
import MainSection from "@/components/containers/SecondaryPages/MainSection";
import { BASE_URL_DISCOVER_MOVIE } from "@/constants/constants";
import type { Pelicula, Peliculas } from "@/types/fetchTypes";
import FetchDataClient from "@/data/fetchDataClient";
import SkeletonMainCard from "@/components/skeletons/cards/SkeletonMainCard";
import MainCard from "@/components/cards/MainCard/MainCard";
import ContentAudiovisual from "@/components/cards/MainCard/ContentAudiovisual";
import { useInView } from "react-intersection-observer";
import NoData from "@/components/errors/NoData";

export default function Peliculas() {
  const initialURL = `${BASE_URL_DISCOVER_MOVIE}&page=1&sort_by=popularity_desc`;
  const [urlFetch, setUrlFetch] = useState<string>(initialURL);
  const { data: peliculas, loading } = FetchDataClient<Peliculas>(urlFetch);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [currentPeliculas, setCurrentPeliculas] = useState<
    Pelicula[] | undefined
  >(undefined);
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    let newCurrentPeliculas;
    if (!peliculas) return;
    if (!currentPeliculas || peliculas.page === 1) {
      newCurrentPeliculas = peliculas.results;
    } else if (peliculas.results) {
      newCurrentPeliculas = [...currentPeliculas, ...peliculas.results];
    } else {
      newCurrentPeliculas = currentPeliculas;
    }
    setCurrentPeliculas(newCurrentPeliculas);
  }, [peliculas]);

  useEffect(() => {
    if (!inView) return;
    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
  }, [inView]);

  return (
    <MainSection titulo="peliculas">
      <Filtros
        setUrlFetch={setUrlFetch}
        pageNumber={pageNumber}
        mediaType="movie"
      />
      <ContenidoPrincipal>
        {loading && <SkeletonMainCard cantidad={20} />}
        {currentPeliculas && currentPeliculas.length >= 1 && (
          <>
            {currentPeliculas.map((pelicula) => (
              <MainCard
                imagen={pelicula.poster_path}
                key={pelicula.id}
                mediaType={"movie"}
                id={pelicula.id}
              >
                <ContentAudiovisual
                  mediaType={"movie"}
                  valoracion={pelicula.vote_average}
                  voteCount={pelicula.vote_count}
                  generos={pelicula.genre_ids}
                  nombre={pelicula.title}
                />
              </MainCard>
            ))}
            {peliculas && pageNumber < peliculas.total_pages && (
              <div
                ref={ref}
                className="w-full col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16"
              >
                <SkeletonMainCard cantidad={10} />
              </div>
            )}
            {(!currentPeliculas || currentPeliculas.length === 0) && <NoData />}
          </>
        )}
      </ContenidoPrincipal>
    </MainSection>
  );
}