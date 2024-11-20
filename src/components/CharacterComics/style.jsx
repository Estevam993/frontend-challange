import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 2vh;
    flex: 1 1 auto;
    margin-top: 5rem;
    overflow: auto;

    @media(max-width: 600px){
        margin-top: 1rem;
    }
`
export const Comic = styled.div`
	margin-bottom: 1rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
	position: relative;
	width: 100%;
	height: 100%;
`