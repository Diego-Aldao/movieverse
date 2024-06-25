"use client";
import React, { useEffect, useState } from "react";
import MainSection from "@/components/containers/SecondaryPages/MainSection";
import MainCard from "@/components/cards/MainCard/MainCard";
import ContentCelebridad from "@/components/cards/MainCard/ContentCelebridad";
import { BASE_URL_POPULAR_PEOPLE } from "@/constants/constants";
import type { Celebridad, Celebridades } from "@/types/fetchTypes";
import FetchDataClient from "@/services/fetchDataClient";
import SkeletonMainCard from "@/components/skeletons/cards/SkeletonMainCard";
import { useInView } from "react-intersection-observer";

export default function ClientPageContent() {
  const initialURL = `${BASE_URL_POPULAR_PEOPLE}page=1&include_adult=false`;
  const [urlFetch, setUrlFetch] = useState<string>(initialURL);
  const { data: celebridades, loading } =
    FetchDataClient<Celebridades>(urlFetch);
  const [currentCelebridades, setCurrentCelebridades] = useState<
    Celebridad[] | undefined
  >(undefined);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    let newCurrentCelebridades;
    if (!celebridades) return;
    if (!currentCelebridades || celebridades.page === 1) {
      newCurrentCelebridades = celebridades.results;
    } else if (celebridades.results) {
      newCurrentCelebridades = [
        ...currentCelebridades,
        ...celebridades.results,
      ];
    } else {
      newCurrentCelebridades = currentCelebridades;
    }
    setCurrentCelebridades(newCurrentCelebridades);
  }, [celebridades]);

  useEffect(() => {
    if (!inView) return;
    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
    setUrlFetch(
      `${BASE_URL_POPULAR_PEOPLE}page=${newPageNumber}&include_adult=false`
    );
  }, [inView]);

  return (
    <MainSection titulo="celebridades populares">
      <section className="grid grid-cols-2 gap-2 gap-y-8 sm:gap-x-4 sm:gap-y-12 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {loading && <SkeletonMainCard cantidad={20} />}
        {currentCelebridades && currentCelebridades.length >= 1 && (
          <>
            {currentCelebridades.map((celebridad) => (
              <MainCard
                nombre={celebridad.name}
                imagen={celebridad.profile_path || ""}
                key={celebridad.id}
                mediaType="person"
                id={celebridad.id}
              >
                <ContentCelebridad
                  nombre={celebridad.name}
                  apariciones={celebridad.known_for}
                />
              </MainCard>
            ))}
            {celebridades && pageNumber < celebridades.total_pages && (
              <div
                ref={ref}
                className="w-full col-span-full grid grid-cols-2 gap-2 gap-y-8 sm:gap-x-4 sm:gap-y-12 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
              >
                <SkeletonMainCard cantidad={10} />
              </div>
            )}
          </>
        )}
      </section>
    </MainSection>
  );
}
