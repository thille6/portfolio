/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./code.html'],
  theme: {
    extend: {
      colors: {
        'on-error': '#690005',
        'primary-container': '#00d4ff',
        'on-error-container': '#ffdad6',
        'surface-bright': '#36393e',
        'on-primary': '#003642',
        'on-surface': '#e0e2e8',
        'tertiary-fixed': '#8bf2ff',
        'on-tertiary-fixed-variant': '#004f56',
        'inverse-primary': '#00677e',
        'inverse-surface': '#e0e2e8',
        'on-tertiary-fixed': '#001f23',
        'secondary-fixed': '#ffdbd0',
        'on-primary-fixed-variant': '#004e5f',
        'primary-fixed-dim': '#3cd7ff',
        'primary-fixed': '#b4ebff',
        'surface-container-lowest': '#0b0e13',
        secondary: '#ffb59d',
        primary: '#a8e8ff',
        'tertiary-fixed-dim': '#43d9e9',
        tertiary: '#73f0ff',
        'on-secondary-fixed-variant': '#832600',
        'on-secondary-fixed': '#390c00',
        'on-secondary': '#5d1900',
        'on-background': '#e0e2e8',
        'surface-tint': '#3cd7ff',
        'surface-container-high': '#272a2f',
        'on-primary-fixed': '#001f27',
        'secondary-fixed-dim': '#ffb59d',
        'on-tertiary-container': '#005961',
        'surface-variant': '#32353a',
        'on-primary-container': '#00586b',
        'inverse-on-surface': '#2d3135',
        'tertiary-container': '#3dd5e5',
        'on-secondary-container': '#ffddd2',
        'secondary-container': '#b83900',
        'outline-variant': '#3c494e',
        'on-surface-variant': '#bbc9cf',
        'error-container': '#93000a',
        outline: '#859398',
        surface: '#101418',
        'on-tertiary': '#00363b',
        'surface-container-highest': '#32353a',
        error: '#ffb4ab',
        background: '#101418',
        'surface-dim': '#101418',
        'surface-container-low': '#191c20',
        'surface-container': '#1d2024'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      },
      fontFamily: {
        headline: ['Space Grotesk'],
        body: ['Manrope'],
        label: ['JetBrains Mono']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
