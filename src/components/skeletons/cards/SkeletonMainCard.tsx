import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  cantidad: number;
  customSizes?: string;
}

export default function SkeletonMainCard({ cantidad, customSizes }: Props) {
  return (
    <>
      {Array(cantidad)
        .fill(0)
        .map((_, i) => (
          <article
            className={`w-full ${
              customSizes
                ? customSizes
                : "h-[65vw] sm:h-[44vw] md:h-[32vw] xl:h-[335px]"
            }`}
            key={i}
          >
            <Skeleton height={"100%"} />
          </article>
        ))}
    </>
  );
}
