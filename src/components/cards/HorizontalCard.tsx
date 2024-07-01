import React from "react";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import Generos from "../Generos";
import { numberToFixed } from "@/utils/fixedNumbers";
import { Serie } from "@/types/fetchTypes";
import MainButton from "../buttons/MainButton";
import UserInteraction from "./UserInteraction";
import MainTag from "../tags/MainTag";
import CustomImage from "../CustomImage";
import errorImagePoster from "@/assets/errorImagePoster.webp";
import errorImageBackdrop from "@/assets/errorImagebackdrop.webp";

interface Props {
  item: Serie;
  altImagen: string;
}

export default function HorizontalCard({ item, altImagen }: Props) {
  return (
    <div className="z-[2] max-w-[550px] md:max-w-[700px] xl:max-w-[900px] w-full  rounded-md overflow-hidden after:inset-0 after:absolute relative after:bg-gradient-to-r after:from-secondary-black after:via-[#242526b7]  after:overflow-hidden after:to-transparent min-h-[200px] h-[250px] md:h-[300px] xl:h-[370px] lg:h-[300px]">
      <CustomImage
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.mediano}${item.backdrop_path}`}
        alt={altImagen}
        customClases="lg:hidden"
        errorImage={errorImageBackdrop}
        triggerOnce={false}
      />
      <CustomImage
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.grande}${item.backdrop_path}`}
        alt={altImagen}
        customClases="hidden lg:block"
        errorImage={errorImageBackdrop}
        triggerOnce={false}
      />
      <div className="absolute w-full h-full top-0 left-0 z-[2] xl:gap-4 p-4 flex flex-col gap-2 md:p-8">
        <div className="flex gap-2 xl:gap-4">
          <div className="rounded-md overflow-hidden h-[105px] xl:h-[150px] w-[70px] xl:w-[100px] hidden md:block">
            <CustomImage
              src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.posterPequeño}${item.poster_path}`}
              alt={altImagen}
              customClases="xl:hidden"
              errorImage={errorImagePoster}
              width={70}
              height={105}
              triggerOnce={false}
            />
            <CustomImage
              src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.posterPequeño}${item.poster_path}`}
              alt={altImagen}
              customClases="hidden xl:block"
              errorImage={errorImagePoster}
              width={100}
              triggerOnce={false}
              height={150}
            />
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <header className="flex gap-4 items-center">
              <h2 className="text-xl line-clamp-1 md:text-3xl xl:text-4xl pb-1">
                {item.name}
              </h2>
              <UserInteraction
                item={{
                  id: item.id,
                  nombre: item.name,
                  img_path: item.poster_path || "",
                  media_type: "tv",
                }}
              />
            </header>
            <Generos
              tipo="tv"
              cantidad={3}
              listaGenerosNumericos={item.genre_ids}
              stylesItem="text-[10px] md:text-sm"
            />
            <p className="text-xs line-clamp-4 xl:line-clamp-5 w-2/3 md:w-full md:max-w-[400px] xl:max-w-[500px] md:text-sm xl:text-base">
              {item.overview}
            </p>
          </div>
          <MainTag customStyles="flex gap-1 items-center text-green-500 mt-1 ml-[clamp(20px,110px,110px)] relative">
            <span className="icon-[mdi--star] text-inherit"></span>
            {numberToFixed(item.vote_average)}
          </MainTag>
        </div>
        <MainButton
          icon="icon-[mdi--arrow-right-thin]"
          nombre="ver detalle"
          destino={`/series/${item.id}`}
          customStyles="mt-auto text-xs md:text-base px-4 md:px-6 bg-[#242526a8]"
        />
      </div>
    </div>
  );
}
