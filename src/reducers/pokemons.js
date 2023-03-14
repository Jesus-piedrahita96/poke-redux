import { actionTypes } from "../actions/types"

const initialState = {
  pokemons: []
}

const objectReducer = (state, payload) => ({
  [actionTypes.setPokemons]: {
    ...state,
    pokemons: payload
  }
})

function reducer(state= initialState, action) {
  return objectReducer(state, action.payload)[action.type] || state
}

export {reducer}