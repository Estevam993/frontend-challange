'use client'
import { useState } from 'react'
import Image from 'next/image'

import {Card, ImageWrapper, CardInfo, CustomButton} from './style'

import heart from '@/assets/icones/heart/Path Copy 7.svg'
import heartOutlined from '@/assets/icones/heart/Path Copy 2.png'

const HeroCard = ({name, thumb, extension, addFavorite, removeFavorite, isFavorited, redirect}) => {
	const [favorite, setFavorite] = useState(isFavorited)

	const handleFavoriteChange = () => setFavorite(!favorite)

	const image =  `${thumb}.${extension}`

	return(
		<>
			<Card>
				<ImageWrapper onClick={redirect}>
					<Image src={image} layout="fill" alt='teste' />
				</ImageWrapper>
				<CardInfo>
					{name}
					<CustomButton
						onClick={()=> {
							handleFavoriteChange()
							if(!favorite) addFavorite()
							else removeFavorite()
						}}
					>
						<Image src={favorite ? heart : heartOutlined} alt='Favoritar' />
					</CustomButton>
				</CardInfo>
			</Card>
		</>
	)
}

export default HeroCard