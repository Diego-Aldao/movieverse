"use client";
import React from "react";
import { BASE_URL_PERSON_DETAIL } from "@/constants/constants";
import { DetalleCelebridad } from "@/types/fetchTypes";
import { useParams } from "next/navigation";
import FetchDataClient from "@/data/fetchDataClient";
import Hero from "@/components/PageDetalleCelebridad/Hero";
import MainInfo from "@/components/PageDetalleCelebridad/Aside/MainInfo";
import Redes from "@/components/PageDetalleCelebridad/Aside/Redes";
import SubInfo from "@/components/PageDetalleCelebridad/Aside/SubInfo";
import Biografia from "@/components/PageDetalleCelebridad/MainSection/Biografia";
import ParticipacionesPopulares from "@/components/PageDetalleCelebridad/MainSection/ParticipacionesPopulares";
import Table from "@/components/PageDetalleCelebridad/MainSection/Table";
import SkeletonPageCelebridades from "@/components/skeletons/PageCelebridades/SkeletonPageCelebridades";

export default function CelebridadId() {
  const { id } = useParams();
  const { data: celebridad, loading } = FetchDataClient<DetalleCelebridad>(
    `${BASE_URL_PERSON_DETAIL}${id}?append_to_response=external_ids%2Cimages%2Ccombined_credits&language=es-MX`
  );

  return (
    <>
      {loading && <SkeletonPageCelebridades />}
      {celebridad && (
        <>
          <Hero imagenes={celebridad.images} />
          <main className="sm:pt-24 lg:pt-48 grid gap-12 md:grid-cols-[250px,_1fr] lg:grid-cols-[300px,_1fr] xl:grid-cols-[350px,_1fr] md:gap-x-4 md:px-8 lg:px-10 max-w-7xl mx-auto 2xl:px-0 relative">
            <div className="later-aside flex flex-col gap-8 sm:grid sm:grid-cols-[250px,1fr] md:flex sm:px-4 md:px-0">
              <MainInfo
                imageSrc={celebridad.profile_path}
                nombre={celebridad.name}
                conocidoPor={celebridad.known_for_department}
              >
                <Redes redes={celebridad?.external_ids} />
              </MainInfo>
              <SubInfo
                deceso={celebridad.deathday}
                nombre={celebridad.name}
                conocidoPor={celebridad.known_for_department}
                nacimiento={celebridad.birthday}
                lugarDeNacimiento={celebridad.place_of_birth}
                genero={celebridad.gender}
                tambienConocidoComo={celebridad.also_known_as}
                cantidadDeParticipaciones={
                  celebridad.combined_credits.cast.length
                }
              />
            </div>
            <div className="later-main-content w-full px-4 md:px-0 flex flex-col gap-8">
              <header className="md:flex flex-col gap-2 hidden">
                <h1 className="text-4xl font-semibold">{celebridad.name}</h1>
                <span className="">{celebridad.known_for_department}</span>
              </header>
              <Biografia biografia={celebridad.biography} />
              <ParticipacionesPopulares
                conocidoPor={celebridad.known_for_department}
                participaciones={celebridad.combined_credits}
              />
              <Table
                titulo="interpretaciones"
                participaciones={celebridad.combined_credits}
                tipo="interpretacion"
              />
              <Table
                titulo="interpretaciones"
                participaciones={celebridad.combined_credits}
                tipo="crew"
              />
            </div>
          </main>
        </>
      )}
    </>
  );
}
