'use client'
import { useEffect, useState } from 'react';

import getCharacters from '@/services/getCharacters';

import { MainContent, MarvelHeader, HeroCard, HerosContainer, Spinner } from '@/components';
import styled from 'styled-components';

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters(0,20);
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  console.log(characters)

    return (
    <Body>
      <MainContent>
        <MarvelHeader />
        <HerosContainer>
          {characters?.length > 0 ? characters.map((hero, index) => (
            <HeroCard key={index} name={hero.name} thumb={hero.thumbnail.path} extension={hero.thumbnail.extension} />
          )) : (<Spinner/>)}
        </HerosContainer>
      </MainContent>
    </Body>
  );
}
