'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Logo } from ".."
import { CustomButton, HeadAndSubtitle, Header, HeroContainer, ImageWrapper, LogoBack } from "./style"
import Image from "next/image"

import heart from '@/assets/icones/heart/Path Copy 7.svg'
import heartOutlined from '@/assets/icones/heart/Path Copy 2.png'
import ratting from '@/assets/review/Group 4.png'
import book from '@/assets/icones/book/Group.png'
import video from '@/assets/icones/video/Shape.png'

const CharacterHeader = ({hero, isFavorited, image, saveFavorites, removeFavorites}) => {
	const [favorite, setFavorite] = useState(isFavorited)
	const router = useRouter()

	const {name, description} = hero

	const handleFavoriteChange = () => setFavorite(!favorite)

	return(
		<>
			<CustomButton onClick={() => router.push('/')}>
				<Logo />
			</CustomButton>
			<HeroContainer>
				<HeadAndSubtitle>
					<Header>
						<h1 className="h1">
							{name}
						</h1>
						<CustomButton
							onClick={() => {
								handleFavoriteChange()
								if(!favorite) saveFavorites(hero)
								else removeFavorites(hero.id)
							}}
						>
							<Image src={favorite ? heart : heartOutlined} alt="Favorito" />
						</CustomButton>
					</Header>
					<p className='search-legend'>
						{description ? description : 'Esse Herói ainda não pussui descrição.'}
					</p>
					<div>
						<p>Quadrinhos:</p>
						<div style={{display: "flex", alignItems: "center", gap: 10}}>
							<Image src={book} alt='Quadrinhos' /> 3000
						</div>
					</div>
					<div>
						<p>Filmes:</p>
						<div style={{display: "flex", alignItems: "center", gap: 10}}>
							<Image src={video} alt='Filmes' /> 30
						</div>
					</div>
					<div>
						<p>Avaliações:</p>
						<Image src={ratting} alt='Avaliações' />
					</div>
				</HeadAndSubtitle>
				<ImageWrapper>
					<Image layout="fill" src={image} alt={name} />
				</ImageWrapper>
			</HeroContainer>
		</>
	)
}

export default CharacterHeader