module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Includes all files in the app directory
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'heart-shower': 'heartShower 1.5s ease-in-out infinite',
        'lid-open': 'lidOpen 1s ease-in-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        heartShower: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(1.5)', opacity: '0' },
        },
        lidOpen: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-45deg) translateY(-20px)' },
        },
      }
    },
  },
  plugins: [],
}
