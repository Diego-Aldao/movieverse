import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imagen from "@/assets/aside.jpg";

interface Props {
  children: React.ReactNode;
}

export default function IngresoContainer({ children }: Props) {
  return (
    <main className="w-full h-screen min-h-[700px] flex justify-center items-center lg:grid lg:grid-cols-[450px,1fr] xl:grid-cols-[550px,1fr] ">
      <aside className="h-full hidden lg:block p-10 py-4 relative overflow-hidden">
        <Logo sloganOn={true} />
        <div className="absolute top-0 left-0 w-full h-full px-6 bg-main-black z-[-1] after:absolute after:inset-0 after:bg-[#101010a9]">
          <Image
            src={imagen}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-[50%,0px]"
          />
        </div>
      </aside>
      <section className="h-full px-4 lg:pl-[70px] lg:pr-0 xl:pl-[120px] w-full flex flex-col justify-center">
        <Link
          href="/"
          className="px-3 py-1 w-fit border-main-black border rounded-full flex items-center gap-2 border-opacity-55 absolute bottom-4 right-4 lg:right-10"
        >
          <span className="icon-[mdi--arrow-left-thin] text-main-black"></span>
          <span className="text-sm font-semibold text-secondary-black capitalize">
            inicio
          </span>
        </Link>
        {children}
      </section>
    </main>
  );
}
