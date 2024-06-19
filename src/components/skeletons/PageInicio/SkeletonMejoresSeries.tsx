import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  cantidad: number;
}

export default function SkeletonMejoresSeries({ cantidad }: Props) {
  return (
    <section className="flex flex-col gap-12">
      <div className="main-card hidden sm:block h-[30vw] xl:h-[25vw]">
        <Skeleton height={"100%"} width={"100%"} />
      </div>
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array(cantidad)
          .fill(0)
          .map((_, i) => (
            <div className="max-w-[370px] mx-auto block w-full h-32" key={i}>
              <Skeleton height={"100%"} width={"100%"} />
            </div>
          ))}
      </div>
    </section>
  );
}
