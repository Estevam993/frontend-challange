'use client'
import { useCallback, useEffect, useState } from 'react';

import getCharacters from '@/services/getCharacters';

import { MainContent, MarvelHeader, HeroCard, HerosContainer, Spinner, Pagination } from '@/components';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const [favorites, setFavorites] = useState([])
  const [searchType, setSearchType] = useState(false)
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const router = useRouter()

  const fetchCharacters = useCallback(async () => {
    try {
      const data = await getCharacters(page, 20,search);
      setCharacters(data);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  }, [page,search]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

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
      return updatedFavorites;
    });
  };

  const isFavorited = (id) => {
    return favorites.some((hero) => hero.id === id);
  }

  const handleSearchType = () => setSearchType(!searchType)

  return (
    <Body>
      <MainContent>
        <MarvelHeader changeFilter={handleSearchType} getSearch={(search) => {setSearch(search)}} />
        <HerosContainer>
          {searchType ? (
            favorites?.length > 0 ? (
              favorites.map((hero) => (
                <HeroCard
                  key={hero.id}
                  name={hero.name}
                  thumb={hero.thumbnail.path}
                  extension={hero.thumbnail.extension}
                  addFavorite={() => saveFavorites(hero)}
                  removeFavorite={() => removeFavorites(hero.id)}
                  isFavorited={() => isFavorited(hero.id)}
                  redirect={() => router.push('/heroi/'+hero.id)}
                />
              ))
            ) : (
              <p>Nenhum favorito encontrado.</p>
            )
          ) : (
            characters?.length > 0 ? (
              characters.map((hero) => (
                <HeroCard
                  key={hero.id}
                  name={hero.name}
                  thumb={hero.thumbnail.path}
                  extension={hero.thumbnail.extension}
                  addFavorite={() => saveFavorites(hero)}
                  removeFavorite={() => removeFavorites(hero.id)}
                  isFavorited={() => isFavorited(hero.id)}
                  redirect={() => router.push('/heroi/'+hero.id)}
                />
              ))
            ) : (
              <Spinner />
            )
          )}
        </HerosContainer>
        {!searchType && (
          <Pagination
            setPagination={atualPage => {
              setPage(atualPage)
            }}
          />
        )}
      </MainContent>
    </Body>
  );
}
