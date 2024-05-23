import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonMiniCard from "../cards/SkeletonMiniCard";

export default function SkeletonBusqueda() {
  return (
    <>
      <ul className="flex gap-4 justify-center">
        <Skeleton
          count={3}
          width={80}
          height={40}
          inline={true}
          className="mr-5 last:mr-0"
        />
      </ul>
      <div className="flex flex-col gap-8">
        <h2>
          <Skeleton height={30} />
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <SkeletonMiniCard cantidad={4} />
        </div>
      </div>
    </>
  );
}
