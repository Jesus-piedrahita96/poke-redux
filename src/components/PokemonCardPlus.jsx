import React from 'react'
import { useDispatch } from 'react-redux';
import { setFavoriteD } from '../actions';

function PokemonCardPlus({pokemon}) {
  const dispatch = useDispatch()

  const handleEliminar = (id) => {
    dispatch(setFavoriteD(id))
  }

  return (
    <>
      <section className='poke'>
        <h2 className='poke__title'>{pokemon.name}</h2>
        <img className='poke__image' src={pokemon.sprites.front_default} alt={pokemon.name} />
        <button
          className='poke__button'
          onClick={() => handleEliminar(pokemon.id)}
          >
            eliminar
        </button>
      </section>
    </>
  );
}

export default PokemonCardPlus;