import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children?: React.ReactNode;
  nombre: string;
  customStyles?: string;
}

export default function NoData({ children, nombre, customStyles }: Props) {
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`min-h-[200px] lg:min-h-[400px] flex items-center justify-center w-full col-span-full relative transition-all delay-200 ${
        inView ? "opacity-100 top-0" : "opacity-0 top-10"
      } ${customStyles}`}
    >
      <span className="first-letter:uppercase text-center w-fit text-xl md:text-2xl inline-block line-clamp-1 ">
        {nombre}
      </span>
      {children}
    </div>
  );
}
