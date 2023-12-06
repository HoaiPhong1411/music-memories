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
                'grey-primary-main': 'hsla(0,0%,100%,0.05)',
                'grey-primary-light': 'hsla(0,0%,100%,0.1)',
                'primary-light': '#e96f16',
                'primary-main': '#b65f20',
                'primary-dark': '#46312b',
                'primary-player-bg': '#30201d',
                'primary-layout-bg': '#251b18',
                'secondary-light': '#1966B2',
                'secondary-main': '#1F5A93',
                'secondary-dark': '#1F5A93',
                'secondary-player-bg': '#A3D5DC',
                'secondary-layout-bg': '#b3d8db',
                'alpha-bg': 'hsla(0,0%,100%,0.1)',
                'border-grey': 'hsla(0,0%,100%,0.1)',
                overlay: 'rgba(23,15,35,0.8)',
                'text-muted': 'rgba(254,255,255,0.6)',
                'text-placeholder': '#dadada',
                'white-primary': '#fff',
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
