import { FiltrosFetch } from "@/types/localTypes";
import { objectToString } from "@/utils/objectToString";
import React from "react";

interface Props {
  updateUrl: (filtros: FiltrosFetch) => void;
  updateFilters: (pageNumber: number) => void;
  filtros: FiltrosFetch;
  initialFiltros: FiltrosFetch;
  setFiltros: React.Dispatch<React.SetStateAction<FiltrosFetch>>;
  ordenVisible: boolean;
  filtrosVisible: boolean;
}

export default function Botones({
  updateUrl,
  updateFilters,
  filtros,
  initialFiltros,
  setFiltros,
  ordenVisible,
  filtrosVisible,
}: Props) {
  const resetFilters = () => {
    setFiltros(initialFiltros);
    updateUrl(initialFiltros);
  };
  return (
    <div
      className={`botones w-full flex gap-4  justify-evenly md:relative lg:gap-12 lg:w-fit lg:min-w-[944px] mx-auto ${
        ordenVisible && !filtrosVisible && "sm:mt-[120px] xl:mt-[80px]"
      } ${
        filtrosVisible &&
        !ordenVisible &&
        "sm:mt-[300px] lg:mt-[270px] xl:mt-[240px]"
      } ${
        filtrosVisible &&
        ordenVisible &&
        "sm:mt-[415px] lg:mt-[385px] xl:mt-[320px] 2xl:mt-[320px]"
      }`}
    >
      <button
        onClick={resetFilters}
        disabled={filtros === initialFiltros}
        className={` sm:uppercase  rounded-sm w-full max-w-[300px] capitalize text-sm px-2 border text-main-white py-1 font-semibold sm:text-base sm:px-4 md:flex-1 md:max-w-[350px] ${
          filtros === initialFiltros
            ? "bg-main-black opacity-50 border-secondary-black"
            : "bg-secondary-black opacity-100 border-main-color"
        }`}
      >
        resetear filtros
      </button>
      <button
        className="px-2 py-1 text-sm font-semibold sm:uppercase w-full max-w-[300px] capitalize bg-main-color text-main-black rounded-sm sm:text-base sm:px-4 md:flex-1 md:max-w-[350px]"
        onClick={() => {
          updateFilters(1);
        }}
      >
        aplicar filtros
      </button>
    </div>
  );
}
