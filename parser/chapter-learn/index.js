import axios from 'axios';
import cherio, { load } from 'cheerio';
import { createWriteStream } from 'fs';

const base_url = 'https://developer.mozilla.org';

const scapeMDN = async () => {
	const chapters = ['HTML', 'CSS', 'JavaScript'];
	const result = {
		HTMl: '',
		CSS: '',
		JavaScript: '',
	};
	const fetchs = [];
	const url = base_url + '/ru/docs/Web/';
	chapters.forEach(async chap => {
		const fetch = axios.get(url + chap);
		fetchs.push(fetch);
	});
	const res = await Promise.allSettled(fetchs);
	const data = fromSettledToData(res);
	result['HTMl'] = data[0];
	result['CSS'] = data[1];
	result['JavaScript'] = data[2];

	return result;
};

scapeMDN()
	.then(async data => {
		const links = {
			HTML: getChapters(data['HTMl']),
			CSS: getChapters(data['CSS']),
			JavaScript: getChapters(data['JavaScript']),
		};
		const html = await fetchPageData(links.HTML);
		const css = await fetchPageData(links.CSS);
		const JavaScript = await fetchPageData(links.JavaScript);
		loadToFile([html, css, JavaScript]);
	})
	.catch(e => console.log(e));

const fromSettledToData = set => {
	return set.map(s => load(s.value.data));
};

const getChapters = $ => {
	const searchElement = 'div.sidebar-body';
	const result = [];

	$(searchElement)
		.find('a')
		.each((i, elem) => {
			if (
				elem &&
				'href' in elem.attribs &&
				elem.attribs['href'] &&
				elem.attribs['href'].includes('/ru/docs/Learn/')
			) {
				result.push(elem.attribs['href']);
			}
		});
	return result;
};

const fetchPageData = async path => {
	const fetchs = [];
	path.forEach(async chap => {
		const fetch = axios.get(base_url + chap);
		fetchs.push(fetch);
	});
	const res = await Promise.allSettled(fetchs);
	const articles = fromSettledToData(res).map(r =>
		validateHTML(r('article.main-page-content').html())
	);
	return articles;
};

const validateHTML = html => {
	return html.replaceAll('h2>', 'h3>');
};

const loadToFile = content => {
	let writer = createWriteStream('book.ts');
	let result = `[`;

	content.forEach((c, ic) => {
		result += ` {
			title: '',
			chapter: ${ic + 1},
			part: 'javascript',
			content: '',
			parts: [`;
		c.forEach((chap, i) => {
			const html = load(chap);
			result += `{
				title: \`${html('header').find('h1').text()}\`,
				chapter: ${ic + 1}.${i + 1},
				content: \`${html.html()}\`,
				works: []
			},`;
		});
		result += `]},`;
	});
	result += ']';
	writer.write(result);
	writer.close();
};
