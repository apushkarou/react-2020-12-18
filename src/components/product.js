import React from 'react';
import counter from '../hocs/counter';

function Product({ product, amount, increment, decrement }) {
  return (
    <>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button onClick={decrement}>-</button>
      {amount}
      <button onClick={increment}>+</button>
    </>
  );
}

export default counter(Product);
