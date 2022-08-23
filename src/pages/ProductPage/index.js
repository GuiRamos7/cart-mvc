// import pictureB from '../../b.png';
import React from 'react';

export const ProductPage = () => {
  return (
    <div>
      <h1>Product B</h1>
      <p>Price: 30 USD</p>
      <button onClick={() => console.warn('Not implemented!')}>
        Add to cart
      </button>
      <div>{/* <img src={pictureB} width={640} /> */}</div>
    </div>
  );
};
