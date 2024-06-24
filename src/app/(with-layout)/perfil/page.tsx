import Coleccion from "@/components/PagePerfil/Coleccion";
import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import profile from "@/assets/perfil.webp";
import NoData from "@/components/errors/NoData";

export default function Perfil() {
  return (
    <main className="w-full">
      <div className="banner w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] rounded-3xl border-4 border-secondary-black overflow-hidden">
        <Image
          src={banner}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,0px]"
        />
      </div>
      <header className="header px-4 md:px-8 lg:px-10 2xl:px-0 max-w-7xl mx-auto relative -top-16 lg:-top-20 flex flex-col md:flex-row md:items-end items-center md:justify-between gap-4">
        <div className="perfil flex flex-col gap-1 items-center">
          <div className="foto rounded-full  w-24 h-24 lg:w-32 lg:h-32 bg-main-white border-4 border-secondary-black overflow-hidden">
            <Image
              src={profile}
              alt="perfil"
              width={96}
              height={96}
              className="lg:hidden"
            />
            <Image
              src={profile}
              alt="perfil"
              width={128}
              height={128}
              className="hidden lg:inline-block"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="capitalize text-lg lg:text-xl font-medium">
              saint laurent
            </span>
            <span className="text-xs lg:text-sm">@saintlaurent</span>
          </div>
        </div>
        <div className="botones flex gap-2">
          <button className="px-4 py-2 border border-main-white border-opacity-35 text-sm capitalize rounded-full">
            <span>editar perfil</span>
          </button>
          <button className="w-10 h-10 border flex justify-center items-center border-main-white border-opacity-35 capitalize rounded-full">
            <span className="icon-[mdi--dots-horizontal] h-4 w-4"></span>
          </button>
        </div>
      </header>
      <section className="section px-4 md:px-8 lg:px-10 max-w-7xl 2xl:px-0 mx-auto grid gap-8 lg:grid-cols-[70%,1fr] lg:gap-4 pb-10">
        <Coleccion />
        <aside>
          <div>
            <header className="flex flex-col gap-4 md:gap-8">
              <h3 className="uppercase font-medium  flex items-center justify-between gap-12 text-xl md:text-2xl lg:text-3xl">
                reviews
                <span className="bg-main-white w-full h-[1px] inline-block flex-1"></span>
              </h3>
            </header>
            <NoData
              nombre="no tienes reviews"
              customStyles="min-h-[150px] lg:min-h-[200px]"
            />
          </div>
          <div>
            <header className="flex flex-col gap-4 md:gap-8">
              <h3 className="uppercase font-medium  flex items-center justify-between gap-12 text-xl md:text-2xl lg:text-3xl">
                votaciones
                <span className="bg-main-white w-full h-[1px] inline-block flex-1"></span>
              </h3>
            </header>
            <NoData
              nombre="no tienes votaciones"
              customStyles="min-h-[150px] lg:min-h-[200px]"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
