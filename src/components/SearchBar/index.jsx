import { Bar, Input } from "./styles"

import lupa from "../../assets/busca/Lupa/Shape.png"
import Image from "next/image"

const SearchBar = ({children, handleSearch, ...props}) => {
	const onSerchBlur = (e) => {
		const {value} = e.target
		console.log(value)
		handleSearch(value)
	}

	return(
		<Bar {...props}>
			<Image style={{marginRight: '1rem'}} src={lupa} alt="Pesquisar" />
			{children}
			<Input placeholder="Procure por heróis" onBlur={onSerchBlur} />
		</Bar>
	)
}

export default SearchBar