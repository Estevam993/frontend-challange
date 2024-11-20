'use client'
import { useState } from 'react'
import Image from 'next/image'

import {Card, ImageWrapper, CardInfo, CustomButton} from './style'

import heart from '../../assets/icones/heart/Path Copy 7.svg'
import heartOutlined from '../../assets/icones/heart/Path Copy 2.png'

const HeroCard = ({name, thumb, extension}) => {
	const [favorite, setFavorite] = useState(false)

	const handleFavoriteChange = () => setFavorite(!favorite)

	const image =  `${thumb}.${extension}`

	return(
		<>
			<Card>
				<ImageWrapper>
					<Image src={image} layout="fill" alt='teste' />

				</ImageWrapper>
				<CardInfo>
					{name}
					<CustomButton onClick={handleFavoriteChange}>
						<Image src={favorite ? heart : heartOutlined} alt='Favoritar' />
					</CustomButton>
				</CardInfo>
			</Card>
		</>
	)
}

export default HeroCard