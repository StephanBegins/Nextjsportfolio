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
        primary: '#0c001a', // Custom background color for primary
        accent: '#c4a3ef', // Updated accent color
        alternative: '#121212', // Updated dark gray for stats background
        darkBlue: '#121C24', // Custom darker blue for stats background
      },

      keyframes: {
        "glowing-border": {
          '0%': {
            borderColor: 'rgba(196, 163, 239, 0)', // updated color
            boxShadow: '0 0 5px rgba(196, 163, 239, 0.5), 0 0 10px rgba(196, 163, 239, 0.4), 0 0 15px rgba(196, 163, 239, 0.3)',
          },
          '50%': {
            borderColor: 'rgba(196, 163, 239, 1)', // updated color
            boxShadow: '0 0 5px rgba(196, 163, 239, 1), 0 0 20px rgba(196, 163, 239, 0.8), 0 0 30px rgba(196, 163, 239, 0.6)',
          },
          '100%': {
            borderColor: 'rgba(196, 163, 239, 0)', // updated color
            boxShadow: '0 0 5px rgba(196, 163, 239, 0.5), 0 0 10px rgba(196, 163, 239, 0.4), 0 0 15px rgba(196, 163, 239, 0.3)',
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
