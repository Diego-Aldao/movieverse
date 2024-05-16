import Link from "next/link";
import React from "react";

interface Props {
  sloganOn?: boolean;
}

export default function Logo({ sloganOn }: Props) {
  return (
    <Link href="/">
      <h3 className="capitalize text-main-color  text-2xl lg:text-3xl xl:text-4xl [font-family:var(--font-outfit)] font-bold">
        movieverse
      </h3>
      {sloganOn && (
        <span className="text-[10px] lg:text-xs uppercase text-sec text-secondary-white font-semibold italic relative -top-1">
          tu guia del entretenimiento
        </span>
      )}
    </Link>
  );
}
