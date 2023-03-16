import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
// import { Meta } from 'antd/es/list/Item';

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch()

  const handleAddFavorite = (object) => {
    dispatch(setFavorite(object))
  }

  return (
    <>
      <section className='poke'>
        <h2 className='poke__title'>{pokemon.name}</h2>
        <img className='poke__image' src={pokemon.sprites.front_default} alt={pokemon.name} />
        <button
          className='poke__button'
          onClick={() => handleAddFavorite(pokemon)}
          >
            Favorite
        </button>
      </section>
    </>
  );
}

export default PokemonCard;