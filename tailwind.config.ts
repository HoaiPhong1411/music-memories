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
                'opacity-primary': 'rgb(66 66 66 / 50%)',
                'opacity-white': 'rgb(255 255 255 / 60%)',
                'opacity-secondary': 'rgb(97 148 119 / 60%)',
                'opacity-gray': 'rgb(115 115 115 / 64%)',
                'hover-secondary': 'rgb(97 148 119 / 75%)',
                gray: 'rgb(215 215 215)',
                primary: 'rgb(255 215 189)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                home: "url('../../public/images/background.jpeg')",
                'home-mobile':
                    "url('https://images.unsplash.com/photo-1602918955248-d1bbfcbfae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80')",
            },
            animation: {
                'spin-slow': 'spin 7s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
