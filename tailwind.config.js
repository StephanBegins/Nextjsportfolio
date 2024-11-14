// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: '#1c1c22', // Your primary background color
        accent: {
          DEFAULT: '#00ff99', // Accent color for glowing
          hover: '#00e187',
        },
        alternative: '#121212', // Updated dark gray for stats background
        darkBlue: '#121C24', // Custom darker blue for stats background
      },

      keyframes: {
        "glowing-border": {
          '0%': {
            borderColor: 'rgba(0, 255, 153, 0)',
            boxShadow: '0 0 5px rgba(0, 255, 153, 0.5), 0 0 10px rgba(0, 255, 153, 0.4), 0 0 15px rgba(0, 255, 153, 0.3)',
          },
          '50%': {
            borderColor: 'rgba(0, 255, 153, 1)',
            boxShadow: '0 0 5px rgba(0, 255, 153, 1), 0 0 20px rgba(0, 255, 153, 0.8), 0 0 30px rgba(0, 255, 153, 0.6)',
          },
          '100%': {
            borderColor: 'rgba(0, 255, 153, 0)',
            boxShadow: '0 0 5px rgba(0, 255, 153, 0.5), 0 0 10px rgba(0, 255, 153, 0.4), 0 0 15px rgba(0, 255, 153, 0.3)',
          }
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glowing-border": "glowing-border 3s ease-in-out infinite", // Glowing border animation
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
