import { actionTypes } from "./types";

const setPokemons = (payload) => ({
    type: actionTypes.setPokemons,
    payload
  })

export { setPokemons }