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

const setFavoriteD = (payload) => ({
  type: actionTypes.deleteFavorite,
  payload
})

const setSearch = (payload) => ({
  type: actionTypes.search,
  payload
})

export { setPokemons, setConfirm, setLoader, setFavorite, setSearch, setFavoriteD }