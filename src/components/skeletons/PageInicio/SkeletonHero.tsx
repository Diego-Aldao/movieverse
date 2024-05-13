import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonHero() {
  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-10 2xl:px-0 bg-secondary-black">
      <div className="contenido flex flex-col justify-end w-full h-full max-w-7xl mx-auto">
        <div className="flex flex-col w-full h-fit mb-28 gap-4 max-w-[500px] md:max-w-[600px] xl:max-w-[700px]">
          <header className="flex flex-col gap-2 lg:gap-4">
            <Skeleton width={60} height={20} />
            <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl  max-w-[300px] sm:max-w-[450px] lg:max-w-[550px]">
              <Skeleton width={"100%"} height={"100%"} />
            </h1>
          </header>
          <Skeleton height={25} width={64} count={3} inline className="mr-4" />
          <Skeleton count={4} height={10} />
          <button className="self-end">
            <Skeleton width={100} height={25} />
          </button>
        </div>
      </div>
    </div>
  );
}
