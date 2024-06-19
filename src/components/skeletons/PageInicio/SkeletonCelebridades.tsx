import React from "react";
import SkeletonMainCard from "../cards/SkeletonMainCard";

interface Props {
  cantidad: number;
}

export default function SkeletonCelebridades({ cantidad }: Props) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5  gap-2 sm:gap-5 sm:gap-y-10 md:gap-y-12 gap-y-7 xl:gap-y-16">
      <SkeletonMainCard cantidad={cantidad} />
    </section>
  );
}
