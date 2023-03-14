import React from 'react';
import PokemonCard from './PokemonCard';
import '../css/App.css'

function PokemonList({pokemons}) {
  return (
    <>
      <div className='contain-pokemons'>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />
        })}
      </div>
    </>
  );
}

export default PokemonList