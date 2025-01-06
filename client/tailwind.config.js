// tailwind.config.js
import lineClamp from '@tailwindcss/line-clamp'; // Import the plugin

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp, // Use the imported plugin here
    // other plugins can go here...
  ],
};

