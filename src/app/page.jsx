'use client'
import { MainContent, SearchBar, Logo, Filters } from '@/components';
import styled from 'styled-components';

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Body>
      <MainContent>
        {/*
         // TODO transformar isso em um componente
        */}
        <>
          <Logo/>
          <h1 className='h1'>EXPLORE O UNIVERSO</h1>
          <p className='subtitle' >Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
          <SearchBar />
          <Filters />
        </>

      </MainContent>
    </Body>
  );
}
