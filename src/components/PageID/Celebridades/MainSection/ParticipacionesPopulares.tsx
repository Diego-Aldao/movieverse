import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import { CombinedCredits } from "@/types/fetchTypes";
import {
  filtrarSelfs,
  ordenarPorAño,
  ordenarPorPopularidad,
  quitarParticipacionesSinImagen,
} from "@/utils/UtilsParticipaciones";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  conocidoPor: string;
  participaciones: CombinedCredits;
}

export default function ParticipacionesPopulares({
  conocidoPor,
  participaciones,
}: Props) {
  const ordenarParticipaciones = (conocidoPor: string) => {
    let participacionesOrdenadas;
    participacionesOrdenadas =
      conocidoPor === "Acting" ? participaciones.cast : participaciones.crew;
    participacionesOrdenadas = filtrarSelfs(participacionesOrdenadas);
    participacionesOrdenadas = ordenarPorPopularidad(participacionesOrdenadas);
    participacionesOrdenadas = ordenarPorAño(participacionesOrdenadas);
    participacionesOrdenadas = quitarParticipacionesSinImagen(
      participacionesOrdenadas
    );
    return participacionesOrdenadas;
  };

  const mediaTypes: { [key: string]: string } = {
    movie: "peliculas",
    tv: "series",
    person: "celebridades",
  };

  return (
    <div className="papelas-mas-conocidos flex flex-col gap-2 lg:min-h-[275px] xl:min-h-[360px]">
      <h2 className="text-xl md:text-2xl font-semibold capitalize">
        participaciones populares
      </h2>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {ordenarParticipaciones(conocidoPor)
          .slice(0, 12)
          .map((participacion) => (
            <Link
              href={`/${mediaTypes[participacion.media_type]}/${
                participacion.id
              }`}
              className="imagen h-[30vw] sm:h-[15vw] md:h-[10vw] lg:h-fit flex items-center justify-center relative after:absolute after:inset-0 after:bg-[#10101096] after:z-[1] rounded-md overflow-hidden"
              key={participacion.id}
            >
              <span className="absolute z-[2] w-full text-center line-clamp-1 text-lg sm:text-base px-1 md:text-sm xl:text-base">
                {"title" in participacion
                  ? participacion.title
                  : participacion.name}
              </span>
              <Image
                src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${participacion.backdrop_path}`}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
