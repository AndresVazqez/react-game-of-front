import React from 'react'

export const Searcher = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='search'>
			<input
				type='text'
				placeholder='...'
				name='...'
				onChange={handleInput}
				value={filter}
			/>
		</section>
	)
}