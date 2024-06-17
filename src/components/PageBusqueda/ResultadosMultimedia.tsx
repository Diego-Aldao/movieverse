import { Busqueda } from "@/types/fetchTypes";
import React from "react";
import MiniCard from "../cards/MiniCard";
import Generos from "../Generos";
import CustomSection from "../containers/CustomSection";

interface Props {
  resultados: Busqueda[];
  media_type: string;
}

export default function ResultadosMultimedia({
  resultados,
  media_type,
}: Props) {
  return (
    <CustomSection
      titulo={media_type}
      noInlinePadding={true}
      titleCustomSizes="text-xl sm:text-2xl md:text-3xl lg:text-4xl "
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {resultados.map((resultado) => (
          <MiniCard
            key={resultado.id}
            nombre={resultado.name || resultado.title || ""}
            id={resultado.id}
            pathImagen={resultado.backdrop_path || ""}
            media_type={
              resultado.media_type === "movie" ? "peliculas" : "series"
            }
            simple={true}
            customStyles="h-[140px] max-h-[140px] md:max-w-[400px]"
          >
            <Generos
              tipo="movie"
              listaGenerosNumericos={resultado.genre_ids || []}
              cantidad={2}
              stylesItem="text-xs"
            />
          </MiniCard>
        ))}
      </div>
    </CustomSection>
  );
}
