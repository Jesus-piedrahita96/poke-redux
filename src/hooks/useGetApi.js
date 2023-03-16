import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setConfirm, setPokemons } from '../actions';

function useGetApi(api) {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const obtenerDatos = async () => {
      const response = await axios.get(api)
      const pokemonDetail = await Promise.all(response.data.results.map(data =>
        axios.get(data.url)
          .then(response => response.data)
          .catch(error => console.log(error))
          .finally(() => console.log('finalizando get-url'))
      ))

      if(pokemonDetail != null) {
        dispatch(setPokemons(pokemonDetail))
        dispatch(setConfirm())
      }
    }

    return obtenerDatos
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useGetApi;

// axios.get(api)
    //   .then(response => {
    //     response.data.results.map(poke => {
    //       axios.get(poke.url)
    //         .then(response => {
    //           dispatch(setPokemons(response.data))
    //         })
    //         .catch(error => console.log(error))
    //         .finally(() => console.log('finalizo el segundo llamado poke-url'))
    //     })
    //   })
    //   .catch(error => console.log(error))
    //   .finally(() => console.log('Finalizo el llamado a la pokeapi'))