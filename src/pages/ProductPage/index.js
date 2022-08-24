import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { useLocation } from 'react-router-dom';
import { useCart } from 'hooks/useCart';
import * as S from './styles';
import { Button } from 'components';

export const ProductPage = () => {
  const { addProduct } = useCart();
  const { pathname } = useLocation();
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = pathname.split('/')[2];
    api.get(`/models/${id}`).then((el) => {
      const {
        data: { models },
      } = el;

      setProduct(models);
    });
  }, []);

  if (!product) {
    return 'loading';
  }

  return (
    <S.Container>
      <S.Image src={product.image} />
      <S.Details>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2> {product.price} USD</h2>
        <Button onClick={() => addProduct(product.id)}>Add to cart</Button>
      </S.Details>
      {/* 
      <p>Price: {product.price} USD</p>
      <button onClick={() => console.warn('Not implemented!')}>
        Add to cart
      </button>
      <div><img src={pictureB} width={640} /></div> */}
    </S.Container>
  );
};
