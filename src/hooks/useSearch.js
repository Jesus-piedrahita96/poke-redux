
function useSearch(pokemons, search) {

  const pokemonList = pokemons.filter(pokemon => {
    const buscar = search.toLowerCase()
    return pokemon.name.toLowerCase().includes(buscar)
  })

  return pokemonList

}

export { useSearch };