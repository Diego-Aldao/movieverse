import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ContenidoPrincipal({ children }: Props) {
  return (
    <section
      className={`contenido-principal grid grid-cols-2 sm:grid-cols-3 transition-all md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16 w-full`}
    >
      {children}
    </section>
  );
}
