import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RedesSociales } from "@/types/localTypes";
import filterRedesSociales from "@/utils/filterRedesSociales";
import FetchDataClient from "@/data/fetchDataClient";
import { BASE_URL_MOVIE_DETAIL } from "@/constants/constants";
import SkeletonRedes from "@/components/skeletons/PagePeliculasSeries/SkeletonRedes";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";

interface Props {
  id: string | string[];
}

const iconosRedes: RedesSociales = {
  facebook: "icon-[mdi--facebook]",
  instagram: "icon-[mdi--instagram]",
  twitter: "icon-[mdi--twitter]",
  imdb: "icon-[simple-icons--imdb]",
  wikidata: "icon-[simple-icons--wikidata]",
};

export default function Redes({ id }: Props) {
  const { data: redes, loading } = FetchDataClient<RedesSociales>(
    `${BASE_URL_MOVIE_DETAIL}${id}/external_ids`
  );
  const [redesFiltradas, setRedesFiltradas] =
    useState<{ [x: string]: string }[]>();

  useEffect(() => {
    if (!redes) return;
    const redesFiltradas = filterRedesSociales(redes);
    setRedesFiltradas(redesFiltradas);
  }, [redes]);

  return (
    <CustomSection titulo="redes" asideSection={true}>
      {loading && <SkeletonRedes />}
      {redesFiltradas && (
        <ul className="redes flex gap-4">
          {redesFiltradas.map((red) => {
            let keyRedSocial = Object.keys(red)[0];
            let valueRedSocial = Object.values(red)[0];
            let icono = iconosRedes[keyRedSocial];
            return (
              <li key={keyRedSocial}>
                <Link
                  href={`https://www.${keyRedSocial}.com/${
                    keyRedSocial === "wikidata"
                      ? "wiki/"
                      : keyRedSocial === "imdb" && "title/"
                  }${valueRedSocial}`}
                  target="_blank"
                >
                  <span className={`${icono} text-main-white w-8 h-8`}></span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </CustomSection>
  );
}
