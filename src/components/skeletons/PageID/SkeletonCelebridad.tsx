import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCelebridad() {
  return (
    <div className="w-full h-screen min-h-[700px] px-4 md:px-8 lg:px-10 overflow-hidden md:grid md:grid-cols-[250px,1fr] lg:grid-cols-[300px,_1fr] xl:grid-cols-[350px,_1fr] sm:pt-24 lg:pt-48 sm:gap-x-4 max-w-7xl mx-auto 2xl:px-0">
      <div className="w-full sm:grid grid-cols-[250px,1fr] md:grid-cols-1 gap-4">
        <div className="imagen min-h-[480px] h-[120vw] sm:h-[500px] md:h-[430px]  lg:min-h-[450px] xl:min-h-[525px] sm:min-h-[370px] flex flex-col items-center justify-end sm:items-start">
          <Skeleton
            width={40}
            height={40}
            count={3}
            inline
            className="mr-8 last:mr-0 mb-10"
          />
          <h1 className="sm:hidden">
            <Skeleton width={200} height={20} />
          </h1>
          <span className="sm:hidden">
            <Skeleton width={150} height={15} />
          </span>
        </div>
        <div className="flex flex-col gap-4 md:col-start-1">
          <h1 className="hidden sm:block md:hidden">
            <Skeleton width={200} height={32} />
          </h1>

          <ul className="sub-info flex flex-col gap-4 mt-10 sm:mt-0">
            <li>
              <Skeleton width={150} height={15} />
              <Skeleton width={100} height={10} />
            </li>
            <li>
              <Skeleton width={150} height={15} />
              <Skeleton width={100} height={10} />
            </li>

            <li>
              <Skeleton width={150} height={15} />
              <Skeleton width={100} height={10} />
            </li>

            <li>
              <Skeleton width={150} height={15} />
              <Skeleton width={100} height={10} />
            </li>

            <li>
              <Skeleton width={150} height={15} />
              <Skeleton width={100} height={10} />
            </li>
          </ul>
        </div>
      </div>

      <div className="biografia sm:mt-10 md:mt-0 col-span-2 hidden sm:flex flex-col gap-4 md:col-start-2 md:row-start-1">
        <h1 className="h-5 md:h-8">
          <Skeleton height={"100%"} width={250} />
        </h1>
        <span className="hidden md:block">
          <Skeleton height={10} width={50} />
        </span>
        <Skeleton count={6} width={"90%"} height={10} />
        <div className="participaciones hidden md:flex flex-col gap-4 md:mt-20">
          <h2>
            <Skeleton height={20} width={150} />
          </h2>
          <div className="grid-participaciones grid grid-cols-3 gap-4 lg:grid-cols-4">
            {Array(12)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-[10vw] lg:h-[8vw]">
                  <Skeleton width={"100%"} height={"100%"} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
