import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        black: "#000000",
        success: "#478778",
        successActive: "#0BDA51",
        danger: "#D2042D",
        dangerActive: "#F88379",
        school: "#063970",
        schoolActive: "#117cf0",
        mustMarkerd: "rgb(98, 191, 17)",
        restrictionMarked: "#ed2d2d",
      },
    },
  },
  plugins: [],
} satisfies Config;
