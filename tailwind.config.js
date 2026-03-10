/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: '#00E5FF',
                dark: '#0A0A0B',
            },
            backgroundImage: {
                'glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
            }
        },
    },
    plugins: [],
}
