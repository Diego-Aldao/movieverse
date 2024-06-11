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
        className={`w-7 h-7 transition-colors relative  ${
          searchVisible ? "text-main-color" : "text-main-white"
        }`}
        onClick={handleSearchBar}
      >
        <span className="h-7 w-7 icon-[mdi--search] text-inherit"></span>
      </button>
      <div
        className={`busqueda transition-all h-fit w-full absolute overflow-hidden right-0   ${
          searchVisible
            ? "opacity-100 visible -bottom-[45px] md:-bottom-[65px]"
            : "opacity-0 invisible -bottom-[35px] md:-bottom-[55px]"
        }`}
      >
        <form
          className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] md:mx-auto md:py-2 ml-auto h-full overflow-hidden bg-main-white p-2 py-1 flex gap-2 items-center rounded-md bg-opacity-10"
          onSubmit={handleNavigate}
        >
          <button
            disabled={searchValue ? false : true}
            className={`relative transition-all h-7 bg-main-white bg-opacity-15 p-1 rounded-md flex items-center  ${
              searchVisible ? "top-0 opacity-100" : "top-4 opacity-0"
            } ${
              searchValue
                ? "text-main-color opacity-100 gap-2"
                : "text-main-white opacity-75 gap-0"
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
            <span className="icon-[mdi--search] h-5 w-5 text-inherit"></span>
          </button>

          <input
            name=""
            id=""
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Duna, Attack on titan, Sydney Sweeney....."
            className="bg-transparent placeholder:text-secondary-white placeholder:opacity-75 px-1 w-full h-7  text-main-white outline-0 outline-offset-0"
          />
          <div
            className={`transition-all relative h-7 cursor-pointer bg-main-white bg-opacity-15 p-1 rounded-md ${
              searchVisible ? "top-0 opacity-100" : "top-4 opacity-0"
            }`}
          >
            <span
              className="h-5 w-5 icon-[mdi--close] hover:text-red-400"
              onClick={handleSearchBar}
            ></span>
          </div>
        </form>
      </div>
    </>
  );
}
