"use client";
import React, { useState } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import { useRouter } from "next/navigation";
import { LISTADO_BUSQUEDA } from "@/constants/constants";

export default function BusquedaDetallada() {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleNavigate = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!searchValue) return;
    const valueEncode = encodeURIComponent(searchValue);
    const urlDestino = `/busqueda?query=${valueEncode}`;
    router.push(urlDestino);
  };

  return (
    <main className="px-4 md:px-8 lg:px-10 2xl:px-0 max-w-7xl mx-auto flex flex-col gap-4 md:gap-8 h-screen min-h-[700px] items-center justify-center">
      <h1 className="uppercase text-xl font-semibold sm:text-3xl md:text-5xl 2xl:text-6xl">
        empezar a buscar
      </h1>

      <form
        onSubmit={handleNavigate}
        className="flex bg-secondary-black backdrop-blur-md rounded-full has-[input:focus]:border-main-white/35 border border-transparent transition-colors w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]"
      >
        <button
          className={`w-fit py-2 transition-all px-2 pl-4 font-medium uppercase text-sm flex items-center bg-main-black rounded-l-full rounded-r-md  lg:py-3 ${
            searchValue ? "text-main-color gap-2" : "text-main-white/75 gap-0"
          }`}
        >
          <span
            className={`hidden md:block text-inherit transition-opacity ${
              searchValue
                ? "visible opacity-100 w-fit"
                : "invisible opacity-0 w-0"
            }`}
          >
            buscar
          </span>
          <span className="icon-[mdi--search] h-6 w-6 text-inherit"></span>
        </button>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
          className="w-full bg-transparent rounded-r-full outline-none border-none px-2 text-sm placeholder:text-sm lg:text-base lg:placeholder:text-base"
          placeholder="Duna, Attack on titan, Sydney Sweeney..."
        />
      </form>
      <ul className="w-full flex flex-wrap gap-2 max-w-[600px] mx-auto justify-center mt-4">
        {LISTADO_BUSQUEDA.map(({ nombre, id, destino }) => (
          <li key={id}>
            <SecondaryButton
              destino={destino}
              nombre={nombre}
              customStyles="!border-main-white/15 hover:!border-main-white/50 text-xs lg:text-sm"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
