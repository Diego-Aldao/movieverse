"use client";
import React, { useEffect, useState } from "react";
import CustomSection from "../containers/CustomSection";
import Filtros from "./Filtros/Filtros";
import useColeccion from "@/hooks/useColeccion";
import { Coleccion } from "@/types/localTypes";
import MainCard from "../cards/MainCard/MainCard";
import NoData from "../errors/NoData";

export default function Favoritos() {
  const { favoritos } = useColeccion();

  const [currentFavoritos, setCurrentFavoritos] = useState<
    Coleccion[] | undefined
  >(favoritos);

  useEffect(() => {
    setCurrentFavoritos(favoritos);
  }, [favoritos]);

  return (
    <CustomSection
      titulo="tus favoritos"
      noInlinePadding={true}
      titleCustomSizes="text-2xl lg:text-4xl md:text-3xl"
      noBlockMargin={true}
    >
      <>
        {favoritos && favoritos.length >= 1 ? (
          <>
            <Filtros
              setCurrentColeccion={setCurrentFavoritos}
              coleccion={favoritos}
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 min-h-[65vw] sm:min-h-[45vw] md:min-h-[32vw] lg:min-h-[23vw] xl:min-h-[235px] 2xl:min-h-[250px]">
              {currentFavoritos?.map((favorito) => (
                <MainCard
                  nombre={favorito.nombre}
                  key={favorito.id}
                  imagen={favorito.img_path}
                  mediaType={favorito.media_type}
                  id={favorito.id}
                  customSizes="min-h-[65vw] sm:min-h-[44vw] md:min-h-[32vw] lg:min-h-[229px] xl:min-h-fit h-fit"
                >
                  <h2 className="relative z-[1] line-clamp-1">
                    {favorito.nombre}
                  </h2>
                </MainCard>
              ))}
            </div>
          </>
        ) : (
          <NoData
            nombre="no tienes favoritos"
            customStyles="min-h-[65vw] sm:min-h-[calc(45vw+58px)] md:min-h-[calc(32vw+58px)] lg:min-h-[calc(23vw+58px)] xl:min-h-[293px] 2xl:min-h-[308px]"
          />
        )}
      </>
    </CustomSection>
  );
}
