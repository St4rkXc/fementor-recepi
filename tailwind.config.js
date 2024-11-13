/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily:{
                sans: ['Outfit', 'sans-serif'], // Set Outfit as the default font
                serif: ['Young Serif', 'serif'], // Define Young Serif for specific use
            },
            fontSize :{
                sm : "14px",
                base : "16px",
            },
            colors: {
                background: "#f3e5d8",
                text : "#292929",
                primary : "#864535"
            }
            
        },
    },
    plugins: [],
};
