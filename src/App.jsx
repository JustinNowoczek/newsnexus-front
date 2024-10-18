import './App.css'

import React, { useEffect } from 'react'

import Article from './components/Article'
import FocusedArticle from './components/FocusedArticle'
import Nav from './components/Nav'
import { useState } from 'react'

function App() {
	const [articles, setArticles] = useState([])
	const [focusedArticle, setFocusedArticle] = useState(null)
	const [filters, setFilters] = useState({ city: '', tag: '', undefinedCityOnly: true })
	const [cityList, setCityList] = useState([])

	useEffect(() => {
		fetch('https://newsnexus-in05.onrender.com/api/news/cities')
			.then((r) => r.json())
			.then(setCityList)
	}, [])

	useEffect(() => {
		let url = 'https://newsnexus-in05.onrender.com/api/news/articles'

		let { city: c, tag: t, undefinedCityOnly: uCO } = filters

		if (uCO) {
			c = 'noCity'
		}

		if (c || t) {
			url += '?'
		}

		if (c) {
			url += 'city=' + c

			if (t) {
				url += '&'
			}
		}

		if (t) {
			url += 'tag=' + t
		}

		console.log(url)

		fetch(url)
			.then((r) => r.json())
			.then(setArticles)
	}, [filters.city, filters.tag, filters.undefinedCityOnly])

	return (
		<>
			<Nav setFilters={setFilters} filters={filters} cityList={cityList} />
			{articles.length !== 0 ? (
				<main>
					{articles.map((a) => (
						<React.Fragment key={a.id}>
							<Article data={a} setFocusedArticle={setFocusedArticle} />
						</React.Fragment>
					))}
				</main>
			) : (
				<p className="noArticles">No articles Available</p>
			)}

			{focusedArticle && (
				<FocusedArticle
					data={focusedArticle}
					setFocusedArticle={setFocusedArticle}
					setFilters={setFilters}
				/>
			)}
		</>
	)
}

export default App

