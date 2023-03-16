import React from 'react';
import PokemonCard from './PokemonCard';
import '../css/App.css'
import { useSelector } from 'react-redux';

function PokemonList({pokemons}) {
  const cargando = useSelector(state => state.ui.loader)
  const confirmado = useSelector(state => state.ui.confirm)

  if(!cargando && confirmado) {
    return(
      <>
        <div className='contain-pokemons'><h2>Cargando ...</h2></div>
      </>
    )
  }else {
    return (
      <>
        <div className='main'>
          <h2 className='main__title'><strong>Pokemons</strong></h2>
          <div className='main__pokemons'>
            {pokemons.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />
            })}
          </div>
        </div>
      </>
    );
  }
}

export default PokemonList