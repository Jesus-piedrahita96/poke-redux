import React from 'react'
import { useSelector } from 'react-redux';
import PokemonCardPlus from './PokemonCardPlus';

function PokemonFavorite() {
  const favorites = useSelector(state => state.data.favorites)

  return (
    <>
      <div className='card'>
        <h2 className='card__title'><strong>Favorites</strong></h2>
        <div className='card__pokemons'>
          {favorites.map((pokemon, index) => {
            return <PokemonCardPlus key={index} pokemon={pokemon} />
          })}
        </div>
      </div>
    </>
  );
}

export default PokemonFavorite;