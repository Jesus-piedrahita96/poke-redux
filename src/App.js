import React from 'react';
import './css/App.css';
import { Col } from 'antd';
import useGetApi from './hooks/useGetApi';

//Components
import Searcher from './components/Searcher';
// import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';


function App() {
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=150'
  const pokemons = useGetApi(API)
  console.log(pokemons.results);

  return (
    <div className="App">
      <img className='title' src="https://static.platzi.com/media/tmp/class-files/github/curso-redux/curso-redux-01-pokeapi/src/statics/logo.svg" alt="logo" />
      <hr />
      <Col span={8} offset={8} >
        <Searcher />
        <PokemonCard />
      </Col>
    </div>
  );
}

export default App;
