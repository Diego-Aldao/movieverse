import { ExternalIDS } from "@/types/fetchTypes";
import { RedesSociales } from "@/types/localTypes";
import Link from "next/link";
import React from "react";

interface Props {
  redes: ExternalIDS;
}

const iconosRedes: RedesSociales = {
  instagram: "icon-[mdi--instagram]",
  twitter: "icon-[mdi--twitter]",
  imdb: "icon-[simple-icons--imdb]",
};

export default function Redes({ redes }: Props) {
  const redesFiltradas = Object.entries(redes)
    .filter(
      ([key, value]) =>
        key === "twitter_id" || key === "instagram_id" || key === "imdb_id"
    )
    .map(([plataforma, id]) => {
      if (!id) return;
      return {
        plataforma: plataforma.replace("_id", ""),
        id,
      };
    });

  return (
    <ul className="redes flex gap-8 sm:gap-4">
      {redesFiltradas.map((red) => {
        if (!red) return;
        return (
          <li key={red.plataforma}>
            <Link
              href={`https://www.${red.plataforma}.com/${red.id}`}
              target="_blank"
            >
              <span className={`${iconosRedes[red.plataforma]} w-8 h-8`}></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
