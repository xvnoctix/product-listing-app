import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {},
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            nlg: "1075px",
            xl: "1280px",
            "2xl": "1536px",
            xs: "440px",
            sxs: "360px",
        },
    },

    plugins: [forms],
};
