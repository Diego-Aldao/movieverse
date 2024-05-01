import React, { ReactNode } from "react";

interface Props {
  ordenVisible: boolean;
  filtrosVisible: boolean;
  children: ReactNode;
}

export default function ContenidoPrincipal({
  ordenVisible,
  filtrosVisible,
  children,
}: Props) {
  return (
    <section
      className={`contenido-principal grid grid-cols-2 sm:grid-cols-3 transition-all md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16 ${
        ordenVisible && !filtrosVisible && "sm:mt-28 xl:mt-16"
      }  ${
        filtrosVisible &&
        !ordenVisible &&
        "sm:mt-72 md:mt-[340px] lg:mt-72 2xl:mt-64"
      } ${
        ordenVisible &&
        filtrosVisible &&
        "sm:mt-[400px] md:mt-[460px] lg:mt-[400px] xl:mt-96 2xl:mt-[340px]"
      }`}
    >
      {children}
    </section>
  );
}
