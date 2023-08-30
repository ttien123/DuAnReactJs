/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ['Roboto, sans-serif'],
                Montserrat: ['Montserrat, sans-serif'],
            },
            colors: {
                colorWeb: '#592b1c',
                colorTextWeb: '#444444',
            },
            fontSize: {
                T16: '16px',
            },
            boxShadow: {
                Auth: '0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)',
                myBag: '1px 1px 15px rgba(0, 0, 0, 0.55)',
            },
            keyframes: {
                dropDownHeaderScroll: {
                    '0%': { transform: 'translateY(-100%)', opacity: 0 },
                    '100%': { transform: 'translateY(0%)', opacity: 1 },
                },
                openBag: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                closeBag: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animation: {
                dropDownHeaderScroll: 'dropDownHeaderScroll 0.5s linear forwards',
                aniOpenBag: 'openBag 0.5s ease forwards',
                aniCloseBag: 'closeBag 0.5s ease forwards',
            },
        },
    },
    plugins: [],
};
