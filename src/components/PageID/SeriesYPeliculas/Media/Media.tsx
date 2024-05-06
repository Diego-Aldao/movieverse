"use client";
import React, { useEffect, useState } from "react";
import MediaContent from "./MediaContent";
import Videos from "./Videos";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";
import Filtros from "./Filtros";
import FetchDataClient from "@/data/fetchDataClient";
import { BASE_URL_MOVIE_DETAIL } from "@/constants/constants";
import { ImagenesMedia } from "@/types/fetchTypes";
import SkeletonMedia from "@/components/skeletons/PagePeliculasSeries/SkeletonMedia";

interface Props {
  id: string | string[];
}

export default function Media({ id }: Props) {
  const { data: imagenes, loading } = FetchDataClient<ImagenesMedia>(
    `${BASE_URL_MOVIE_DETAIL}${id}/images`
  );

  const [currentMedia, setCurrentMedia] = useState<string>("wallpapers");
  const [imagenesMedia, setImagenesMedia] = useState<string[]>([]);

  useEffect(() => {
    if (!imagenes) return;
    const arrayDeImagenes = imagenes.backdrops.map(
      (imagen) => imagen.file_path
    );
    setImagenesMedia(arrayDeImagenes);
  }, [imagenes]);

  return (
    <>
      {loading && <SkeletonMedia />}
      {imagenes && imagenesMedia.length >= 1 && (
        <CustomSection
          titulo="media"
          headerChildren={
            <Filtros
              setCurrentMedia={setCurrentMedia}
              currentMedia={currentMedia}
              setImagenesMedia={setImagenesMedia}
              imagenes={imagenes}
            />
          }
        >
          {currentMedia === "videos" ? (
            <Videos />
          ) : (
            <MediaContent imagenesUrls={imagenesMedia} tipo={currentMedia} />
          )}
        </CustomSection>
      )}
    </>
  );
}
