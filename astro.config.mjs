import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import astrowind from './src/integration';

import { 
	readingTimeRemarkPlugin, 
	responsiveTablesRehypePlugin, 
	lazyImagesRehypePlugin 
} from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
	hasExternalScripts
		? Array.isArray(items)
			? items.map((item) => item())
			: [items()]
		: [];

export default defineConfig({

	output: 'static',

	site: 'https://nhavan.vn',

	build: {
		inlineStylesheets: 'always',
	},

	integrations: [

		react(),
		tailwind({
			applyBaseStyles: false,
		}),

		sitemap(),

		mdx(),

		...whenExternalScripts(() =>
			partytown({
				config: { forward: ['dataLayer.push'] },
			})
		),

		astrowind(),
	],

	markdown: {
		remarkPlugins: [readingTimeRemarkPlugin],
		rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
	},

	vite: {

		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
			extensions: ['.js', '.ts']
		},

	},

});