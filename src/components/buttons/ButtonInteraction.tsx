import React from "react";

interface Props {
  isDropdown?: boolean;
  nombre: string;
  icono: string;
  handleInteraccion: (nombre: string) => void;
  itemExiste?: boolean;
}

interface PropsButton
  extends Pick<
    Props,
    "nombre" | "icono" | "handleInteraccion" | "itemExiste"
  > {}

function ButtonFlex({
  nombre,
  icono,
  handleInteraccion,
  itemExiste,
}: PropsButton) {
  let nombreFinal = nombre === "guardar" && itemExiste ? "guardado" : nombre;
  return (
    <span
      onClick={() => {
        handleInteraccion(nombre === "guardar" ? "guardados" : "favoritos");
      }}
      className={`flex items-center justify-between gap-1 md:gap-2 min-w-[97px] md:min-w-[122px] hover:border-main-white/75 transition-[border-color,box-shadow] cursor-pointer hover:shadow-md hover:shadow-main-black/50 p-1 bg-main-black/35 rounded-full border border-main-white/35 px-3 md:px-4 backdrop-blur-sm ${
        itemExiste &&
        nombre === "favorito" &&
        "text-red-500 border-red-600 hover:border-red-500"
      } ${
        itemExiste &&
        nombre === "guardar" &&
        "text-yellow-500 border-yellow-600 hover:border-yellow-500"
      }`}
    >
      <span className="text-xs capitalize sm:inline-block md:text-sm text-inherit">
        {nombreFinal}
      </span>
      <span className={`${icono} h-3 w-3 md:w-4 md:h-4 text-inherit`}></span>
    </span>
  );
}
function ButtonDropdown({
  nombre,
  icono,
  handleInteraccion,
  itemExiste,
}: PropsButton) {
  let nombreFinal = nombre === "guardar" && itemExiste ? "guardado" : nombre;

  return (
    <span
      onClick={() => {
        handleInteraccion(nombre === "guardar" ? "guardados" : "favoritos");
      }}
      className={`w-full cursor-pointer text-xs capitalize py-1 px-3 min-w-[113px] md:min-w-[124px] flex transition-[background-color,border-color,box-shadow] justify-between shadow-md shadow-transparent hover:shadow-main-black/35 hover:bg-main-black/35 border-main-white/15 hover:border-main-white/50 border rounded-md md:text-sm items-center ${
        itemExiste &&
        nombre === "favorito" &&
        "text-red-500 border-red-600 hover:border-red-500"
      } ${
        itemExiste &&
        nombre === "guardar" &&
        "text-yellow-500 border-yellow-600 hover:border-yellow-500"
      }`}
    >
      <span className=" text-inherit font-medium">{nombreFinal}</span>
      <span className={`${icono} ml-5 text-inherit font-medium`}></span>
    </span>
  );
}

export default function ButtonInteraction({
  isDropdown,
  icono,
  nombre,
  handleInteraccion,
  itemExiste,
}: Props) {
  return isDropdown ? (
    <ButtonDropdown
      nombre={nombre}
      icono={icono}
      handleInteraccion={handleInteraccion}
      itemExiste={itemExiste}
    />
  ) : (
    <ButtonFlex
      nombre={nombre}
      icono={icono}
      handleInteraccion={handleInteraccion}
      itemExiste={itemExiste}
    />
  );
}
