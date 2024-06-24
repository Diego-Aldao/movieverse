import MainButton from "@/components/buttons/MainButton";
import UserInteraction from "@/components/cards/UserInteraction";
import { numberToFixed } from "@/utils/fixedNumbers";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  votoPromedio: number;
  titulo: string;
  generos: React.ReactNode;
  descripcion: string;
  children: React.ReactNode;
  id: number;
  poster: string;
}

export default function Slide({
  votoPromedio,
  titulo,
  generos,
  descripcion,
  id,
  children,
  poster,
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "-50px -150px -50px -150px",
  });
  const [ref2, inView2] = useInView({
    threshold: 0,
    rootMargin: "-50px -150px -50px -150px",
  });

  return (
    <div className="slide bg-secondary-black  w-full h-full px-4 md:px-8 lg:px-10 ">
      <div className="contenido-slide z-[2] relative flex flex-col justify-end w-full h-full max-w-7xl mx-auto cursor-default">
        <div
          data-swiper-parallax="-55%"
          className="about flex flex-col w-full h-fit mb-28 gap-4"
        >
          <header
            ref={ref}
            className={`flex flex-col gap-2 justify-center w-fit relative transition-all ${
              inView ? "opacity-100 top-0" : "top-4 opacity-0"
            }`}
          >
            <div className="upper flex gap-8 w-fit items-center">
              <div className={`transition-all flex items-center gap-2 w-full`}>
                <span className="icon-[mdi--star] md:h-6 md:w-6 text-main-color"></span>
                <span className="md:text-xl">
                  {numberToFixed(votoPromedio)}
                </span>
              </div>
              <UserInteraction
                item={{
                  id: id,
                  nombre: titulo,
                  img_path: poster,
                  media_type: "movie",
                }}
              />
            </div>

            <h1
              className={`transition-all line-clamp-2 delay-150 w-fit text-3xl uppercase font-semibold sm:text-4xl md:text-5xl  xl:text-6xl max-w-[300px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[850px]`}
            >
              {titulo}
            </h1>
          </header>
          {generos}
          <div
            ref={ref2}
            className={`transition-all relative flex flex-col gap-5 max-w-[500px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[700px] ${
              inView2 ? "opacity-100 bottom-0" : "opacity-0 bottom-4"
            }`}
          >
            <p className="lg:text-lg line-clamp-3">{descripcion}</p>
            <MainButton
              destino={`/peliculas/${id}`}
              icon="icon-[mdi--arrow-right-thin]"
              nombre="ver detalle"
              customIconStyles="lg:h-6 lg:w-6"
              customStyles={`${
                inView2 ? "opacity-100 left-0" : "opacity-0 -left-48"
              } delay-150 relative transition-all`}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
