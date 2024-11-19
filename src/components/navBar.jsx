'use client'
import styled from "styled-components"

const Bar = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    padding: 0.5rem;
`

const NavBar = ({children, ...props}) => {

    return(
        <Bar {...props}>
            {children}
        </Bar>
    )
}

export default NavBar