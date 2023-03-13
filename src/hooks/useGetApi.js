import React from 'react';
import axios from 'axios';

function useGetApi(api) {
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    axios.get(api)
      .then(response => {
        setState(response.data)
      })
      .catch(error => console.log(error))
      .finally(() => console.log('Finalizo el llamado a la pokeapi'))

  }, [api])

  return state
}

export default useGetApi;