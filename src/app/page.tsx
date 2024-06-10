import Celebridades from "@/components/PageInicio/Celebridades/Celebridades";
import Hero from "@/components/PageInicio/Hero/Hero";
import MejoresSeries from "@/components/PageInicio/MejoresSeries/MejoresSeries";
import Tendencias from "@/components/PageInicio/Tendencias/Tendencias";
import MainButton from "@/components/buttons/MainButton";
import CustomSection from "@/components/containers/CustomSection";
import SkeletonCelebridades from "@/components/skeletons/PageInicio/SkeletonCelebridades";
import SkeletonMejoresSeries from "@/components/skeletons/PageInicio/SkeletonMejoresSeries";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Tendencias />
      <CustomSection titulo="las mejores series">
        <>
          <Suspense fallback={<SkeletonMejoresSeries cantidad={20} />}>
            <MejoresSeries />
          </Suspense>
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
        titleCustomSizes="sm:text-2xl"
      >
        <>
          <Suspense fallback={<SkeletonCelebridades cantidad={20} />}>
            <Celebridades />
          </Suspense>
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
