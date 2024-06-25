import React, { useEffect, useState } from "react";
import type { Videos } from "@/types/fetchTypes";
import FetchDataClient from "@/services/fetchDataClient";
import SkeletonVideos from "@/components/skeletons/PagePeliculasSeries/SkeletonVideos";
import { MiniaturaMedia } from "@/types/localTypes";
import CustomImage from "@/components/CustomImage";
import errorImage from "@/assets/errorImagebackdrop.webp";

interface Props {
  id: string | string[];
  baseUrl: string;
}

export default function Videos({ id, baseUrl }: Props) {
  const { data: videos, loading } = FetchDataClient<Videos>(
    `${baseUrl}${id}/videos`
  );

  const [currentMiniaturas, setCurrentMiniaturas] = useState<
    MiniaturaMedia[] | undefined
  >(undefined);
  const [currentVideo, setCurrentVideo] = useState<MiniaturaMedia | undefined>(
    undefined
  );
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!videos) return;
    const miniaturas: MiniaturaMedia[] = videos.results
      .slice(0, 12)
      .map((video) => {
        return {
          id: video.id,
          key: video.key,
          imagenPequeña: `http://i3.ytimg.com/vi/${video.key}/hqdefault.jpg`,
          imagenGrande: `http://i3.ytimg.com/vi/${video.key}/maxresdefault.jpg`,
          nombre: video.name,
        };
      });
    setCurrentMiniaturas(miniaturas);
    setCurrentVideo(miniaturas[0]);
    setCurrentVideo;
  }, [videos]);

  const handleOnClick = (miniatura: MiniaturaMedia) => {
    setCurrentVideo(miniatura);
  };

  const handleToggle = () => {
    setModalVisible((modalVisible) => !modalVisible);
  };

  return (
    <div className="flex flex-col gap-8">
      {loading && <SkeletonVideos />}
      {videos && currentVideo && currentMiniaturas && (
        <>
          <div className="current-video w-full flex flex-col gap-4">
            <h3 className="text-center w-full md:text-lg">
              {currentVideo.nombre}
            </h3>
            <div className="imagen border rounded-sm overflow-hidden border-secondary-white flex items-center justify-center relative w-full h-full min-h-[200px] sm:min-h-[450px] md:min-h-[400px] xl:min-h-[460px]">
              {modalVisible && (
                <div className="w-full h-full absolute top-0 left-0 z-40">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${currentVideo.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <button
                className="btn-play bg-[#101010a2] z-[2] absolute px-5 py-1 text-xs rounded-full border border-secondary-white text-main-white uppercase flex gap-2 items-center md:text-base"
                onClick={handleToggle}
              >
                <span>ver video</span>
                <span className="icon-[mdi--play-circle-outline] w-4 h-4 md:w-8 md:h-8"></span>
              </button>
              <CustomImage
                src={currentVideo.imagenPequeña}
                alt={currentVideo.key}
                customClases="md:hidden"
                errorImage={errorImage}
              />
              <CustomImage
                src={currentVideo.imagenGrande}
                alt={currentVideo.key}
                customClases="hidden md:inline-block"
                errorImage={errorImage}
              />
            </div>
          </div>
          <div className="miniaturas grid gap-2 grid-cols-3 sm:grid-cols-4">
            {currentMiniaturas.map((miniatura) => (
              <div
                key={miniatura.id}
                onClick={() => {
                  handleOnClick(miniatura);
                  setModalVisible(false);
                }}
                className={`rounded-sm overflow-hidden border transition-colors border-opacity-50 after:inset-0 after:absolute after:bg-main-black relative ${
                  currentVideo.id === miniatura.id
                    ? "border-main-color after:opacity-0"
                    : "border-transparent after:opacity-50"
                }`}
              >
                <CustomImage
                  src={miniatura.imagenPequeña}
                  alt=""
                  errorImage={errorImage}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
