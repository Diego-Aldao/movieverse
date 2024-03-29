import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface Props {
  icon: string;
  nombre: string;
  destino: string;
}
export default function MainButton({ icon, nombre, destino }: Props) {
  const [ref, inView] = useInView({ threshold: 0 });
  return (
    <Link
      href={destino}
      ref={ref}
      className={`w-fit transition-all text-main-white self-end relative px-3 py-2 lg:py-1 text-xs bg-[#2425267e] border-main-color border-opacity-50 border rounded-full md:px-4 md:text-sm flex items-center gap-2 delay-[110ms] ${
        inView ? "left-0 opacity-100" : "-left-16 opacity-0"
      }`}
    >
      <span className="first-letter:uppercase text-main-color font-medium lg:text-lg">
        {nombre}
      </span>
      <span className={`${icon} h-4 w-4 lg:h-6 lg:w-6 text-main-color`}></span>
    </Link>
  );
}
