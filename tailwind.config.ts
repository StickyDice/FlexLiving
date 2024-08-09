import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js.ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js.ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js.ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js.ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "191": "766px",
        "360": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
