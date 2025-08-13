import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { OpenGraph } from '@astrolib/seo';

const load = async () => {
	try {
		return import.meta.glob('~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
	} catch (e) {
		return undefined;
	}
};

let _images: Record<string, () => Promise<unknown>> | undefined = undefined;

export const fetchLocalImages = async () => {
	_images = _images || (await load());
	return _images;
};

export const findImage = async (
	imagePath?: string | ImageMetadata | null
): Promise<string | ImageMetadata | undefined | null> => {
	if (typeof imagePath !== 'string') return imagePath;
	
	if (/^https?:\/\/|^\//.test(imagePath)) return imagePath;
	
	if (!imagePath.startsWith('~/assets/images')) return imagePath;

	const images = await fetchLocalImages();
	const key = imagePath.replace('~/', '/src/');

	return images && typeof images[key] === 'function'
		? ((await images[key]()) as { default: ImageMetadata })['default']
		: null;
};

export const adaptOpenGraphImages = async (
	openGraph: OpenGraph = {},
	astroSite: URL | undefined = new URL('')
): Promise<OpenGraph> => {
	if (!openGraph?.images?.length) return openGraph;

	const { images } = openGraph;
	const defaultDimensions = { width: 1200, height: 626 };

	const adaptedImages = await Promise.all(
		images.map(async (image) => {
			if (!image?.url) return { url: '' };

			const resolvedImage = (await findImage(image.url)) as ImageMetadata | undefined;
			if (!resolvedImage) return { url: '' };

			try {
				const optimizedImage = await getImage({
					src: resolvedImage,
					alt: 'Văn hay trong hiện tại, chữ tốt ở tương lai.',
					width: image?.width || defaultDimensions.width,
					height: image?.height || defaultDimensions.height,
				});

				return {
					url: optimizedImage?.src ? String(new URL(optimizedImage.src, astroSite)) : '',
					width: optimizedImage?.width || undefined,
					height: optimizedImage?.height || undefined,
				};
			} catch (error) {
				console.warn('Failed to optimize OpenGraph image:', error);
				return { url: '' };
			}
		})
	);

	return { ...openGraph, images: adaptedImages.filter(img => img.url) };
};