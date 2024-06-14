import Link from "next/link";

interface Props {
  icon: string;
  nombre: string;
  destino: string;
  customStyles?: string;
  customIconStyles?: string;
}
export default function MainButton({
  icon,
  nombre,
  destino,
  customStyles,
  customIconStyles,
}: Props) {
  return (
    <Link
      href={destino}
      className={`w-fit text-main-white self-end px-3 py-1 flex items-center gap-2 ${customStyles} group hover:border-main-white/75 transition-[border-color,box-shadow] cursor-pointer shadow-md shadow-transparent hover:shadow-main-black/50 bg-main-black/35 rounded-full border border-main-white/35 backdrop-blur-sm`}
    >
      <span className="first-letter:uppercase text-inherit md:pb-[2px]">
        {nombre}
      </span>
      <span
        className={`${icon} h-4 w-4 ${customIconStyles} text-inherit transition-transform group-hover:translate-x-1 translate-x-0`}
      ></span>
    </Link>
  );
}
