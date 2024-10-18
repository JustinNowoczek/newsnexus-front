import React from 'react'

export default function Article({
	data: { title, author, publishDate, city, imageUrl, url, tags },
	setFocusedArticle,
}) {
	const handleClick = () =>
		setFocusedArticle({
			title,
			city,
			url,
			tags,
		})

	return (
		<article onClick={handleClick}>
			<h4 className={'date ' + (imageUrl && imageUrl !== 'None' ? 'top' : 'bottom')}>
				{new Date(publishDate).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</h4>
			{imageUrl && imageUrl !== 'None' && <img src={imageUrl} alt="article image" />}

			<div className="content">
				<h3 className="title">{title}</h3>
				<h2 className="author">{author && '- ' + author}</h2>
			</div>
		</article>
	)
}

