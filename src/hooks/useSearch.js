import React from 'react'

function useSearch(pokemons, search) {

  const pokemonList = pokemons.filter(pokemon => {
    const buscar = search.toLowerCase()
    const value = pokemon.name.toLowerCase().includes(buscar)
    if (value) {
      return pokemon
    }
  })

  return pokemonList

}

export { useSearch };