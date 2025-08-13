import { getImage } from 'astro:assets';
import { transformUrl, parseUrl } from 'unpic';

import type { ImageMetadata } from 'astro';
import type { HTMLAttributes } from 'astro/types';

type Layout = 'fixed' | 'constrained' | 'fullWidth' | 'cover' | 'responsive' | 'contained';

export interface AttributesProps extends HTMLAttributes<'img'>{}

export interface ImageProps extends Omit<HTMLAttributes<'img'>, 'src'>{
	src?: string | ImageMetadata | null;
	width?: string | number | null;
	height?: string | number | null;
	alt?: string | null;
	loading?: 'eager' | 'lazy' | null;
	decoding?: 'sync' | 'async' | 'auto' | null;
	style?: string;
	srcset?: string | null;
	sizes?: string | null;
	fetchpriority?: 'high' | 'low' | 'auto' | null;
	layout?: Layout;
	widths?: number[] | null;
	aspectRatio?: string | number | null;
}

export type ImagesOptimizer = (
	image: ImageMetadata | string,
	breakpoints: number[],
	width?: number,
	height?: number
) => Promise<Array<{ src: string; width: number }>>;

const config = {
	imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	deviceSizes: [640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200, 3840, 4480, 5120, 6016],
	formats: ['image/webp'],
};

const computeHeight = (width: number, aspectRatio: number) => Math.floor(width / aspectRatio);

const parseAspectRatio = (aspectRatio: number | string | null | undefined): number | undefined => {
	if (typeof aspectRatio === 'number') return aspectRatio;

	if (typeof aspectRatio === 'string') {
		const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);
		if (match) {
			const [, num, den] = match.map(Number);
			if (den && !isNaN(num)) return num / den;
		}
		
		const numericValue = parseFloat(aspectRatio);
		if (!isNaN(numericValue)) return numericValue;
	}

	return undefined;
};

export const getSizes = (width?: number, layout?: Layout): string | undefined => {
	if (!width || !layout) return undefined;
	
	switch (layout) {
		case 'constrained':
			return `(min-width: ${width}px) ${width}px, 100vw`;
		case 'fixed':
			return `${width}px`;
		case 'fullWidth':
			return '100vw';
		default:
			return undefined;
	}
};

const pixelate = (value?: number) => value || value === 0 ? `${value}px` : undefined;

const getStyle = ({
	width,
	height,
	aspectRatio,
	layout,
	objectFit = 'cover',
	objectPosition = 'center',
	background,
}: {
	width?: number;
	height?: number;
	aspectRatio?: number;
	objectFit?: string;
	objectPosition?: string;
	layout?: string;
	background?: string;
}) => {
	const styles: Record<string, string | undefined> = {
		'object-fit': objectFit,
		'object-position': objectPosition,
	};

	if (background?.match(/^https?:|^data:/)) {
		Object.assign(styles, {
			'background-image': `url(${background})`,
			'background-size': 'cover',
			'background-repeat': 'no-repeat',
		});
	} else if (background) {
		styles.background = background;
	}

	const layoutStyles: Record<string, Partial<typeof styles>> = {
		fixed: {
			width: pixelate(width),
			height: pixelate(height),
			'object-position': 'top left',
		},
		constrained: {
			'max-width': pixelate(width),
			'max-height': pixelate(height),
			'aspect-ratio': aspectRatio ? `${aspectRatio}` : undefined,
			width: '100%',
		},
		fullWidth: {
			width: '100%',
			'aspect-ratio': aspectRatio ? `${aspectRatio}` : undefined,
			height: pixelate(height),
		},
		responsive: {
			width: '100%',
			height: 'auto',
			'aspect-ratio': aspectRatio ? `${aspectRatio}` : undefined,
		},
		contained: {
			'max-width': '100%',
			'max-height': '100%',
			'object-fit': 'contain',
			'aspect-ratio': aspectRatio ? `${aspectRatio}` : undefined,
		},
		cover: {
			'max-width': '100%',
			'max-height': '100%',
		},
	};

	if (layout && layoutStyles[layout]) {
		Object.assign(styles, layoutStyles[layout]);
	}

	return Object.entries(styles)
		.filter(([, value]) => value)
		.map(([key, value]) => `${key}: ${value};`)
		.join(' ');
};

const getBreakpoints = ({ width, breakpoints, layout }: {
	width?: number;
	breakpoints?: number[];
	layout: Layout;
}): number[] => {
	const responsiveLayouts = ['fullWidth', 'cover', 'responsive', 'contained'];
	
	if (responsiveLayouts.includes(layout)) {
		return breakpoints || config.deviceSizes;
	}
	
	if (!width) return [];
	
	const doubleWidth = width * 2;
	
	if (layout === 'fixed') return [width, doubleWidth];
	
	if (layout === 'constrained') {
		return [
			width,
			doubleWidth,
			...(breakpoints || config.deviceSizes).filter((w) => w < doubleWidth),
		];
	}

	return [];
};

export const astroAsseetsOptimizer: ImagesOptimizer = async (image, breakpoints) => {
	if (!image || typeof image === 'string') return [];

	return Promise.all(
		breakpoints.map(async (w: number) => {
			const { src } = await getImage({ src: image, width: w });
			return { src, width: w };
		})
	);
};

export const unpicOptimizer: ImagesOptimizer = async (image, breakpoints, width, height) => {
	if (!image || typeof image !== 'string') return [];

	const urlParsed = parseUrl(image);
	if (!urlParsed) return [];

	return Promise.all(
		breakpoints.map(async (w: number) => {
			const url = transformUrl({
				url: image,
				width: w,
				height: width && height ? computeHeight(w, width / height) : height,
				cdn: urlParsed.cdn,
			}) || image;
			
			return { src: String(url), width: w };
		})
	);
};

export async function getImagesOptimized(
	image: ImageMetadata | string,
	{ 
		src: _, 
		width, 
		height, 
		sizes, 
		aspectRatio, 
		widths, 
		layout = 'constrained', 
		style = '', 
		...rest 
	}: ImageProps,
	transform: ImagesOptimizer = () => Promise.resolve([])
): Promise<{ src: string; attributes: AttributesProps }> {
	
	if (typeof image !== 'string') {
		width ||= image.width;
		height ||= typeof width === 'number' ? computeHeight(width, image.width / image.height) : undefined;
	}

	const numWidth = width ? Number(width) : undefined;
	const numHeight = height ? Number(height) : undefined;

	widths ||= config.deviceSizes;
	sizes ||= getSizes(numWidth, layout);
	aspectRatio = parseAspectRatio(aspectRatio);

	let breakpoints = getBreakpoints({ 
		width: numWidth, 
		breakpoints: widths, 
		layout 
	});
	
	breakpoints = [...new Set(breakpoints)].sort((a, b) => a - b);

	const srcset = (await transform(image, breakpoints, numWidth, numHeight))
		.map(({ src, width }) => `${src} ${width}w`)
		.join(', ');

	return {
		src: typeof image === 'string' ? image : image.src,
		attributes: {
			width: numWidth,
			height: numHeight,
			srcset: srcset || undefined,
			sizes,
			style: `${getStyle({
				width: numWidth,
				height: numHeight,
				aspectRatio,
				layout,
			})}${style ?? ''}`,
			...rest,
		},
	};
}