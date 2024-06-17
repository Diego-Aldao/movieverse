"use client";
import React, { useEffect, useState } from "react";
import { Slider, SliderValue } from "@nextui-org/slider";
import { FiltrosFetch } from "@/types/localTypes";

interface Props {
  filtros: FiltrosFetch;
  setFiltros: React.Dispatch<React.SetStateAction<FiltrosFetch>>;
  initialFiltros: FiltrosFetch;
}

export default function Ranges({ filtros, setFiltros, initialFiltros }: Props) {
  const [votos, setVotos] = useState<SliderValue>(0);
  const [puntuacion, setPuntuacion] = useState<SliderValue>([0, 10]);
  const [duracion, setDuracion] = useState<SliderValue>([0, 360]);

  useEffect(() => {
    if (filtros === initialFiltros) {
      setVotos(0);
      setPuntuacion([0, 10]);
      setDuracion([0, 360]);
    }
  }, [filtros]);

  useEffect(() => {
    if (Array.isArray(votos)) return;
    setFiltros({
      ...filtros,
      ["vote_count.gte"]: votos,
    });
  }, [votos]);

  useEffect(() => {
    if (!Array.isArray(puntuacion)) return;
    let nuevosFiltros = { ...filtros };

    puntuacion.forEach((numero, i) => {
      if (i === 0) {
        nuevosFiltros["vote_average.gte"] = numero;
      } else {
        nuevosFiltros["vote_average.lte"] = numero;
      }
    });
    setFiltros(nuevosFiltros);
  }, [puntuacion]);

  useEffect(() => {
    if (!Array.isArray(duracion)) return;
    let nuevosFiltros = { ...filtros };

    duracion.forEach((numero, i) => {
      if (i === 0) {
        nuevosFiltros["with_runtime.gte"] = numero;
      } else {
        nuevosFiltros["with_runtime.lte"] = numero;
      }
    });
    setFiltros(nuevosFiltros);
  }, [duracion]);

  return (
    <>
      <div className="relative w-full">
        <p className="text-secondary-white text-xs absolute top-0 right-0 flex items-center gap-1">
          <>
            {Array.isArray(puntuacion) && (
              <span className="text-inherit">
                De {puntuacion.map((minutos) => `${minutos} `).join(" a ")}
              </span>
            )}
            <span className="icon-[mdi--star] text-inherit"></span>
          </>
        </p>
        <Slider
          size="md"
          step={1}
          color="primary"
          label="puntuacion"
          hideValue={true}
          showSteps={true}
          maxValue={10}
          minValue={0}
          value={puntuacion}
          onChange={setPuntuacion}
          showTooltip={true}
          marks={[
            {
              value: 0,
              label: "0",
            },
            {
              value: 5,
              label: "5",
            },
            {
              value: 10,
              label: "10",
            },
          ]}
          tooltipProps={{
            offset: 1,
            placement: "bottom",
            classNames: {
              base: [
                // arrow color
                "before:bg-main-color",
              ],
              content: [
                "bg-main-color rounded-full py-1 px-3 text-xs text-main-black font-outfit font-semibold",
              ],
            },
          }}
          classNames={{
            base: "text-main-white font-outfit capitalize",
            filler: "bg-main-color",
            step: "data-[in-range=true]:bg-main-black",
            mark: "text-xs",
          }}
          renderThumb={(props) => (
            <div
              {...props}
              className="group p-[2px] top-1/2 bg-main-color rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
            >
              <span className="transition-transform bg-main-black rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80" />
            </div>
          )}
        />
      </div>
      <div className="relative w-full">
        <p className="text-secondary-white text-xs absolute top-0 right-0">
          {votos} votos
        </p>
        <Slider
          size="md"
          step={50}
          color="primary"
          label="cantidad de votos"
          hideValue={true}
          showSteps={true}
          maxValue={500}
          minValue={0}
          value={votos}
          onChange={setVotos}
          showTooltip={true}
          marks={[
            {
              value: 0,
              label: "0",
            },
            {
              value: 250,
              label: "250",
            },
            {
              value: 500,
              label: "500",
            },
          ]}
          tooltipProps={{
            offset: 1,
            placement: "bottom",
            classNames: {
              base: [
                // arrow color
                "before:bg-main-color",
              ],
              content: [
                "bg-main-color rounded-full py-1 px-3 text-xs text-main-black font-outfit font-semibold",
              ],
            },
          }}
          classNames={{
            base: "max-w-md text-main-white font-outfit capitalize",
            track: "border-s-secondary-black/35",
            filler: "bg-main-color",
            step: "data-[in-range=true]:bg-black",
            mark: "text-xs",
          }}
          renderThumb={(props) => (
            <div
              {...props}
              className="group p-[2px] top-1/2 bg-main-color rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
            >
              <span className="transition-transform bg-main-black rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80" />
            </div>
          )}
        />
      </div>
      <div className="relative w-full sm:col-span-2 max-w-2xl  lg:max-w-full lg:col-span-2">
        <p className="text-secondary-white text-xs absolute top-0 right-0 ">
          {Array.isArray(duracion) && (
            <>
              Desde {duracion.map((minutos) => `${minutos} `).join(" hasta ")}{" "}
              minutos
            </>
          )}
        </p>
        <Slider
          size="md"
          step={15}
          color="primary"
          label="duracion"
          hideValue={true}
          showSteps={true}
          maxValue={360}
          minValue={0}
          value={duracion}
          onChange={setDuracion}
          showTooltip={true}
          marks={[
            {
              value: 0,
              label: "0",
            },
            {
              value: 120,
              label: "120",
            },
            {
              value: 240,
              label: "240",
            },
            {
              value: 360,
              label: "360",
            },
          ]}
          tooltipProps={{
            offset: 1,
            placement: "bottom",
            classNames: {
              base: [
                // arrow color
                "before:bg-main-color",
              ],
              content: [
                "bg-main-color rounded-full py-1 px-3 text-xs text-main-black font-outfit font-semibold",
              ],
            },
          }}
          classNames={{
            base: "text-main-white font-outfit capitalize",
            filler: "bg-main-color",
            step: "data-[in-range=true]:bg-main-black",
            mark: "text-xs",
          }}
          renderThumb={(props) => (
            <div
              {...props}
              className="group p-[2px] top-1/2 bg-main-color rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
            >
              <span className="transition-transform bg-main-black rounded-full w-3 h-3 block group-data-[dragging=true]:scale-80" />
            </div>
          )}
        />
      </div>
    </>
  );
}
