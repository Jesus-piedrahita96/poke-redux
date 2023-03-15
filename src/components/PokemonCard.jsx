import React from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
// import { Meta } from 'antd/es/list/Item';

function PokemonCard({ pokemon }) {

  return (
    <>
      <Card
        title={pokemon.name}
        cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
        extra={<StarOutlined />}
      ></Card>
    </>
  );
}

export default PokemonCard;