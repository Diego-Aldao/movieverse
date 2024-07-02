import CustomImage from "@/components/CustomImage";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import { CombinedCredits } from "@/types/fetchTypes";
import { ordenarParticipaciones } from "@/utils/UtilsParticipaciones";
import Link from "next/link";
import React from "react";
import errorImage from "@/assets/errorImageBackdropPequeño.webp";

interface Props {
  conocidoPor: string;
  participaciones: CombinedCredits;
}

export default function ParticipacionesPopulares({
  conocidoPor,
  participaciones,
}: Props) {
  const selectedParticipacion =
    conocidoPor === "Acting" ? participaciones.cast : participaciones.crew;
  const participacionesOrdenadas = ordenarParticipaciones(
    selectedParticipacion
  );

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
        {participacionesOrdenadas.slice(0, 12).map((participacion) => (
          <Link
            href={`/${mediaTypes[participacion.media_type]}/${
              participacion.id
            }`}
            className="group h-[30vw] sm:h-[15vw] md:h-[10vw] relative lg:h-fit lg:min-h-[80px] xl:min-h-[110px] 2xl:min-h-[120px] w-full flex items-center justify-center rounded-md overflow-hidden bg-secondary-black"
            key={participacion.id}
          >
            <span className="absolute z-[2] w-full text-center line-clamp-1 text-lg sm:text-base px-1 md:text-sm xl:text-base">
              {"title" in participacion
                ? participacion.title
                : participacion.name}
            </span>
            <div className="relative after:absolute after:inset-0 after:bg-main-black/75 after:z-[1] border border-transparent group-hover:border-secondary-white/25 group-hover:after:bg-main-black/65 transition-[border-color,opacity] bg-secondary-black w-full h-full rounded-md overflow-hidden">
              <CustomImage
                src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.posterPequeño}${participacion.backdrop_path}`}
                alt={participacion.title || participacion.name || ""}
                errorImage={errorImage}
                triggerOnce={true}
                unoptimized={true}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
