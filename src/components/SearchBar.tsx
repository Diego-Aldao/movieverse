"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchBar = () => {
    setSearchVisible((searchVisible) => !searchVisible);
  };

  useEffect(() => {
    if (searchVisible && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [searchVisible]);

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
        className={`w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 transition-colors relative hover:text-main-color xl:hidden  ${
          searchVisible ? "text-main-color" : "text-main-white"
        }`}
        onClick={handleSearchBar}
      >
        <span className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 icon-[mdi--search] text-inherit"></span>
      </button>

      <form
        className={`w-full max-w-[400px] md:max-w-[600px] mx-auto right-0 left-0 overflow-hidden bg-main-black/35 backdrop-blur-sm flex gap-1 items-center rounded-full transition-all h-10 lg:h-12 absolute xl:relative xl:mx-0 xl:max-w-[450px] has-[input:focus]:border-main-white/35 border border-transparent xl:pr-4 ${
          searchVisible
            ? "opacity-100 visible -bottom-[35px] md:-bottom-[45px] lg:-bottom-[65px] xl:bottom-0 xl:visible xl:opacity-100"
            : "opacity-0 invisible -bottom-[30px] md:-bottom-[40px] lg:-bottom-[60px] xl:bottom-0 xl:visible xl:opacity-100"
        }`}
        onSubmit={handleNavigate}
      >
        <button
          disabled={searchValue ? false : true}
          className={`relative transition-all h-full px-2 md:px-4 rounded-md flex items-center outline-transparent border-none  ${
            searchVisible
              ? "top-0 opacity-100 xl:opacity-100 xl:top-0"
              : "top-4 opacity-0 xl:opacity-100 xl:top-0"
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
                ? "opacity-100 visible top-0 w-fit xl:hidden 2xl:block"
                : "opacity-0 invisible top-1 w-0 xl:hidden 2xl:block"
            }`}
          >
            buscar
          </span>
          <span className="icon-[mdi--search] h-5 w-5 lg:h-6 lg:w-6 text-inherit"></span>
        </button>
        <input
          name=""
          id=""
          type="text"
          value={searchValue}
          ref={inputRef}
          onBlur={() => {
            setTimeout(() => {
              setSearchVisible(false);
            }, 100);
          }}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Duna, Attack on titan, Sydney Sweeney..."
          className="bg-transparent placeholder:text-secondary-white placeholder-shown:text-ellipsis placeholder:opacity-75 px-1 w-full h-full  text-main-white outline-0 outline-offset-0 placeholder:text-sm md:placeholder:text-base text:sm md:text-base"
        />

        <div
          className={`transition-all xl:hidden h-full hover:bg-main-black hover:bg-opacity-15 group px-2 rounded-md flex items-center cursor-pointer ${
            searchVisible ? "top-0 opacity-100" : "top-4 opacity-0"
          }`}
        >
          <span
            className="h-4 w-4 lg:h-5 lg:w-5 icon-[mdi--close] transition-colors text-main-white group-hover:text-red-500"
            onClick={() => {
              setSearchVisible(false);
            }}
          ></span>
        </div>
      </form>
    </>
  );
}
