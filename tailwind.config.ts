import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#061c39",
        navy: "#082c55",
        cyan: "#00d6df",
        mist: "#eefbfc",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        display: ["var(--font-space)", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 214, 223, .18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
