import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'opacity-white': 'rgb(255 255 255 / 60%)',
                'opacity-gray': 'rgb(115 115 115 / 64%)',
                'opacity-primary': 'rgb(68 28 93 / 50%)',
                'opacity-secondary': 'rgb(35 55 71 / 50%)',
                'primary-light': 'rgb(225 138 225)',
                'primary-main': 'rgb(139 63 187)',
                'primary-dark': 'rgb(34 18 42)',
                'secondary-light': 'rgb(79 135 139)',
                'secondary-main': 'rgb(35 55 71)',
                'secondary-dark': 'rgb(9 17 29)',
            },
            backgroundImage: {
                home: "url('../../public/images/galaxydesktop.jpg')",
                'home-mobile': "url('../../public/images/sunset.gif')",
            },
            animation: {
                'spin-slow': 'spin 7s linear infinite',
                'up-modal': 'downToUp 0.25s linear forwards',
                'down-modal': 'upToDown 0.25s linear forwards',
                'left-modal': 'leftToRight 0.25s linear forwards',
                'right-modal': 'rightToLeft 0.25s linear forwards',
            },

            keyframes: {
                downToUp: {
                    '0%': { transform: 'translateY(300px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                upToDown: {
                    '0%': { transform: 'translateY(0px)', opacity: '1' },
                    '100%': { transform: 'translateY(300px)', opacity: '0' },
                },
                leftToRight: {
                    '0%': { transform: 'translateX(-400px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                rightToLeft: {
                    '0%': { transform: 'translateX(0px)', opacity: '1' },
                    '100%': { transform: 'translateX(-300px)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
