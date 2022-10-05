/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('https://i.postimg.cc/LRVrC8wT/san-Francisco.jpg')",
        'sanFranciscoDesktop': "url('https://i.postimg.cc/rcTBNrns/san-Francisco-Desktop.jpg')",
        'yosemite': "url('https://i.postimg.cc/VvN7qcnh/yosemite.jpg')",
        'LA': "url('https://i.postimg.cc/2C3RBNHx/LA.jpg')",
        'seattle': "url('https://i.postimg.cc/pX6SBy0J/seattle.jpg')",
        'new_york': "url('https://i.postimg.cc/d3Qf5CP4/new-york.jpg')",
        'norway': "url('https://i.postimg.cc/NFNzS0QY/norway.jpg')",
        'sydney': "url('https://i.postimg.cc/66BFWk2n/sydney.jpg')",
        'miami': "url('https://i.postimg.cc/pxYtwZhK/miami.jpg')",
        'switzerland': "url('https://i.postimg.cc/254XmGC0/sw-itzerland.jpg')",
        'bali': "url('https://i.postimg.cc/SkgbsxGs/bali.jpg')",
        'chicago': "url('https://i.postimg.cc/51MVKG0x/chicago.jpg')",
        'europe': "url('https://i.postimg.cc/RS5j86vP/europe.jpg')",
        'iceland': "url('https://i.postimg.cc/4JhDBbR7/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};