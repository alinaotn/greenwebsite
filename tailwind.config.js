const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Roboto Mono', ...defaultTheme.fontFamily.sans],
        },

        fontSize: {
            'small': '.875rem', //14px
            'base': '1rem', //16px
            'medium': '1.125rem', //18px
            '2xl': '1.5rem', //24px
            '3xl': '1.75rem', //28px
            '4xl': '2rem', //32px
            '5xl': '3rem', //48px
            '6xl': '4rem', //64px
            '7xl': '5rem', //80px
        },
        colors: {
            'dark-green': '#0C3B2E',
            'light-green': '#D5DED5',
            'green': '#2A5442',
            'sage': '#667C74',
            'light-sage': '#99B0A7',
            'mint': '#E2F0DA',
            'grey': '#C4C4C4',
            'lila': '#B1BFEC',
            'beige': '#D4B8A3',
            'yellow': '#FFBA00',
            'white': '#ffffff',
        },
        extend: {
            spacing: {
                '-150px': '-150px',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.white'),
                        fontSize: '24px',
                        h1: {
                            fontSize: '48px',
                        },
                        h2: {
                            fontSize: '32px',
                        },
                        h3: {
                            fontSize: '28px',
                        },
                        h4: {
                            fontSize: '24px'
                        },
                        h5: {
                            fontSize: '18px'
                        },
                        h6: {
                            fontSize: '14px'
                        },
                        strong: {
                            color: theme('colors.gray.800'),
                        },
                        a: {
                            color: theme('colors.green.500'),
                            '&:hover': {
                                color: theme('colors.green.600')
                            },
                        },
                    },
                },
            }),

        }
    },
    plugins: [],
}
