'use client'
import { useCallback, useEffect, useState } from 'react';

import getCharacters from '@/services/getCharacters';

import { MainContent, MarvelHeader, HeroCard, HerosContainer, Spinner, Pagination } from '@/components';
import styled from 'styled-components';

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites'))

  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(0)
  const [favorites, setFavorites] = useState(savedFavorites ?? [])

  const fetchCharacters = useCallback(async () => {
    try {
      const data = await getCharacters(page, 20);
      setCharacters(data);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  console.log(characters)

  const saveFavorites = (hero) => {
    if(favorites.length < 5){
      setFavorites((prevFavorites) => {
        const newFavorites = [...prevFavorites, hero]
        const favoritesJson = JSON.stringify(newFavorites)

        localStorage.setItem('favorites', favoritesJson)
        return newFavorites;
      })
    }
  }

  const removeFavorites = (id) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((hero) => hero.id !== id);
      const favoritesJson = JSON.stringify(updatedFavorites);

      localStorage.setItem('favorites', favoritesJson);
      return updatedFavorites; // Atualiza o estado com a lista filtrada
    });
  };

  const isFavorited = (id) => {
    return savedFavorites.some((hero) => hero.id === id);
  }

  return (
    <Body>
      <MainContent>
        <MarvelHeader />
        <HerosContainer>
          {characters?.length > 0 ? characters.map((hero) => (
            <HeroCard
              key={hero.id}
              name={hero.name}
              thumb={hero.thumbnail.path}
              extension={hero.thumbnail.extension}
              addFavorite={() => {
                saveFavorites(hero)
              }}
              removeFavorite={() => {
                removeFavorites(hero.id)
              }}
              isFavorited={() => isFavorited(hero.id)}
            />
          )) : (<Spinner/>)}
        </HerosContainer>
        <Pagination
          setPagination={atualPage => {
            setPage(atualPage)
          }}
        />
      </MainContent>
    </Body>
  );
}
