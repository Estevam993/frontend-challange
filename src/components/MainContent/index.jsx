'use client'
import { MainSection } from "./styles"


const MainContent = ({children, ...props}) => {
	return(
	<MainSection {...props}>
			{children}
	</MainSection>
	)
}

export default MainContent