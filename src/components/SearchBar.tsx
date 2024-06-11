"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleSearchBar = () => {
    setSearchVisible((searchVisible) => !searchVisible);
  };

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
    <>
      <button
        className={`w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 transition-colors relative hover:text-main-color  ${
          searchVisible ? "text-main-color" : "text-main-white"
        }`}
        onClick={handleSearchBar}
      >
        <span className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 icon-[mdi--search] text-inherit"></span>
      </button>
      <div
        className={`busqueda transition-all h-8 md:h-10 lg:h-12 w-full absolute overflow-hidden right-0   ${
          searchVisible
            ? "opacity-100 visible -bottom-[45px] md:-bottom-[55px] lg:-bottom-[75px]"
            : "opacity-0 invisible -bottom-[40px] md:-bottom-[50px] lg:-bottom-[70px]"
        }`}
      >
        <form
          className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] mx-auto  ml-auto h-full overflow-hidden bg-main-black bg-opacity-35 flex gap-1 items-center rounded-full"
          onSubmit={handleNavigate}
        >
          <button
            disabled={searchValue ? false : true}
            className={`relative transition-all h-full px-2 md:px-4 rounded-md flex items-center  ${
              searchVisible ? "top-0 opacity-100" : "top-4 opacity-0"
            } ${
              searchValue
                ? "text-main-color gap-2 bg-main-black bg-opacity-15 hover:bg-opacity-25"
                : "text-main-white gap-0"
            }`}
            onClick={handleNavigate}
          >
            <span
              className={`text-inherit uppercase text-sm relative transition-all hidden md:block  ${
                searchValue
                  ? "opacity-100 visible top-0 w-fit"
                  : "opacity-0 invisible top-1 w-0"
              }`}
            >
              buscar
            </span>
            <span className="icon-[mdi--search] h-5 w-5 lg:h-6 lg:w-6 text-inherit"></span>
          </button>
          <input
            name=""
            id=""
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Duna, Attack on titan, Sydney Sweeney....."
            className="bg-transparent placeholder:text-secondary-white placeholder:opacity-75 px-1 w-full h-full  text-main-white outline-0 outline-offset-0 placeholder:text-sm md:placeholder:text-base text:sm md:text-base"
          />
          <div
            className={`transition-all h-full hover:bg-main-black hover:bg-opacity-15 group px-2 rounded-md flex items-center cursor-pointer ${
              searchVisible ? "top-0 opacity-100" : "top-4 opacity-0"
            }`}
          >
            <span
              className="h-4 w-4 lg:h-5 lg:w-5 icon-[mdi--close] transition-colors text-main-white group-hover:text-red-500"
              onClick={handleSearchBar}
            ></span>
          </div>
        </form>
      </div>
    </>
  );
}
