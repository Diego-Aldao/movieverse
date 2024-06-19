import React from "react";
import Link from "next/link";
import { RedesSociales } from "@/types/localTypes";
import filterRedesSociales from "@/utils/filterRedesSociales";
import { BASE_URL_MOVIE_DETAIL } from "@/constants/constants";
import CustomSection from "@/components/containers/PageDetalleMultimedia/CustomSection";
import fetchData from "@/services/fetchData";

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

export default async function Redes({ id }: Props) {
  const redes = await fetchData<RedesSociales>(
    `${BASE_URL_MOVIE_DETAIL}${id}/external_ids`
  );
  const redesFiltradas = filterRedesSociales(redes);

  return (
    <CustomSection titulo="redes" asideSection={true}>
      {redesFiltradas.length >= 1 && (
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
                      : keyRedSocial === "imdb"
                      ? "title/"
                      : ""
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
