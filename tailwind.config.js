module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: { extend: {} },
  variants: { extend: { backgroundColor: ['group-hover'] } },
  plugins: [require('@tailwindcss/forms')],
};
