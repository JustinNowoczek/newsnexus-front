import React from 'react'
import logo from '../assets/newsnexus.svg'

export default function Nav({ setFilters, filters }) {
	return (
		<nav>
			<img src={logo} alt="Logo" width={100} />
			<h1>
				News <br /> Nexus
			</h1>
			<div className="container">
				<label>
					Filter by City
					<input
						placeholder="e.g. New York City"
						value={filters.city}
						onChange={({ target }) => {
							setFilters((p) => ({ ...p, city: target.value }))
						}}
						disabled={filters.undefinedCityOnly}
						type="text"
					/>
				</label>
				<label>
					Unspecified City only
					<input
						type="checkbox"
						onChange={() => {
							setFilters((p) => ({ ...p, undefinedCityOnly: !p.undefinedCityOnly }))
						}}
						checked={filters.undefinedCityOnly}
					/>
				</label>
				<label>
					Filter by Tag
					<input
						placeholder="e.g. Money"
						value={filters.tag}
						onChange={({ target }) => {
							setFilters((p) => ({ ...p, tag: target.value }))
						}}
						type="text"
					/>
				</label>
			</div>
		</nav>
	)
}

