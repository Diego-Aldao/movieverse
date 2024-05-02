import Media from "@/components/PageID/SeriesYPeliculas/Media/Media";
import Reparto from "@/components/PageID/SeriesYPeliculas/Reparto/Reparto";
import Hero from "@/components/PageID/SeriesYPeliculas/Hero/Hero";
import Redes from "@/components/PageID/SeriesYPeliculas/Aside/Redes/Redes";

export default function DetallePelicula() {
  return (
    <main>
      <Hero />
      <section className="main-content px-4 md:px-8 lg:px-10 max-w-7xl mx-auto 2xl:px-0 pb-20 grid w-full gap-12 lg:grid-cols-[70%,30%] lg:gap-x-4">
        <Reparto />
        <Media />
        <aside className="w-full lg:row-start-1 lg:col-start-2">
          <Redes />
        </aside>
      </section>
    </main>
  );
}
