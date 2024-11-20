'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import {CustomDiv,CustomButton,FilterDiv,SwitchDiv,CustomText} from './style'

import heart from '@/assets/icones/heart/Path Copy 7.svg'
import hero from '@/assets/icones/heroi/noun_Superhero_2227044@1,5x.svg'
import switchOn from '@/assets/toggle/Group 2.svg'
import switchOff from '@/assets/toggle/Group 6.png'


const Filters = ({onFilterChange}) => {
	const [isSwitchOn, setSwitch] = useState(false)

	const handleSwitchChange = () => setSwitch(!isSwitchOn)

	return(
		<FilterDiv>
			<p className="search-legend">Encontrado 20 Heróis</p>
			<SwitchDiv>
				<CustomDiv>
					<Image src={hero} alt='Somente Favoritos' />
					<CustomText className='sm-hide'>Ordenar por nome - A/Z</CustomText>
				</CustomDiv>
				<CustomButton 
					onClick={() => {
						handleSwitchChange()
						onFilterChange(isSwitchOn)
					}}
				>
					<Image src={isSwitchOn ? switchOn : switchOff} alt={isSwitchOn ? 'Somente Favoritos' : 'Ordenar por nome'} />
				</CustomButton>
				<CustomDiv>
					<Image src={heart} alt='Somente Favoritos' />
					<CustomText className='sm-hide'>Somente Favoritos</CustomText>
				</CustomDiv>
			</SwitchDiv>
		</FilterDiv>
	)
}

export default Filters