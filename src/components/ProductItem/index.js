import * as S from './styles';

import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const ProductItem = ({
  title = 'Alien',
  image = '',
  price = 500,
  description = 'This is fully detailed statue of an Alien creature.',
  id = '2',
}) => {
  return (
    <S.Container>
      <img src={image} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Price>${price}</S.Price>
      <Link to={`/products/${id}`}>
        <Button>Buy</Button>
      </Link>
    </S.Container>
  );
};
