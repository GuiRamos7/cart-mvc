import { ProductItem } from 'components';
import { useEffect, useState } from 'react';
import { api } from 'services/api';

import * as S from './styles';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/models').then((el) => {
      setProducts(el.data.models);
    });
  }, []);

  return (
    <S.Container>
      Welcome to our shop!
      <h1>You are probably interested in:</h1>
      <div className='products'>
        {products.map((product) => (
          <ProductItem
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
      <h1>Check out the newest product!</h1>
      <div className='products'>
        {products.reverse().map((product) => (
          <ProductItem
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </S.Container>
  );
};
