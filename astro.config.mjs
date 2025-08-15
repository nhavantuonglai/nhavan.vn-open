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
		assetsPrefix: '/assets/', // Gom các tệp tĩnh vào thư mục /assets/
		inlineStylesheets: 'always', // Nhúng CSS trực tiếp vào HTML
	},
	integrations: [
		react({
			experimentalReactChildren: true, // Tối ưu hóa React để giảm JS riêng biệt
		}),
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
		optimizeDeps: {
			exclude: ['_astro/*'], // Ngăn Vite tạo tệp JS riêng trong _astro
		},
		build: {
			rollupOptions: {
				output: {
					// Gộp các chunk JS nhỏ thành ít tệp hơn
					manualChunks: {
						'client': ['src/client'], // Gộp các script liên quan đến client
					},
				},
			},
		},
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
			extensions: ['.js', '.ts'],
		},
	},
});