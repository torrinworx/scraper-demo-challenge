import { useEffect, useState } from 'react';

const GetScrapers = () => {
	const rows = [];
	const url = 'https://api.github.com/repos/Equator-Studios/scrapers/contents/scrapers';

	const [scrapers, setScrapers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
	const fetchData = async () => {
		try {
		const response = await fetch(url);
		const scrapers = await response.json();
		setScrapers(scrapers);
		} catch (error) {
		setError(error);
		}
	};
	fetchData();
	}, []);

	scrapers.forEach((object, index) => {
		let id = index + 1
		let name = object['name']
		let git_url = object['html_url']
		let download_url = object['download_url']

		rows.push({'id': id, 'scraperName': name, 'gitURL': git_url, 'downloadURL': download_url})
	});
	console.log(rows)
	return [error, rows];
};

export default GetScrapers
