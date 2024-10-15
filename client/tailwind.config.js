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
      backgroundSize: {
        'full': '100% 100%',
      },
      backgroundImage: {
        aboutTEDxBG: "url('/src/assets/PNGComponents/about-tedx-bg.png')",
        aboutTEDxBGdesktop: "url('/src/assets/PNGComponents/about-tedx-bg-desktop.png')",
        redThemeBG: "url('/src/assets/PNGComponents/redBGnoFilter.png')",
        homeTopBG: "url('/src/assets/PNGComponents/homepage-bg-one.png')",
        homeMidBG: "url('/src/assets/PNGComponents/homepage-bg-two.png')",
        homeBotBG: "url('/src/assets/PNGComponents/homepage-bg-three.png')",
        greenOutlineBG: "url('/src/assets/PNGComponents/green-outline.png')",
        speakersNameBG: "url('/src/assets/PNGComponents/speakers-name.png')",
        redBackgroundFade: "url('/src/assets/PNGComponents/red-header-to-transparent.png')",
        intersectionFade: "url('/src/assets/PNGComponents/intersection-fade.png')",
        highwayFade: "url('/src/assets/PNGComponents/highway.png')",
        trafficFade: "url('/src/assets/PNGComponents/traffic-fade.png')",
      },
    },
  },
  plugins: [],
}
