import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonMainCard from "../cards/SkeletonMainCard";

export default function SkeletonMultimedia() {
  return (
    <div className="px-4 md:px-8 lg:px-10 bg-secondary-black overflow-hidden h-screen min-h-[700px]">
      <div className="hero max-w-7xl mx-auto md:min-h-[500px] lg:min-h-[600px] min-h-[700px] flex items-end md:items-start">
        <div className="hero-content flex flex-col gap-2 w-full md:pt-36 lg:pt-48 ">
          <Skeleton width={40} height={20} />
          <h1 className="w-full max-w-[400px] md:max-w-[600px] h-10">
            <Skeleton width={"100%"} height={"100%"} />
          </h1>
          <Skeleton width={250} height={10} />

          <Skeleton
            count={3}
            width={50}
            height={20}
            className="mr-4 my-2"
            inline
          />
          <p className="w-full max-w-[400px] md:max-w-[600px]">
            <Skeleton count={4} height={10} />
          </p>
        </div>
      </div>
      <div className="main-section grid lg:grid-cols-[70%,30%] max-w-7xl mx-auto mt-10">
        <div className="reparto grid grid-cols-6 gap-4  w-[900px] h-fit">
          <span className="col-span-full">
            <Skeleton width={200} height={30} />
          </span>
          <SkeletonMainCard cantidad={6} customSizes="h-[200px]" />
        </div>
        <div className="aside w-full h-[400px] relative z-40 bg-secondary-black pl-8 hidden lg:block">
          <Skeleton width={120} height={25} />
          <Skeleton
            count={5}
            width={35}
            height={35}
            inline
            className="mr-4 last:mr-0 mt-4 mb-10"
          />
          <Skeleton width={150} height={15} />
          <Skeleton width={150} height={10} />
        </div>
      </div>
    </div>
  );
}
