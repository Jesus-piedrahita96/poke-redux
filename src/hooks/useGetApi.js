import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPokemons } from '../actions';

function useGetApi(api) {
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get(api)
      .then(response => {
        dispatch(setPokemons(response.data.results))
      })
      .catch(error => console.log(error))
      .finally(() => console.log('Finalizo el llamado a la pokeapi'))

  }, [ api ])
}

export default useGetApi;