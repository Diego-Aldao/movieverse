import Favoritos from "./Favoritos";
import Guardados from "./Guardados";

export default function Coleccion() {
  return (
    <div className="col-start-1 w-full flex flex-col gap-12">
      <Favoritos />
      <Guardados />
    </div>
  );
}
