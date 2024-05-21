interface Props {
  currentFiltro: string;
  valorFiltro: string;
  handleClick: (valorFiltro: string, nombreFiltro: string) => void;
  nombreFiltro: string;
  categoriaFiltro: string;
}

export default function ItemFiltro({
  currentFiltro,
  valorFiltro,
  handleClick,
  nombreFiltro,
  categoriaFiltro,
}: Props) {
  return (
    <span
      className={`px-4 text-xs lg:text-sm py-1 capitalize  rounded-full transition-colors cursor-pointer ${
        currentFiltro === valorFiltro
          ? "bg-main-color text-main-black"
          : "bg-[#b0b3b82c]"
      }`}
      onClick={() => {
        handleClick(valorFiltro, categoriaFiltro);
      }}
    >
      {nombreFiltro}
    </span>
  );
}
