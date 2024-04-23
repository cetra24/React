import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <p>Productos disponibles</p>
    </div>
  );
}

export default ItemListContainer;
