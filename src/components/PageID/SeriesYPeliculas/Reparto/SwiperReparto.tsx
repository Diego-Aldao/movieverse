"use client";
import React, { ReactNode } from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

interface Props {
  children: ReactNode;
}

export default function SwiperReparto({ children }: Props) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.3}
      breakpoints={{
        640: {
          slidesPerView: 4.2,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
      }}
      className="w-full lg:min-h-[285px] xl:min-h-[315px]"
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
}
