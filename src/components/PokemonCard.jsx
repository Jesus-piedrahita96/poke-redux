import React from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
// import { Meta } from 'antd/es/list/Item';

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch()

  const handleAddFavorite = (object) => {
    dispatch(setFavorite(object))
  }

  return (
    <>
      <Card
        title={pokemon.name}
        cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
        extra={<StarOutlined />}
      >
        <button
          onClick={() => handleAddFavorite(pokemon)}
        >
          Favorite
        </button>
      </Card>
    </>
  );
}

export default PokemonCard;