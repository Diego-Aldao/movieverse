import React from "react";

interface Props {
  updateFilters: (pageNumber: number) => void;
  ordenVisible: boolean;
  filtrosVisible: boolean;
  resetFilters: () => void;
}

export default function Botones({
  updateFilters,
  ordenVisible,
  filtrosVisible,
  resetFilters,
}: Props) {
  return (
    <div
      className={`botones w-full flex gap-4 transition-all justify-evenly md:relative lg:gap-12 lg:w-fit lg:min-w-[944px] mx-auto ${
        ordenVisible && !filtrosVisible && "sm:mt-[120px] xl:mt-[80px]"
      } ${
        filtrosVisible &&
        !ordenVisible &&
        "sm:mt-[500px] lg:mt-[370px] xl:mt-[380px]"
      } ${
        filtrosVisible &&
        ordenVisible &&
        "sm:mt-[615px] lg:mt-[490px] xl:mt-[460px]"
      }`}
    >
      <button
        onClick={resetFilters}
        className="sm:uppercase border-main-white/15 rounded-full w-full max-w-[300px] capitalize text-sm px-2 border text-main-white/75 hover:text-main-white py-1 font-semibold sm:text-base sm:px-4 md:flex-1 md:max-w-[350px] hover:border-main-white/50 transition-colors"
      >
        resetear filtros
      </button>
      <button
        className="px-2 py-1 text-sm font-semibold sm:uppercase w-full max-w-[300px] capitalize bg-main-color hover:text-main-black rounded-full border hover:border-main-color border-transparent transition-colors text-main-black/75 sm:text-base sm:px-4 md:flex-1 md:max-w-[350px]"
        onClick={() => {
          updateFilters(1);
        }}
      >
        aplicar filtros
      </button>
    </div>
  );
}
