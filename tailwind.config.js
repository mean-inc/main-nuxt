/** @type {import('tailwindcss').Config} */
export default {
   theme: {},
   plugins: [require('flowbite')],
   content: [
     './pages/**/*.{html,js}',
     './components/**/*.{html,js}',
     './node_modules/flowbite/**/*.js'
   ]
 }