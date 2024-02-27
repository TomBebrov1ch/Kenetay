/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark": "#000000",
                "green": "#68B738",
                "hover-green": "#53902C",
                "gray": "#F0F0F0",
            },
        },
    },
    plugins: [],
};
