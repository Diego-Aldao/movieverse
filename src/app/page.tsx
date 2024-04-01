import Celebridades from "@/components/PageInicio/Celebridades/Celebridades";
import MainContent from "@/components/PageInicio/Hero/MainContent";
import MejoresSeries from "@/components/PageInicio/MejoresSeries/MejoresSeries";
import Tendencias from "@/components/PageInicio/Tendencias/Tendencias";
import MainButton from "@/components/buttons/MainButton";
import CustomSection from "@/containers/PageInicio.tsx/CustomSection";

export default function Home() {
  return (
    <main className="w-full">
      <section className="hero h-[110vh] min-h-[830px] relative">
        <span className="absolute top-28 md:top-32 lg:top-36 z-20 left-4 md:left-8 lg:left-10 uppercase text-xs md:text-sm bg-[#2425267e] py-2 px-4 w-fit rounded-full">
          últimos estrenos
        </span>
        <MainContent />
        <button className="absolute z-20 bottom-24 left-[calc(50%-50px)] lg:left-[calc(50%-65px)] flex items-center gap-1 py-2 lg:px-4 px-3">
          <span className="capitalize ml-auto md:text-lg lg:text-xl">
            explorar
          </span>
          <span className="icon-[mdi--arrow-down-thin] h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"></span>
        </button>
      </section>
      <Tendencias />
      <CustomSection titulo="las mejores series">
        <>
          <MejoresSeries />
          <MainButton
            icon="icon-[mdi--arrow-right-thin]"
            nombre="ver más series"
            destino="/series"
            customStyles="ml-auto md:text-lg px-4 md:px-6"
          />
        </>
      </CustomSection>
      <CustomSection
        titulo="celebridades del momento"
        titleCustomStyles="text-base sm:text-2xl"
      >
        <>
          <Celebridades />
          <MainButton
            icon="icon-[mdi--arrow-right-thin]"
            nombre="ver más celebridades"
            destino="/celebridades"
            customStyles=" ml-auto md:text-lg px-4 md:px-6"
          />
        </>
      </CustomSection>
    </main>
  );
}
