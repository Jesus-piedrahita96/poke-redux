import { actionTypes } from "./types";

const setPokemons = (payload) => ({
  type: actionTypes.setPokemons,
  payload
})

const setLoader = () => ({
  type: actionTypes.loader
})

const setConfirm = () => ({
  type: actionTypes.confirm
})

const setFavorite = (payload) => ({
  type: actionTypes.addFavorite,
  payload
})

export { setPokemons, setConfirm, setLoader, setFavorite }