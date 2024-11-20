import { Bar, Input } from "./styles"

import lupa from "../../assets/busca/Lupa/Shape.png"
import Image from "next/image"

const SearchBar = ({children, ...props}) => {
	return(
		<Bar {...props}>
			<Image style={{marginRight: '1rem'}} src={lupa} alt="Pesquisar" />
			{children}
			<Input placeholder="Procure por heróis" />
		</Bar>
	)
}

export default SearchBar