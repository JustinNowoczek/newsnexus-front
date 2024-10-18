import React, { useCallback } from 'react'

export default function FocusedArticle({
	data: { title, city, url, tags },
	setFocusedArticle,
	setFilters,
}) {
	const handleClick = useCallback((e) => {
		if (e.target === e.currentTarget) {
			setFocusedArticle(null)
		}
	}, [])

	return (
		<div className="bg" onClick={handleClick}>
			<div className="article">
				<h1 className="title">{title}</h1>
				{city && <h2 className="city">City:{' ' + city}</h2>}
				{url && (
					<a target="" href={url}>
						Go to article
					</a>
				)}

				{tags.length !== 0 && (
					<h2>
						{tags.map((t) => (
							<span
								className="tags"
								key={t}
								onClick={() => {
									setFilters((p) => ({ ...p, tag: t }))
									setFocusedArticle(null)
								}}
							>
								{'#' + t + ' '}
							</span>
						))}
					</h2>
				)}
			</div>
		</div>
	)
}

