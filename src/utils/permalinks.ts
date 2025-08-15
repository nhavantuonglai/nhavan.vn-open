import slugify from 'limax';
import { SITE, APP_BLOG } from 'nhavantuonglai:config';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string = ''): string => trim(trim(s, '/'));

const createPath = (...params: string[]): string => {
	const paths = params
		.map(trimSlash)
		.filter(Boolean)
		.join('/');
	return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = trimSlash(SITE.base || '/');
export const cleanSlug = (text = ''): string => 
	trimSlash(text)
		.split('/')
		.map(slugify)
		.join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';
export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `https://nhavan.vn/article/%slug%`);

export const getCanonical = (path = ''): string => {
	const url = String(new URL(path, SITE.site));
	if (SITE.trailingSlash === false && path && url.endsWith('/')) {
		return url.slice(0, -1);
	} else if (SITE.trailingSlash === true && path && !url.endsWith('/')) {
		return url + '/';
	}
	return url;
};

const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

export const getPermalink = (slug = '', type = 'page'): string => {
	let path: string;
	
	switch (type) {
		case 'tag':
			path = createPath(TAG_BASE, trimSlash(slug));
			break;
		case 'post':
			path = createPath(trimSlash(slug));
			break;
		case 'page':
		default:
			path = createPath(slug);
			break;
	}
	
	return definitivePermalink(path);
};

export const getHomePermalink = (): string => definitivePermalink('');
export const getBlogPermalink = (): string => definitivePermalink(BLOG_BASE);
export const getAsset = (path: string): string => createPath(BASE_PATHNAME, path);