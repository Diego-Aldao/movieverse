import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "var(--font-outfit)",
        cabin: "var(--font-cabin)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      colors: {
        "main-black": "#18191A",
        "secondary-black": "#242526",
        hover: "#3A3B3C",
        "main-white": "#E4E6EB",
        "secondary-white": "#B0B3B8",
        "main-color": "#cddc39",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
export default config;
