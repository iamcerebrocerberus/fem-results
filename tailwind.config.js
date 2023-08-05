/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    colors: {
      lightred: "hsl(0, 100%, 67%)",
      orangeyyellow: "hsl(39, 100%, 56%)",
      greenteal: "hsl(166, 100%, 37%)",
      cobaltblue: "hsl(234, 85%, 45%)",
      lightslateblue: "hsl(252, 100%, 67%)",
      lightroyalblue: "hsla(241, 81%, 54%)",
      violetblue: "hsla(256, 72%, 46%, 1)",
      persianblue: "hsla(241, 72%, 46%, 0)",
      white: "hsl(0, 0%, 100%)",
      paleblue: "hsl(221, 100%, 96%)",
      lightlavender: "hsl(241, 100%, 89%)",
      darkgrayblue: "hsl(224, 30%, 27%)",
    },
    fontFamily: {
      sans: ["Hanken Grotesk", "sans-serif"],
    },
    fontWeight: {
      medium: "500",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      backgroundImage: {
        "val-gradient":
          "linear-gradient(180deg, hsla(256, 72%, 46%, 1), hsl(241, 81%, 54%))",
        "back-gradient": "linear-gradient(180deg, hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
      },
    },
  },
  plugins: [],
};
