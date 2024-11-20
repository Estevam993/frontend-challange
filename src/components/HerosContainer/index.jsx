const { Container } = require("./style")

const HerosContainer = ({children, ...props}) => {
  return(
	<Container {...props}>
		{children}
	</Container>
  )
}

export default HerosContainer