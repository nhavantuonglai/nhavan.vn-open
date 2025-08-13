export async function pingIndexNow(urls: string[]) {
	const endpoint = 'https://api.indexnow.org/IndexNow';
	const host = 'nhavantuonglai.com';
	const key = import.meta.env.PUBLIC_INDEXNOW_KEY;
	const keyLocation = `https://${host}/${key}.txt`;
	const body = { host, key, keyLocation, urlList: urls };
	await fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
}