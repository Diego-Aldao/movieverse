import React from "react";

interface Props {
  biografia: string;
}

export default function Biografia({ biografia }: Props) {
  const biografiaNecesaria = biografia.split("\n");
  return (
    <div className="biografia flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold capitalize">
        biografía
      </h2>
      <p className="max-w-[650px] xl:max-w-[750px]">{biografiaNecesaria[0]}</p>
    </div>
  );
}
