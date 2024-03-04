/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                grey: "#424243",
                bluePrimary: "#34A0DB",
                blueSecondary: "#B8E3F4",
                greySecondary: "#CECECE",
                greyTertiary: "#767676",
                greyQuaternary: "#F3F3F3",
                greyBorder: "#D4D4D4",
                white: "#FFFFFF"
            },
            fontFamily: {
                montserrat: "Montserrat"
            },
            boxShadow: {
                cardShadow: "0px 1px 40px 0px #42424321"
            }
        }
    },
    plugins: []
};
