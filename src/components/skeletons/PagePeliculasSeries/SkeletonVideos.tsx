import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonVideos() {
  return (
    <div className="flex flex-col gap-8">
      <span className="h-6">
        <Skeleton width={"100%"} height={"100%"} />
      </span>
      <div className="h-[50vw] w-full md:h-[40vw] lg:h-[450px]">
        <Skeleton width={"100%"} height={"100%"} />
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-[15vw] sm:h-[12vw] lg:h-[130px]">
              <Skeleton width={"100%"} height={"100%"} />
            </div>
          ))}
      </div>
    </div>
  );
}
