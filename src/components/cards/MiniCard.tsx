"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import { BASE_URL_IMAGES, TAMAÑOS_IMAGENES } from "@/constants/constants";
import MainButton from "../buttons/MainButton";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Props {
  pathImagen?: string;
  nombre: string;
  children?: ReactNode;
  customStyles?: string;
  handleClick?: (id: number) => void;
  id: number;
  noLink?: boolean;
  media_type?: string;
  simple?: boolean;
}

interface PropsCardInteractiva
  extends Pick<Props, "pathImagen" | "nombre" | "id" | "customStyles"> {
  handleClick: (id: number) => void;
  noLink: boolean;
} //este componente necesita que las props handleClick y noLink sean siempre true, por eso las volvi a crear sin el ? de las props principales

interface PropsCardSimple
  extends Pick<
    Props,
    "pathImagen" | "nombre" | "id" | "media_type" | "children" | "customStyles"
  > {}

function MiniCardInteractiva({
  handleClick,
  pathImagen,
  nombre,
  id,
  customStyles,
  noLink,
}: PropsCardInteractiva) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {noLink ? (
        <div
          ref={ref}
          className={`w-full flex  h-[120px] sm:h-full after:bg-[#242526b7] transition-all after:inset-0 after:absolute relative rounded-md overflow-hidden max-w-[370px] mx-auto sm:max-w-full md:h-full ${customStyles} ${
            inView ? "opacity-100 top-0" : "opacity-0 top-4"
          }`}
        >
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${pathImagen}`}
            alt="bg-imagen"
            width={0}
            height={0}
            sizes="100vw"
          />
          <h2 className="text-xl line-clamp-1 sm:text-lg md:text-xl absolute left-2 top-2 z-[2]">
            {nombre}
          </h2>
          <MainButton
            nombre="ver detalle"
            destino={`/series/${id}`}
            icon="icon-[mdi--arrow-right-thin]"
            customStyles="absolute bottom-2 right-2 z-[2] text-xs"
          />
        </div>
      ) : (
        <Link
          href={"#serie-detallada"}
          onClick={() => {
            handleClick(id);
          }}
          ref={ref}
          className={`w-full flex items-center justify-center h-[120px] sm:h-full after:bg-[#242526b7] transition-all after:inset-0 after:absolute relative rounded-md overflow-hidden max-w-[370px] mx-auto sm:max-w-full md:h-full ${customStyles} ${
            inView ? "opacity-100 top-0" : "opacity-0 top-4"
          }`}
        >
          <Image
            src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${pathImagen}`}
            alt="bg-imagen"
            width={0}
            height={0}
            sizes="100vw"
          />
          <h2 className="text-xl line-clamp-1 sm:text-lg md:text-xl absolute z-[2] text-center px-2">
            {nombre}
          </h2>
        </Link>
      )}
    </>
  );
}

function MiniCardSimple({
  pathImagen,
  nombre,
  id,
  media_type,
  children,
  customStyles,
}: PropsCardSimple) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`w-full flex  h-[120px] sm:h-full after:bg-[#242526b7] transition-all after:inset-0 after:absolute relative rounded-md overflow-hidden max-w-[370px] mx-auto sm:max-w-full md:h-full ${customStyles} ${
        inView ? "opacity-100 top-0" : "opacity-0 top-4"
      }`}
    >
      <Image
        src={`${BASE_URL_IMAGES}${TAMAÑOS_IMAGENES.pequeño}${pathImagen}`}
        alt="bg-imagen"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col gap-2 absolute left-2 top-2 z-[2]">
        <h2 className="text-xl line-clamp-1 sm:text-lg md:text-xl ">
          {nombre}
        </h2>
        {children}
      </div>

      <MainButton
        nombre="ver detalle"
        destino={`/${media_type}/${id}`}
        icon="icon-[mdi--arrow-right-thin]"
        customStyles="absolute bottom-2 right-2 z-[2] text-xs"
      />
    </div>
  );
}

export default function MiniCard({
  pathImagen,
  nombre,
  noLink,
  children,
  customStyles,
  handleClick,
  media_type,
  id,
  simple,
}: Props) {
  return simple ? (
    <MiniCardSimple
      nombre={nombre}
      id={id}
      pathImagen={pathImagen}
      media_type={media_type}
      customStyles={customStyles}
    >
      {children}
    </MiniCardSimple>
  ) : (
    <>
      {handleClick && noLink && (
        <MiniCardInteractiva
          handleClick={handleClick}
          nombre={nombre}
          id={id}
          pathImagen={pathImagen}
          noLink={noLink}
          customStyles={customStyles}
        />
      )}
    </>
  );
}
