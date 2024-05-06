"use client";
import Media from "@/components/PageID/SeriesYPeliculas/Media/Media";
import Reparto from "@/components/PageID/SeriesYPeliculas/Reparto/Reparto";
import Hero from "@/components/PageID/SeriesYPeliculas/Hero/Hero";
import Redes from "@/components/PageID/SeriesYPeliculas/Aside/Redes/Redes";
import SubInfo from "@/components/PageID/SeriesYPeliculas/Aside/SubInfo/SubInfo";
import { useParams } from "next/navigation";
import FetchDataClient from "@/data/fetchDataClient";
import { BASE_URL_MOVIE_DETAIL } from "@/constants/constants";
import type { DetallePelicula } from "@/types/fetchTypes";
import Similares from "@/components/PageID/SeriesYPeliculas/Similares/Similares";
import SkeletonSubInfo from "@/components/skeletons/PagePeliculasSeries/SkeletonSubInfo";

export default function DetallePelicula() {
  const { id } = useParams();
  const { data: pelicula, loading } = FetchDataClient<DetallePelicula>(
    `${BASE_URL_MOVIE_DETAIL}${id}`
  );

  return (
    <main>
      <Hero pelicula={pelicula} loading={loading} />
      <section className="main-content px-4 md:px-8 lg:px-10 max-w-7xl mx-auto 2xl:px-0 pb-20 grid w-full gap-12 lg:grid-cols-[2.5fr,1fr] lg:gap-x-4 xl:gap-x-8">
        <Reparto id={id} />
        <Media id={id} />
        <Similares id={id} />
        <aside className="lg:row-start-1 lg:col-start-2 flex flex-col gap-8">
          <Redes id={id} />
          {pelicula ? (
            <SubInfo
              tituloOriginal={pelicula.original_title}
              estado={pelicula.status}
              idiomaOriginal={pelicula.original_language}
              presupuesto={pelicula.budget}
              ingresos={pelicula.revenue}
            />
          ) : (
            <SkeletonSubInfo />
          )}
        </aside>
      </section>
    </main>
  );
}
