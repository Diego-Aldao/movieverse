"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ColeccionContextProvider } from "@/context/ColeccionContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ColeccionContextProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ColeccionContextProvider>
  );
}
