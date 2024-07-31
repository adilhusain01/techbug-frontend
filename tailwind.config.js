/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#171717",
        darkgray: "#acacac",
        gold: "#f9ca06",
        goldenrod: {
          "100": "#f1cb47",
          "200": "#c79600",
        },
        white: "#fff",
        "text-default-secondary": "#757575",
        "icon-default-tertiary": "#b3b3b3",
        "border-default-default": "#d9d9d9",
        dimgray: {
          "100": "#696565",
          "200": "#5a5a5a",
        },
        "text-default-default": "#1e1e1e",
        whitesmoke: "#f6f6f6",
        "stroke-1": "#2e2e2e",
        slateblue: "rgba(33, 71, 192, 0.2)",
        black: "#000",
      },
      spacing: {
        "space-200": "8px",
      },
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "body-base": "Inter",
      },
      borderRadius: {
        "37xl": "56px",
        "117xl": "136px",
        xl: "20px",
        "11xl": "30px",
        "13xl": "32px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      "77xl": "6rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      "19xl": "2.375rem",
      "11xl": "1.875rem",
      "4xl": "1.438rem",
      "49xl": "4.25rem",
      "35xl": "3.375rem",
      "22xl": "2.563rem",
      "23xl": "2.625rem",
      "51xl": "4.375rem",
      "37xl": "3.5rem",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
