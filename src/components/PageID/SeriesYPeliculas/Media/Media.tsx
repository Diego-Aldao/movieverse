"use client";
import React, { useEffect, useState } from "react";
import MediaContent from "./MediaContent";
import Videos from "./Videos";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";
import Filtros from "./Filtros";
import FetchDataClient from "@/data/fetchDataClient";
import {
  BASE_URL_MOVIE_DETAIL,
  BASE_URL_SERIE_DETAIL,
} from "@/constants/constants";
import { ImagenesMedia } from "@/types/fetchTypes";
import SkeletonMedia from "@/components/skeletons/PagePeliculasSeries/SkeletonMedia";

interface Props {
  idiomaOriginal: string;
  id: string | string[];
  mediaType: string;
}

export default function NewMedia({ id, idiomaOriginal, mediaType }: Props) {
  const BASE_URL =
    mediaType === "serie" ? BASE_URL_SERIE_DETAIL : BASE_URL_MOVIE_DETAIL;
  const { data: imagenes, loading } = FetchDataClient<ImagenesMedia>(
    `${BASE_URL}${id}/images?include_image_language=${idiomaOriginal}%2Ces%2Cnull`
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
          customStyles="lg-col-start-1"
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
            <Videos id={id} baseUrl={BASE_URL} />
          ) : (
            <MediaContent imagenesUrls={imagenesMedia} tipo={currentMedia} />
          )}
        </CustomSection>
      )}
    </>
  );
}
