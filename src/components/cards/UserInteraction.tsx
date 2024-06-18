"use client";
import React, { useEffect, useState } from "react";
import ButtonInteraction from "../buttons/ButtonInteraction";
import useColeccion from "@/hooks/useColeccion";
import { Coleccion } from "@/types/localTypes";

interface PropsDropdown extends Pick<Props, "isMouseInside"> {
  itemEsFavorito: boolean;
  itemEstaGuardado: boolean;
  handleInteraccion: (nombre: string) => void;
}

function InteractionDropdown({
  isMouseInside,
  itemEsFavorito,
  itemEstaGuardado,
  handleInteraccion,
}: PropsDropdown) {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!isMouseInside) setDropdownVisible(false);
  }, [isMouseInside]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setDropdownVisible((dropdownVisible) => !dropdownVisible);
  };

  return (
    <>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
        className={`menu bg-[#10101017] rounded-full h-7 w-7 xl:h-8 xl:w-8 flex items-center justify-center backdrop-blur-xl relative z-[2] shadow-lg hover:shadow-main-black/50 hover:border-main-color border  transition-colors ${
          dropdownVisible
            ? "border-main-color shadow-main-black/50"
            : "border-transparent shadow-transparent"
        }`}
      >
        <span
          className={`icon-[mdi--dots-vertical] transition-[transform,colors] ${
            dropdownVisible
              ? "rotate-90 text-main-color"
              : "rotate-0 text-main-white"
          }`}
        ></span>
      </button>
      <div
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`dropdown cursor-default absolute transition-all top-8 md:top-10 right-0 w-fit bg-[#10101041] shadow-lg p-1 flex flex-col gap-1 backdrop-blur-sm rounded-md ${
          dropdownVisible
            ? "opacity-100 [transform:_translateZ(0)_scaleZ(1)]  shadow-main-black/50"
            : "opacity-0 [transform:_translate3d(36px,_-24px,_0)_scale3d(.0,_.0,_1)]  shadow-transparent"
        }`}
      >
        <ButtonInteraction
          itemExiste={itemEstaGuardado}
          handleInteraccion={handleInteraccion}
          nombre="guardar"
          icono={
            itemEstaGuardado
              ? "icon-[mdi--bookmark]"
              : "icon-[mdi--bookmark-outline]"
          }
          isDropdown={true}
        />
        <ButtonInteraction
          itemExiste={itemEsFavorito}
          handleInteraccion={handleInteraccion}
          nombre="favorito"
          icono={
            itemEsFavorito
              ? "icon-[mdi--cards-heart]"
              : "icon-[mdi--cards-heart-outline]"
          }
          isDropdown={true}
        />
      </div>
    </>
  );
}

interface PropsFlex {
  itemEsFavorito: boolean;
  itemEstaGuardado: boolean;
  handleInteraccion: (nombre: string) => void;
}
function InteractionFlex({
  itemEsFavorito,
  itemEstaGuardado,
  handleInteraccion,
}: PropsFlex) {
  return (
    <div className="flex gap-2 items-center">
      <ButtonInteraction
        itemExiste={itemEstaGuardado}
        nombre="guardar"
        icono={
          itemEstaGuardado
            ? "icon-[mdi--bookmark]"
            : "icon-[mdi--bookmark-outline]"
        }
        handleInteraccion={handleInteraccion}
      />
      <ButtonInteraction
        itemExiste={itemEsFavorito}
        nombre="favorito"
        icono={
          itemEsFavorito
            ? "icon-[mdi--cards-heart]"
            : "icon-[mdi--cards-heart-outline]"
        }
        handleInteraccion={handleInteraccion}
      />
    </div>
  );
}

interface Props {
  isMouseInside?: boolean;
  dropdown?: boolean;
  item: Coleccion;
}

export default function UserInteraction({
  dropdown,
  isMouseInside,
  item,
}: Props) {
  const { favoritos, guardados, agregarAColeccion } = useColeccion();
  const [itemEsFavorito, setItemEsFavorito] = useState<boolean>(false);
  const [itemEstaGuardado, setItemEstaGuardado] = useState<boolean>(false);

  const handleInteraccion = (nombre: string) => {
    agregarAColeccion(item, nombre);
  };

  useEffect(() => {
    const existeEnLaColeccion = (coleccion: Coleccion[], id: number) => {
      const existeEnLaColeccion = coleccion.some(
        (itemColeccion) => itemColeccion.id === id
      );
      return existeEnLaColeccion;
    };

    if (favoritos && item) {
      const existeFavorito = existeEnLaColeccion(favoritos, item.id);
      setItemEsFavorito(existeFavorito);
    }

    if (guardados && item) {
      const existeGuardado = existeEnLaColeccion(guardados, item.id);
      setItemEstaGuardado(existeGuardado);
    }
  }, [favoritos, guardados]);

  return dropdown ? (
    <InteractionDropdown
      isMouseInside={isMouseInside}
      itemEsFavorito={itemEsFavorito}
      itemEstaGuardado={itemEstaGuardado}
      handleInteraccion={handleInteraccion}
    />
  ) : (
    <InteractionFlex
      itemEsFavorito={itemEsFavorito}
      itemEstaGuardado={itemEstaGuardado}
      handleInteraccion={handleInteraccion}
    />
  );
}
