'use client'

import { useEffect, useState } from "react";

import getCharactersById from "@/services/getCharacterById";
import getCharactersComic from "@/services/getCharacterComic";

import { MainContent } from "@/components";
import styled from 'styled-components';
import {CharacterHeader, CharacterComics } from "@/components";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Page({params}){
  const savedFavorites = JSON.parse(localStorage.getItem('favorites'))

  const [favorites, setFavorites] = useState(savedFavorites ?? [])
  const [id, setId] = useState();
  const [hero, setHero] = useState(null);
	const [comics, setComics] = useState([])

	useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }

    unwrapParams();
  }, [params]);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (!id) return;

        const data = await getCharactersById(id);
        setHero(data[0]);
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (!id) return;
        const data = await getCharactersComic(id);
        setComics(data);
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
      }
    };

    fetchCharacter();
  }, [id]);

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

	const isFavorited = savedFavorites?.some((hero) => hero.id == id)

	const image = hero ? hero.thumbnail.path + '.' + hero.thumbnail.extension : ''

	if(hero)
		return(
			<Body>
				<MainContent>
					<CharacterHeader
						hero={hero}
						isFavorited={isFavorited}
						image={image}
						saveFavorites={(hero) => saveFavorites(hero)}
						removeFavorites={(id) => removeFavorites(id)}
					/>
          {comics && (
            <CharacterComics comics={comics} />
          )}
				</MainContent>
			</Body>
		)
	else
		return(
			<>
				<span className="loader"></span>
			</>
		)
}