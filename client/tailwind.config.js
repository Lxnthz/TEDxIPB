/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monts: ['"Montserrat"', 'sans-serif'],
        arimo: ["Arimo", 'sans-serif']
      },
      backgroundImage: {
        aboutTEDxBG: "url('/src/assets/PNGComponents/about-tedx-bg.png')",
        redThemeBG: "url('/src/assets/PNGComponents/redBGnoFilter.png')",
        homeTopBG: "url('/src/assets/PNGComponents/homepage-bg-one.png')",
        homeMidBG: "url('/src/assets/PNGComponents/homepage-bg-two.png')",
        homeBotBG: "url('/src/assets/PNGComponents/homepage-bg-three.png')",
        greenOutlineBG: "url('/src/assets/PNGComponents/green-outline.png')",
        speakersNameBG: "url('/src/assets/PNGComponents/speakers-name.png')",
      },
    },
  },
  plugins: [],
}
