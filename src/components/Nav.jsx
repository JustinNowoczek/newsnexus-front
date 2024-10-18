import React, { useMemo, useState } from 'react'

import logo from '../assets/newsnexus.svg'

export default function Nav({ setFilters, filters, cityList }) {
	const [showMenu, setShowMenu] = useState(false)

	const filteredCityList = useMemo(() => {
		const f = filters.city.toLowerCase()

		return cityList.filter(({ name }) => name.toLowerCase().includes(f)).slice(0, 7)
	}, [cityList.length, filters.city])

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
						onFocus={() => {
							setShowMenu(true)
						}}
						onBlur={() => {
							setTimeout(() => {
								setShowMenu(false)
							}, 200)
						}}
						placeholder="e.g. New York City"
						value={filters.city}
						onChange={({ target }) => {
							if (!showMenu) {
								setShowMenu(true)
							}
							setFilters((p) => ({ ...p, city: target.value }))
						}}
						disabled={filters.undefinedCityOnly}
						type="text"
					/>
					{showMenu && (
						<div className="menu">
							{filteredCityList.map(({ id, name, state }) => (
								<p key={id} onClick={() => setFilters((p) => ({ ...p, city: name }))}>
									{name + ', ' + state}
								</p>
							))}
						</div>
					)}
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

