// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            // optional: add custom spacing like 72 = 18rem = 288px
            spacing: {
                72: '18rem',
            },
            height: {
                'screen-75': '75vh',
            },
        },
    },
    plugins: [],
}

export default config
