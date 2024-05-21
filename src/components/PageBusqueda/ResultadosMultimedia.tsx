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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resultados.map((resultado) => (
          <MiniCard
            pathImagen={resultado.backdrop_path || resultado.poster_path}
            nombre={resultado.title || resultado.name || ""}
            hasButton={true}
            destino={`/${media_type}/${resultado.id}`}
            key={resultado.id}
            customStyles="h-[170px] max-h-[170px] md:max-w-[400px]"
          >
            <>
              <Generos
                tipo="movie"
                listaGenerosNumericos={resultado.genre_ids || []}
                cantidad={2}
                stylesItem="text-xs"
              />
              <p className="line-clamp-2 text-xs">{resultado.overview}</p>
            </>
          </MiniCard>
        ))}
      </div>
    </CustomSection>
  );
}
