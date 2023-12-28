/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "very_dark_gray": "hsl(0, 0%, 17%)",
        "dark_gray": "hsl(0, 0%, 59%)",
      },
      fontFamily:{
        "ribik": ["Ribik", "sans-serif"]
      },
      backgroundImage:{
        "bgdesktop": "url('/src/img/pattern-bg-desktop.png')",
        "bgmobile": "url('/src/img/pattern-bg-mobile.png')",
      },
      screens:{
        "mobile": "375px",
        "desktop": "1440px",
      }
    },
  },
  plugins: [],
}

