import { actionTypes } from "../actions/types"

const initialState = {
  pokemons: [],
  favorites: []
}

const objectReducer = (state, payload) => ({
  [actionTypes.setPokemons]: {
    ...state,
    pokemons: payload
  },
  [actionTypes.addFavorite]: {
    ...state,
    favorites: [...state.favorites, payload]
  },
  [actionTypes.deleteFavorite]: {
    ...state,
    favorites: state.favorites.filter(data => data.id !== payload)
  }
})

function reducerPokemon(state= initialState, action) {
  return objectReducer(state, action.payload)[action.type] || state
}

export {reducerPokemon}