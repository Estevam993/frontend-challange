'use client'
import { Logo, SearchBar, Filters } from ".."

const MarvelHeader = ({changeFilter, getSearch}) => {
	return(
		<>
			<Logo/>
			<h1 className='h1'>EXPLORE O UNIVERSO</h1>
			<p className='subtitle' >Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
			<SearchBar handleSearch={search => getSearch(search)} />
			<Filters
				onFilterChange={(on) => {
					changeFilter(on)
				}}
			/>
		</>
	)
}

export default MarvelHeader