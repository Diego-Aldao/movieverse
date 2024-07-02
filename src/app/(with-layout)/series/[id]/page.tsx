import { BASE_URL_SERIE_DETAIL } from "@/constants/constants";
import { DetalleSeries } from "@/types/fetchTypes";
import React, { Suspense } from "react";
import Hero from "@/components/PageID/SeriesYPeliculas/Hero/Hero";
import Reparto from "@/components/PageID/SeriesYPeliculas/Reparto/Reparto";
import Media from "@/components/PageID/SeriesYPeliculas/Media/Media";
import Redes from "@/components/PageID/SeriesYPeliculas/Aside/Redes/Redes";
import SubInfo from "@/components/PageID/SeriesYPeliculas/Aside/SubInfo/SubInfo";
import Similares from "@/components/PageID/SeriesYPeliculas/Similares/Similares";
import ImagenesHero from "@/components/PageID/SeriesYPeliculas/Hero/ImagenesHero";
import HeaderHero from "@/components/PageID/SeriesYPeliculas/Hero/HeaderHero";
import MainInfoHero from "@/components/PageID/SeriesYPeliculas/Hero/MainInfoHero";
import fetchData from "@/services/fetchData";
import SkeletonRedes from "@/components/skeletons/PagePeliculasSeries/SkeletonRedes";
import { Metadata } from "next";
import UltimaTemporada from "@/components/PageID/Series/UltimaTemporada";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  const serie = await fetchData<DetalleSeries>(
    `${BASE_URL_SERIE_DETAIL}${id}?append_to_response=aggregate_credits%2Ccontent_ratings%2Cexternal_ids%2Csimilar&language=es-MX`
  );

  return {
    title: `${serie.name} — Movieverse`,
    description: serie.overview,
  };
}

export default async function SeriesID({ params }: Props) {
  const { id } = params;
  const serie = await fetchData<DetalleSeries>(
    `${BASE_URL_SERIE_DETAIL}${id}?append_to_response=aggregate_credits%2Ccontent_ratings%2Cexternal_ids%2Csimilar&language=es-MX`
  );
  return (
    <main className="min-h-screen">
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
            id={serie.id}
            poster={serie.poster_path}
            media_type="tv"
          />
          <MainInfoHero
            generos={serie.genres}
            estreno={serie.first_air_date}
            duracion={serie.episode_run_time[0]}
            edadMinima={serie.content_ratings.results[0]}
          />
        </>
      </Hero>
      <section className="main-content px-4 md:px-8 lg:px-10 max-w-7xl mx-auto 2xl:px-0 pb-20 grid w-full gap-12 lg:grid-cols-[2.5fr,1fr] lg:gap-x-4 xl:gap-x-8">
        <Reparto cast={serie.aggregate_credits.cast} />
        <UltimaTemporada
          ultimoEpisodio={serie.last_episode_to_air}
          proximoEpisodio={serie.next_episode_to_air}
          numeroDeEpisodios={serie.number_of_episodes}
          temporadas={serie.seasons}
          numeroDeTemporadas={serie.number_of_seasons}
          enProduccion={serie.in_production}
          banner={serie.backdrop_path}
          id={id}
          nombre={serie.name}
        />
        <Media
          id={id}
          idiomaOriginal={serie.original_language}
          mediaType="serie"
          altImagen={serie.name}
        />
        <Similares similares={serie.similar} mediaType={"tv"} />
        <aside className="lg:row-start-1 lg:col-start-2 flex flex-col gap-8">
          <Suspense fallback={<SkeletonRedes />}>
            <Redes id={id} />
          </Suspense>
          <SubInfo
            tituloOriginal={serie.original_name}
            estado={serie.status}
            idiomaOriginal={serie.original_language}
            tipoDeSerie={serie.type}
            esSerie={true}
          />
        </aside>
      </section>
    </main>
  );
}
