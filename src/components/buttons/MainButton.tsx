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
      className={`w-fit text-main-white self-end px-3 py-1 bg-[#2425267e] border-main-white border-opacity-20 border rounded-full flex items-center gap-2 hover:border-opacity-80 transition-colors ${customStyles} group`}
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
