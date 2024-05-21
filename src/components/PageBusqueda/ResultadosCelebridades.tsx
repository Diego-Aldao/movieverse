import React from "react";
import CustomSection from "../containers/CustomSection";
import { Busqueda } from "@/types/fetchTypes";
import ContentCelebridad from "../cards/MainCard/ContentCelebridad";
import MainCard from "../cards/MainCard/MainCard";

interface Props {
  resultados: Busqueda[];
}

export default function ResultadosCelebridades({ resultados }: Props) {
  return (
    <CustomSection
      titulo="celebridades"
      noInlinePadding={true}
      titleCustomSizes="text-xl sm:text-2xl md:text-3xl lg:text-4xl "
    >
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-stretch content-stretch justify-stretch place-content-stretch">
        {resultados.map((celebridad) => (
          <MainCard
            key={celebridad.id}
            imagen={celebridad.profile_path || ""}
            mediaType={celebridad.media_type}
            id={celebridad.id}
            customSizes="min-h-[65vw] sm:min-h-[44vw] md:min-h-[32vw] lg:min-h-[265px] xl:min-h-[280px]"
          >
            <ContentCelebridad nombre={celebridad.name || ""} />
          </MainCard>
        ))}
      </div>
    </CustomSection>
  );
}
