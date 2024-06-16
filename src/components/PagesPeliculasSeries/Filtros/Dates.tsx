"use client";
import React, { useEffect, useState } from "react";
import { DatePicker } from "@nextui-org/date-picker";
import {
  DateValue,
  parseDate,
  getLocalTimeZone,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { FiltrosFetch } from "@/types/localTypes";
import getTwoDigitsFromOne from "@/utils/getTwoDigitsFromOne";

interface Props {
  filtros: FiltrosFetch;
  setFiltros: React.Dispatch<React.SetStateAction<FiltrosFetch>>;
  initialFiltros: FiltrosFetch;
}

export default function Dates({ filtros, setFiltros, initialFiltros }: Props) {
  const fechaActual = new Date();
  const fechaFinal = new Date(fechaActual.setMonth(fechaActual.getMonth() + 6))
    .toISOString()
    .split("T")[0];
  const [value, setValue] = useState<DateValue>(parseDate(fechaFinal));
  const [dateFrom, setDateFrom] = useState<DateValue | null>(null);

  let formatter = useDateFormatter({ dateStyle: "medium" });

  useEffect(() => {
    if (filtros === initialFiltros) {
      setValue(parseDate(fechaFinal));
      setDateFrom(null);
    }
  }, [filtros]);

  const setearFilterDate = (
    año: number,
    mes: number,
    dia: number,
    nombreFiltro: string
  ) => {
    let dateFormateada = `${año}-${getTwoDigitsFromOne(
      mes
    )}-${getTwoDigitsFromOne(dia)}`;
    setFiltros({
      ...filtros,
      [nombreFiltro]: dateFormateada,
    });
  };

  useEffect(() => {
    if (!dateFrom) return;
    setearFilterDate(
      dateFrom.year,
      dateFrom.month,
      dateFrom.day,
      "primary_release_date.gte"
    );
  }, [dateFrom]);

  useEffect(() => {
    if (!value || !setFiltros || !filtros) return;
    setearFilterDate(
      value.year,
      value.month,
      value.day,
      "primary_release_date.lte"
    );
  }, [value]);

  return (
    <div className="flex flex-col gap-2 gap-x-8 w-full sm:grid sm:grid-cols-2 lg:flex lg:row-span-2 sm:col-span-2 lg:col-span-1">
      <span className="w-full sm:col-span-2 first-letter:uppercase text-sm">
        fechas de estreno
      </span>
      <div className="relative w-full max-w-[400px] sm:max-w-full ">
        <p className="text-default-500  absolute top-0 right-0 text-xs">
          {dateFrom
            ? formatter.format(dateFrom.toDate(getLocalTimeZone()))
            : "-"}
        </p>
        <DatePicker
          label="Desde"
          showMonthAndYearPickers
          labelPlacement={"outside"}
          value={dateFrom}
          onChange={setDateFrom}
        />
      </div>
      <div className="relative w-full max-w-[400px] sm:max-w-full 2xl:mt-6">
        <p className="text-default-500  absolute top-0 right-0 text-xs">
          {value && formatter.format(value.toDate(getLocalTimeZone()))}
        </p>
        <DatePicker
          label="Hasta"
          showMonthAndYearPickers
          labelPlacement={"outside"}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}
