import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    max-width: 600px;
    gap: 2rem;
`
export const CustomButton = styled.button`
	border: transparent;
	background: none;
	cursor: pointer;
`
export const ImageWrapper = styled.div`
	position: relative;
	height: 15rem;
    width: 15rem;
`
export const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;

    padding-bottom: 2rem;
    box-shadow: #8080802b 1px 19px 19px 0px;

    @media(max-width: 600px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 2rem;
    }
`

export const HeadAndSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
`