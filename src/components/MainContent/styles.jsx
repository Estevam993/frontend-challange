
import styled from "styled-components"

export const MainSection = styled.div`
	width: 60rem;
    height: 100%;
	box-shadow: gray 0px 0px 15px 0px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-bottom: 5rem;
	padding-left: 2rem;
	padding-right: 2rem;

	@media (max-width: 600px){
		width: 100%;
		border-radius: 0;
	}
`
