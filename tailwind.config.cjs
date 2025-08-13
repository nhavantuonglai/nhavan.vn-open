const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--aw-color-primary)',
				muted: 'var(--aw-color-text-muted)',
			},
			fontFamily: {
				sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};