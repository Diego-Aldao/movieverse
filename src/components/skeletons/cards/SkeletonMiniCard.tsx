import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  cantidad: number;
  customSizes?: string;
}

export default function SkeletonMiniCard({ cantidad, customSizes }: Props) {
  return (
    <>
      {Array(cantidad)
        .fill(0)
        .map((_, i) => (
          <article
            className={`w-full ${
              customSizes ? customSizes : "h-[140px] md:max-w-[400px]"
            }`}
            key={i}
          >
            <Skeleton height={"100%"} />
          </article>
        ))}
    </>
  );
}
