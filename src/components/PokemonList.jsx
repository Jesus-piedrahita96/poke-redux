import React from 'react';
import PokemonCard from './PokemonCard';
import { useSelector } from 'react-redux';
import { useSearch } from '../hooks/useSearch';

function PokemonList({ pokemons }) {
  const search = useSelector(state => state.ui.search)
  const list = useSearch(pokemons, search)
  const cargando = useSelector(state => state.ui.loader)
  const confirmado = useSelector(state => state.ui.confirm)


  if (!cargando && confirmado) {
    return (
      <>
        <div className='contain-pokemons'><h2>Cargando ...</h2></div>
      </>
    )
  } else {
    return (
      <>
        <div className='card'>
          <h2 className='card__title'><strong>Pokemons</strong></h2>
          <div className='card__pokemons'>
            {list.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />
            })}
          </div>
        </div>
      </>
    );
  }
}

export default PokemonList