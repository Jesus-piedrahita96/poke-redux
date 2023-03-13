import React from 'react';
import './css/App.css';
import { Col } from 'antd';

//Components
import Searcher from './components/Searcher';
// import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <img src="https://static.platzi.com/media/tmp/class-files/github/curso-redux/curso-redux-01-pokeapi/src/statics/logo.svg" alt="logo" />
      <hr />
      <Col span={8} offset={8} >
        <Searcher />
        <PokemonCard />
      </Col>
    </div>
  );
}

export default App;
