import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  mediaType: string;
}

export default function SkeletonMedia({ mediaType }: Props) {
  return (
    <div
      className={`media-content grid gap-4 ${
        mediaType === "posters"
          ? "sm:grid-cols-2 min-h-[1000px] sm:min-h-[460px] md:min-h-[510px] lg:min-h-[440px] xl:min-h-[570px]"
          : "min-h-[400px] sm:min-h-[620px] md:min-h-[730px] lg:min-h-[640px] xl:min-h-[800px]"
      }`}
    >
      <div
        className={`current-media rounded-sm overflow-hidden border-2 border-secondary-black md:max-w-full lg:min-h-0 w-full h-[50vw] lg:h-[36vw] 2xl:h-[500px] md:max-h-full mx-auto ${
          mediaType === "posters" && "max-w-[400px] max-h-[600px]"
        }`}
      >
        <Skeleton width={"100%"} height={"100%"} />
      </div>
      <div
        className={`grid-media grid grid-cols-3 sm:grid-cols-4 gap-2 content-evenly md:gap-y-4 ${
          mediaType === "wallpapers" && "sm:grid-cols-4"
        }`}
      >
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-full h-[15vw] md:h-[10vw] lg:h-[8vw] xl:h-[110px]"
            >
              <Skeleton width={"100%"} height={"100%"} />
            </div>
          ))}
      </div>
    </div>
  );
}
