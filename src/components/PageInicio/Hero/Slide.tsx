import MainButton from "@/components/buttons/MainButton";
import { numberToFixed } from "@/utils/fixedNumbers";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  votoPromedio?: number;
  titulo?: string;
  generos: React.ReactNode;
  descripcion?: string;
  children: React.ReactNode;
  id?: number;
}

export default function Slide({
  votoPromedio,
  titulo,
  generos,
  descripcion,
  id,
  children,
}: Props) {
  const [ref, inView] = useInView({ threshold: 0 });
  const [ref2, inView2] = useInView({ threshold: 0 });
  const [ref3, inView3] = useInView({ threshold: 0 });

  return (
    <div className="slide bg-main-color after:min-h-[700px] after:lg:min-h-[800px] lg:px-10 w-full h-full p-4 md:px-8">
      <div className="contenido-slide z-10 relative flex flex-col w-full h-full justify-end gap-3 max-w-7xl mx-auto">
        <div
          data-swiper-parallax="-55%"
          className="about flex flex-col gap-4 mb-36 md:mb-40"
        >
          <header className="flex flex-col gap-2 justify-center">
            <div
              ref={ref2}
              className={`transition-all flex items-center gap-2 w-full relative ${
                inView2 ? "left-0 opacity-100" : "-left-4 opacity-0"
              }`}
            >
              <span className="icon-[mdi--star] md:h-6 md:w-6 text-main-color"></span>
              <span className="md:text-xl">{numberToFixed(votoPromedio)}</span>
            </div>
            <h1
              ref={ref}
              className={`transition-all delay-150 w-fit text-3xl uppercase font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl max-w-[300px] sm:max-w-[450px] lg:max-w-[550px] ${
                inView ? "opacity-100 top-0" : "top-4 opacity-0"
              } relative`}
            >
              {titulo}
            </h1>
          </header>
          {generos}
          <div className="max-w-[500px] md:max-w-[550px] flex flex-col gap-5">
            <p
              ref={ref3}
              className={`lg:text-lg transition-all delay-75 line-clamp-4 relative ${
                inView3 ? "opacity-100 bottom-0" : "opacity-0 -bottom-10"
              }`}
            >
              {descripcion}
            </p>
            <MainButton
              destino={`/detalle?id=${id}`}
              icon="icon-[mdi--arrow-right-thin]"
              nombre="ver detalle"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
