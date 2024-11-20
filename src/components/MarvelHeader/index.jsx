'use client'
import { Logo, SearchBar, Filters } from ".."

const MarvelHeader = () => {
	return(
		<>
			<Logo/>
			<h1 className='h1'>EXPLORE O UNIVERSO</h1>
			<p className='subtitle' >Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
			<SearchBar />
			<Filters />
		</>
	)
}

export default MarvelHeader