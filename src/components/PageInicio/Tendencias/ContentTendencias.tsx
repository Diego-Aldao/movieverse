import { Tendencia, Tendencias } from "@/types/fetchTypes";
import React from "react";
import FetchDataClient from "@/data/fetchDataClient";
import MainCard from "@/components/cards/MainCard";
import SkeletonGridMainCards from "@/components/skeletons/SkeletonGridMainCards";

interface Props {
  url: string;
}

export default function ContentTendencias({ url }: Props) {
  const { data: tendencias, loading } = FetchDataClient<Tendencias>(url);
  return (
    <div className="main-content w-full min-h-[100vh] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16">
      {loading && <SkeletonGridMainCards />}
      {!loading &&
        tendencias &&
        tendencias.results.map((tendencia: Tendencia) => (
          <MainCard
            key={tendencia.id}
            imagen={tendencia.poster_path}
            nombre={tendencia.name || tendencia.title}
            generos={tendencia.genre_ids}
            valoracion={tendencia.vote_average}
            voteCount={tendencia.vote_count}
            mediaType={tendencia.media_type}
            id={tendencia.id}
          />
        ))}
    </div>
  );
}
