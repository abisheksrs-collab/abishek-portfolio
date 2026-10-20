/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          card: '#12121a',
          border: '#1e1e2a',
          muted: '#6b7280',
          accent: '#00d4aa',
        },
        light: {
          bg: '#f8f9fa',
          card: '#ffffff',
          border: '#e2e8f0',
          muted: '#6b7280',
          accent: '#059669',
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}