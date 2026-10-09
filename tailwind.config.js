/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        slate: {
          850: "#172033",
          950: "#030712",
        },
        pearl: "#f8fafc",
        alabaster: "#f1f5f9",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"],
      },
      boxShadow: {
        'soft-xl': '0 20px 40px -15px rgba(15, 23, 42, 0.05), 0 0 1px 1px rgba(15, 23, 42, 0.03)',
        'soft-2xl': '0 25px 60px -20px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
};
