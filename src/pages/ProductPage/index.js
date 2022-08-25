import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Button } from 'components';
import { api } from 'services/api';
import { useLocation } from 'react-router-dom';
import { useCart } from 'hooks/useCart';

import * as S from './styles';

export const ProductPage = () => {
  const { addProduct } = useCart();
  const { pathname } = useLocation();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = pathname.split('/')[2];
    api
      .get(`/models/${id}`)
      .then((el) => {
        const {
          data: { models },
        } = el;

        setProduct(models);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <Skeleton height={400} />
        <div>
          <Skeleton height={45} />
          <Skeleton height={15} />
          <Skeleton height={15} />
          <Skeleton height={45} />
        </div>
      </S.LoadingContainer>
    );
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
    </S.Container>
  );
};
