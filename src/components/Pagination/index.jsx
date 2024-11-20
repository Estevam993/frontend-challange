import { useEffect, useState } from "react"
import { Container, CustomButton } from "./style"

const Pagination = ({setPagination}) => {
	const [number, setNumber] = useState(0)

	const nextPage = () => {
		const newPage = number + 1;
		setNumber(newPage);
		setPagination(newPage); // Atualiza o estado do pai diretamente
	};

	const prevPage = () => {
    const newPage = number > 0 ? number - 1 : 0;
    setNumber(newPage);
    setPagination(newPage); // Atualiza o estado do pai diretamente
  };

	return(
		<Container>
			<CustomButton onClick={prevPage}>{'<'}</CustomButton>
			{number+1}
			<CustomButton onClick={nextPage}>{'>'}</CustomButton>
		</Container>
	)
}

export default Pagination