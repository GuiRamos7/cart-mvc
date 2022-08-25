import { ProductItem } from 'components';
import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    api.get('/models').then((el) => {
      setProducts(el.data.models);
      setIsLoading(false);
    });
  }, []);

  return (
    <S.Container>
      <h1>Welcome to our shop!</h1>
      <h1>You are probably interested in:</h1>
      <div className='products'>
        {isLoading &&
          Array.from(Array(3).keys()).map(() => <ProductItem isLoading />)}

        {products.map((product) => (
          <ProductItem
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            key={product.id}
            id={product.id}
            onClick={() => history(`/products/${product.id}`)}
          />
        ))}
      </div>
      <h1>Check out the newest product!</h1>
      <div className='products'>
        {isLoading &&
          Array.from(Array(3).keys()).map(() => <ProductItem isLoading />)}
        {products.reverse().map((product) => (
          <ProductItem
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            key={product.id}
            id={product.id}
            onClick={() => history(`/products/${product.id}`)}
          />
        ))}
      </div>
    </S.Container>
  );
};
