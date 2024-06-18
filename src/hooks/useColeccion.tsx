"use client";
import { useContext } from "react";
import ColeccionContext from "@/context/ColeccionContext";
import type { Context } from "@/context/ColeccionContext";
import { Coleccion } from "@/types/localTypes";

const useColeccion = () => {
  const { favoritos, guardados, setFavoritos, setGuardados } = useContext(
    ColeccionContext
  ) as Context;

  const agregarAColeccion = (
    item: Coleccion,
    nombreLocalStorage: string
  ): void => {
    const coleccionString = localStorage.getItem(nombreLocalStorage);
    let coleccion: Coleccion[] = coleccionString
      ? JSON.parse(coleccionString)
      : [];

    // Verificar si ya existe un objeto con el mismo id
    const index = coleccion.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    if (index !== -1) {
      // Si existe, eliminarlo del array
      coleccion.splice(index, 1);
    } else {
      // Si no existe, agregar el nuevo objeto al array
      coleccion.push(item);
    }

    // Guardar el array actualizado en localStorage y actualizar el estado que corresponde
    localStorage.setItem(nombreLocalStorage, JSON.stringify(coleccion));
    if (nombreLocalStorage === "favoritos") {
      setFavoritos(coleccion);
    } else {
      setGuardados(coleccion);
    }
  };
  return { favoritos, guardados, agregarAColeccion };
};

export default useColeccion;
