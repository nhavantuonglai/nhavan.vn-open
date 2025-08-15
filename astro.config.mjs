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
	site: 'https://nhavantuonglai.com',
	build: {
		assetsPrefix: '/assets/', // Gom các tệp tĩnh vào thư mục /assets/
		inlineStylesheets: 'always', // Nhúng CSS trực tiếp vào HTML
	},
	integrations: [
		react({
			experimentalReactChildren: true, // Tối ưu hóa React để giảm JS riêng biệt
			include: ['**/components/*.jsx'], // Chỉ xử lý các thành phần React cần thiết
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
					manualChunks: {
						'client': ['src/client', 'src/components'], // Gộp JS từ client và components
						'vendor': ['src/integration'], // Gộp JS từ astrowind
					},
					// Đặt tên tệp JS để dễ quản lý
					chunkFileNames: 'assets/js/[name].js',
					assetFileNames: 'assets/[ext]/[name].[ext]',
				},
			},
			minify: 'esbuild', // Tối ưu hóa và gộp JS
		},
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
			extensions: ['.js', '.ts'],
		},
	},
});