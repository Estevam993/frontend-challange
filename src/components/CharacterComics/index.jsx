import Image from "next/image"
import { Card, Comic, ImageWrapper } from "./style"

const CharacterComics = ({comics}) => {
	console.log(comics)

	if(comics.length > 0 ){
		return(
			<Card>
				{comics.map(comic => {
					return (
						<Comic key={comic.id}>
							<p style={{textAlign: 'center', marginBottom: '1rem'}}>
								{comic.title}
							</p>
							<ImageWrapper>
								<Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} width={100} height={150} />
							</ImageWrapper>
						</Comic>
					)
				})}
			</Card>
		)
	}else{
		return(
			<>
				<span className="loader"></span>
			</>
		)
	}
}

export default CharacterComics