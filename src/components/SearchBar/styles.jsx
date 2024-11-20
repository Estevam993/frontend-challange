import styled from "styled-components"

export const Bar = styled.div`
	background-color: #ffe4e4;
    height: 2.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 25px;

    width: 75%;
	max-width: 600px;

	display: flex;
	flex-direction: row;
    align-items: center;

	margin-top: 2rem;
	margin-bottom: 2rem;

	@media (max-width: 375px){
		width: 90%;
	}
`
export const Input = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	background: transparent;
    color: #c90000;
`