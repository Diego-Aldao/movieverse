import React from "react";
import { BASE_URL_PERSON_DETAIL } from "@/constants/constants";
import { DetalleCelebridad } from "@/types/fetchTypes";
import fetchData from "@/services/fetchData";
import Hero from "@/components/PageID/Celebridades/Hero";
import MainInfo from "@/components/PageID/Celebridades/Aside/MainInfo";
import Redes from "@/components/PageID/Celebridades/Aside/Redes";
import SubInfo from "@/components/PageID/Celebridades/Aside/SubInfo";
import Biografia from "@/components/PageID/Celebridades/MainSection/Biografia";
import ParticipacionesPopulares from "@/components/PageID/Celebridades/MainSection/ParticipacionesPopulares";
import TableRoles from "@/components/PageID/Celebridades/MainSection/Tablas/TableRoles";
import TablesCrew from "@/components/PageID/Celebridades/MainSection/Tablas/TablesCrew";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  const celebridad = await fetchData<DetalleCelebridad>(
    `${BASE_URL_PERSON_DETAIL}${id}?append_to_response=external_ids%2Cimages%2Ccombined_credits&language=es-MX`
  );

  return {
    title: `${celebridad.name} — Movieverse`,
    description: celebridad.biography,
  };
}

export default async function CelebridadId({ params }: Props) {
  const { id } = params;
  const celebridad = await fetchData<DetalleCelebridad>(
    `${BASE_URL_PERSON_DETAIL}${id}?append_to_response=external_ids%2Cimages%2Ccombined_credits&language=es-MX`
  );
  return (
    <>
      <Hero imagenes={celebridad.images} />
      <main className="sm:pt-24 lg:pt-48 grid gap-12 md:grid-cols-[250px,_1fr] lg:grid-cols-[300px,_1fr] xl:grid-cols-[350px,_1fr] md:gap-x-4 md:px-8 lg:px-10 max-w-7xl mx-auto 2xl:px-0 relative pb-20">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[250px,1fr] md:flex sm:px-4 md:px-0">
          <MainInfo
            imageSrc={celebridad.profile_path}
            nombre={celebridad.name}
            conocidoPor={celebridad.known_for_department}
          >
            <Redes redes={celebridad.external_ids} />
          </MainInfo>
          <SubInfo
            deceso={celebridad.deathday}
            nombre={celebridad.name}
            conocidoPor={celebridad.known_for_department}
            nacimiento={celebridad.birthday}
            lugarDeNacimiento={celebridad.place_of_birth}
            genero={celebridad.gender}
            tambienConocidoComo={celebridad.also_known_as}
            cantidadDeParticipaciones={celebridad.combined_credits.cast.length}
          />
        </div>
        <div className="w-full px-4 md:px-0 flex flex-col gap-8">
          <header className="md:flex flex-col gap-2 hidden">
            <h1 className="text-4xl font-semibold">{celebridad.name}</h1>
            <span className="">{celebridad.known_for_department}</span>
          </header>
          <Biografia biografia={celebridad.biography} />
          <ParticipacionesPopulares
            conocidoPor={celebridad.known_for_department}
            participaciones={celebridad.combined_credits}
          />
          {celebridad.combined_credits.cast.length >= 1 && (
            <TableRoles
              titulo="interpretaciones"
              participaciones={celebridad.combined_credits.cast}
            />
          )}
          {celebridad.combined_credits.crew.length >= 1 && (
            <TablesCrew crew={celebridad.combined_credits.crew} />
          )}
        </div>
      </main>
    </>
  );
}
