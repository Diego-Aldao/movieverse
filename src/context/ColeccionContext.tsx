"use client";
import { Coleccion } from "@/types/localTypes";
import React, { useEffect } from "react";
import { useState } from "react";

export interface Context {
  favoritos: Coleccion[] | undefined;
  guardados: Coleccion[] | undefined;
  setFavoritos: React.Dispatch<React.SetStateAction<Coleccion[] | undefined>>;
  setGuardados: React.Dispatch<React.SetStateAction<Coleccion[] | undefined>>;
}

const ColeccionContext = React.createContext<Context | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ColeccionContextProvider = ({ children }: Props) => {
  const [favoritos, setFavoritos] = useState<Coleccion[] | undefined>(
    undefined
  );
  const [guardados, setGuardados] = useState<Coleccion[] | undefined>(
    undefined
  );

  useEffect(() => {
    const favoritosString = localStorage.getItem("favoritos");
    let favoritosParsed: Coleccion[] = favoritosString
      ? JSON.parse(favoritosString)
      : undefined;
    const guardadosString = localStorage.getItem("guardados");
    let guardadosParsed: Coleccion[] = guardadosString
      ? JSON.parse(guardadosString)
      : undefined;
    setFavoritos(favoritosParsed);
    setGuardados(guardadosParsed);
  }, []); //segun la documentacion, necesito un useEffect en un context si voy a manipular el localstorage (ssr y csr)

  return (
    <ColeccionContext.Provider
      value={{ favoritos, guardados, setFavoritos, setGuardados }}
    >
      {children}
    </ColeccionContext.Provider>
  );
};

export default ColeccionContext;
