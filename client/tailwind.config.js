const { transform } = require("lodash");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
        custom: ['Macan', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'translate-rotate': 'translateThenRotate1 1s ease-in-out forwards ', // Define animation class 
        'reverse-translate-rotate': 'reverseRotate1 10s, ease-in-out forwards',
        'translate-rotate2': 'translateThenRotate2 2s  ease-in-out forwards ', // Define animation class 
        'reverse-translate-rotate2': 'reverseRotate2 1s, ease-in-out forwards',


      },
      keyframes: {
        'translateThenRotate1': {
          '0%': { transform: 'translateY(0px)' },          // Initial position
          '50%': { transform: 'translateY(8px)' },     // Translate by 100px at 50%
          '100%': { transform: 'translateY(8px)  rotate(45deg) ' }, // Rotate after translation
        },
        'reverseRotate1': {
          '0%': { transform: 'translateY(8px)  rotate(45deg) ' },          // Initial position
          '50%':{transform: 'translateY(8px) '},
          '100%': { transform: 'translateY(0px) rotate(0deg)' }, // Rotate after translation

        },
        'translateThenRotate2': {
          '0%': { transform: 'translateY(0px)' },          // Initial position
          '50%': { transform: 'translateY(-8px)' },     // Translate by 100px at 50%
          '100%': { transform: 'translateY(-8px) rotate(-45deg) ' }, // Rotate after translation
        },
        'reverseRotate2': {
          '0%': { transform: 'translateY(-8px) rotate(-45deg) ' },          // Initial position
          '50%': { transform: 'translateY(-8px)' },     // Translate by 100px at 50%
          '100%': { transform: 'translateY(0px) rotate(0deg) ' }, // Rotate after translation
        },

        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      
        
      
     
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('autoprefixer'),
    require('tailwindcss-animated')

  ],
};
