import React from 'react';
import {BiSearchAlt} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../actions';

function Searcher() {
  const search = useSelector(state => state.ui.search)
  const dispatch = useDispatch()

  const change = (event) => {
    dispatch(setSearch(event.target.value))
  }

  return (
    <>
      <form className='search' method='post'>
        <input
          id='buscar'
          className='search__input'
          placeholder='Buscar ...'
          onChange={change}
          value={search}
        />
        <label htmlFor="buscar"><BiSearchAlt/></label>
      </form>
    </>
  );
}

export default Searcher;