import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonRedes() {
  return (
    <div>
      <Skeleton width={120} height={25} />
      <Skeleton
        count={5}
        width={35}
        height={35}
        inline
        className="mr-4 last:mr-0 mt-4 mb-10"
      />
    </div>
  );
}
