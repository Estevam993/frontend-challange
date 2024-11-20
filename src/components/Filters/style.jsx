import styled from "styled-components"

export const CustomDiv = styled.div`
	display: flex;
	color: #c10000;
	gap: 0.8rem;
`

export const CustomButton = styled.button`
	border: transparent;
	background: none;
`

export const FilterDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 2rem;

	@media(max-width: 600px){
		flex-direction: column-reverse;
	}
`

export const SwitchDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1.8rem;

	@media(max-width: 175px){
		flex-wrap: wrap;
	}
`

export const CustomText = styled.p`
	text-align: center;
`