import Link from "next/link";
import React from "react";

interface Props {
  sloganOn?: boolean;
}

export default function Logo({ sloganOn }: Props) {
  return (
    <Link href="/" className="w-fit inline-block">
      <h3 className="capitalize text-main-color  text-2xl lg:text-3xl xl:text-4xl [font-family:var(--font-outfit)] font-bold w-fit">
        movieverse
      </h3>
      {sloganOn && (
        <span className="text-[10px] lg:text-xs uppercase text-main-white font-me italic relative -top-1">
          cada historia, un universo único
        </span>
      )}
    </Link>
  );
}
