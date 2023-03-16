import { combineReducers } from "redux";
import { reducerGoblal } from "./globales";
import { reducerPokemon } from "./pokemons";

const rootReducer = combineReducers({
  data: reducerPokemon,
  ui: reducerGoblal
})

export {rootReducer}