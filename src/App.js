import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'antd';
//Hooks
import useGetApi from './hooks/useGetApi';
//Components
import Searcher from './components/Searcher';
import PokemonsList from './components/PokemonList';
//Css
import './css/App.css';
import PokemonFavorite from './components/PokemonFavorite';


function App() {
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  useGetApi(API)
  const pokemons = useSelector(state => state.data.pokemons)

  return (
    <div className="App">
      <img className='title' src="https://static.platzi.com/media/tmp/class-files/github/curso-redux/curso-redux-01-pokeapi/src/statics/logo.svg" alt="logo" />
      <hr />
      <Col span={20} offset={2} >
        <Searcher />
        <PokemonsList pokemons={pokemons} />
        <PokemonFavorite />
      </Col>
    </div>
  );
}

export default App;