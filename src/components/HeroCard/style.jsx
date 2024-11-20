import styled from "styled-components";

export const Card = styled.div`
	width: 20vw;
	height: 20vh;
	max-width: 200px;
	max-height: 240px;
	min-width: 160px;
	margin-bottom: 1rem;
`

export const ImageWrapper = styled.div`
	position: relative;
	border-bottom: solid 2px #c10000;
	width: 100%;
	height: 100%;
`

export const CardInfo = styled.div`
	display: flex;
	margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const CustomButton = styled.button`
	border: transparent;
	background: none;
`