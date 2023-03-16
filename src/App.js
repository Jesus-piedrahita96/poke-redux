import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'antd';
//Hooks
import useGetApi from './hooks/useGetApi';
//Components
import Searcher from './components/Searcher';
import PokemonsList from './components/PokemonList';
import PokemonFavorite from './components/PokemonFavorite';
import './sass/main.css'

function App() {
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  useGetApi(API)
  const pokemons = useSelector(state => state.data.pokemons)

  return (
    <main className="app">
      <img className='app__title' src="https://static.platzi.com/media/tmp/class-files/github/curso-redux/curso-redux-01-pokeapi/src/statics/logo.svg" alt="logo" />
      <hr />
      <section className='app__main'>
        <Searcher />
        <PokemonsList pokemons={pokemons} />
        <PokemonFavorite />
      </section>
    </main>
  );
}

export default App;