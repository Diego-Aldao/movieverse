import Media from "@/components/PageID/SeriesYPeliculas/Media/Media";
import Reparto from "@/components/PageID/SeriesYPeliculas/Reparto/Reparto";
import Hero from "@/components/PageID/SeriesYPeliculas/Hero/Hero";
import Redes from "@/components/PageID/SeriesYPeliculas/Aside/Redes/Redes";
import SubInfo from "@/components/PageID/SeriesYPeliculas/Aside/SubInfo/SubInfo";
import { BASE_URL_MOVIE_DETAIL } from "@/constants/constants";
import type { DetallePeliculas } from "@/types/fetchTypes";
import Similares from "@/components/PageID/SeriesYPeliculas/Similares/Similares";

import ImagenesHero from "@/components/PageID/SeriesYPeliculas/Hero/ImagenesHero";
import HeaderHero from "@/components/PageID/SeriesYPeliculas/Hero/HeaderHero";
import MainInfoHero from "@/components/PageID/SeriesYPeliculas/Hero/MainInfoHero";
import fetchData from "@/services/fetchData";
import { Suspense } from "react";
import SkeletonRedes from "@/components/skeletons/PagePeliculasSeries/SkeletonRedes";
import ScrollToTop from "@/components/ScrollToTop";

export default async function DetallePelicula({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const pelicula = await fetchData<DetallePeliculas>(
    `${BASE_URL_MOVIE_DETAIL}${id}?append_to_response=credits%2Cexternal_ids%2Csimilar&language=es-MX`
  );

  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Hero
        descripcion={pelicula.overview}
        imagenesHero={
          <ImagenesHero
            urlPoster={pelicula.poster_path}
            urlBackdrop={pelicula.backdrop_path}
          />
        }
      >
        <>
          <HeaderHero
            titulo={pelicula.title}
            tagline={pelicula.tagline}
            votoPromedio={pelicula.vote_average}
            cantidadDeVotos={pelicula.vote_count}
            id={pelicula.id}
            media_type="movie"
            poster={pelicula.poster_path}
          />
          <MainInfoHero
            generos={pelicula.genres}
            estreno={pelicula.release_date}
            duracion={pelicula.runtime}
          />
        </>
      </Hero>
      <section className="main-content px-4 md:px-8 lg:px-10 max-w-7xl mx-auto 2xl:px-0 grid w-full gap-12 lg:grid-cols-[2.5fr,1fr] lg:gap-x-4 xl:gap-x-8">
        <Reparto cast={pelicula.credits.cast} />
        <Media
          id={id}
          idiomaOriginal={pelicula.original_language}
          mediaType="movie"
        />
        <Similares similares={pelicula.similar} mediaType="movie" />
        <aside className="lg:row-start-1 lg:col-start-2 flex flex-col gap-8">
          <Suspense fallback={<SkeletonRedes />}>
            <Redes id={id} />
          </Suspense>
          <SubInfo
            tituloOriginal={pelicula.original_title}
            estado={pelicula.status}
            idiomaOriginal={pelicula.original_language}
            presupuesto={pelicula.budget}
            ingresos={pelicula.revenue}
          />
        </aside>
      </section>
    </main>
  );
}
