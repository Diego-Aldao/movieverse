"use client";
import { BASE_URL_SERIE_DETAIL } from "@/constants/constants";
import FetchDataClient from "@/data/fetchDataClient";
import { DetalleSeries } from "@/types/fetchTypes";
import { useParams } from "next/navigation";
import React from "react";
import Hero from "@/components/PageID/SeriesYPeliculas/Hero/NewHero";
import Reparto from "@/components/PageID/SeriesYPeliculas/Reparto/NewReparto";
import NewMedia from "@/components/PageID/SeriesYPeliculas/Media/Imagenes";
import Redes from "@/components/PageID/SeriesYPeliculas/Aside/Redes/Redes";
import SubInfo from "@/components/PageID/SeriesYPeliculas/Aside/SubInfo/SubInfo";
import Similares from "@/components/PageID/SeriesYPeliculas/Similares/Similares";
import ImagenesHero from "@/components/PageID/SeriesYPeliculas/Hero/ImagenesHero";
import HeaderHero from "@/components/PageID/SeriesYPeliculas/Hero/HeaderHero";
import MainInfoHero from "@/components/PageID/SeriesYPeliculas/Hero/MainInfoHero";
import SkeletonSeriesID from "@/components/skeletons/PageID/SkeletonSeriesID";

export default function SeriesID() {
  const { id } = useParams();

  const { data: serie, loading } = FetchDataClient<DetalleSeries>(
    `${BASE_URL_SERIE_DETAIL}${id}?append_to_response=aggregate_credits%2Ccontent_ratings%2Cexternal_ids%2Csimilar&language=es-MX`
  );
  return (
    <main>
      {loading && <SkeletonSeriesID />}
      {serie && (
        <>
          <Hero
            descripcion={serie.overview}
            imagenesHero={
              <ImagenesHero
                urlPoster={serie.poster_path}
                urlBackdrop={serie.backdrop_path}
              />
            }
          >
            <>
              <HeaderHero
                titulo={serie.name}
                tagline={serie.tagline}
                votoPromedio={serie.vote_average}
                cantidadDeVotos={serie.vote_count}
              />
              <MainInfoHero
                generos={serie.genres}
                estreno={serie.first_air_date}
                duracion={serie.episode_run_time}
                edadMinima={serie.content_ratings.results[0]}
              />
            </>
          </Hero>
          <section className="main-content px-4 md:px-8 lg:px-10 max-w-7xl mx-auto 2xl:px-0 pb-20 grid w-full gap-12 lg:grid-cols-[2.5fr,1fr] lg:gap-x-4 xl:gap-x-8">
            <Reparto cast={serie.aggregate_credits.cast} />
            <NewMedia
              id={id}
              idiomaOriginal={serie.original_language}
              mediaType="serie"
            />
            <Similares similares={serie.similar} />
            <aside className="lg:row-start-1 lg:col-start-2 flex flex-col gap-8">
              <Redes id={id} />
              <SubInfo
                tituloOriginal={serie.original_name}
                estado={serie.status}
                idiomaOriginal={serie.original_language}
                tipoDeSerie={serie.type}
                esSerie={true}
              />
            </aside>
          </section>
        </>
      )}
    </main>
  );
}
