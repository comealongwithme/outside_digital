module.exports = {
  mode: 'jit',
  purge: ['./*.html', './src/*.vue', './src/**/*.vue'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: [
        'Lab Grotesque',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      borderRadius: {
        '4xl': '1.876rem',
      },
      colors: {
        crimson: 'var(--tw-color-crimson)',
      },
      fontSize: {
        '2xs': '0.625rem',
        '2/5xl': '1.75rem',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['valid', 'invalid'],
      placeholderColor: ['valid', 'invalid'],
    },
  },
  plugins: [],
};
