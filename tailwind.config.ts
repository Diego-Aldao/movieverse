import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: "var(--font-neue-montreal)",
      },
      colors: {
        "main-black": "#18191A",
        "secondary-black": "#242526",
        hover: "#3A3B3C",
        "main-white": "#E4E6EB",
        "secondary-white": "#B0B3B8",
        "main-color": "#ccc2dc",
      },
    },
  },
  plugins: [],
};
export default config;
