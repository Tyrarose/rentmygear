/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    },
    colors: {  
      'brand-blue': '#4b5ae4', 
      'brand-blue-transparent': 'rgba(75, 90, 228, 0.17)', 
      'brand-white': '#fbfcf1',
      'brand-yellow': '#ffc44d',
      'brand-orange': '#ef991b',
      'brand-yellow-transparent': 'rgba(255, 196, 77, 0.17)', 
      'gray-100': 'rgba(255, 196, 77, 0.1)',
      red: {
        five: "#E55039", 
        six: "#EC5F4A",    
        seven: "#FF6F61",  
        eight: "#E4C1BD", 
      },
      yellow: {
        five: "#FFBE00",
        six: "#FFE028",
        seven: "#FFEC7E", 
        eight: "#F1EED5", 
      },
      green: {
        five: "#4CAF50",   
        six: "#66CE78",  
        seven: "#85D893", 
        eight: "#C6EDCD", 
      },
      blue: {
        five: "#0069BC",   
        six: "#2196F3",  
        seven: "#3BB5FF", 
        eight: "#AACFE4", 
      },
      violet: {
        five: "#9C27B0",   
        six: "#B646D8",  
        seven: "#C276D9",  
        eight: "#E0CEE5", 
      },
      orange: {
        five: "#FF9800",   
        six: "#FFB728",  
        seven: "#FFC552",  
        eight: "#EFE1C6",  
      },
      black: {
        five: "#000000",   
        six: "#1A1F28",  
        seven: "#333333", 
      },
      white: "#FFFFFF",
      pink: "#FF619B",
      brown: {
        five: "#8B4513",   
        six: "#A5643B", 
        seven: "#C88E69", 
        eight: "#EAD1C2", 
      },
      gray: {
        five: "#9E9E9E",   
        six: "#B8BDC6",  
        seven: "#DEDCD8", 
        eight: "#F6F4F7",  
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

