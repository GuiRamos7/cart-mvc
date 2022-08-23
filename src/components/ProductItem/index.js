import pictureB from '../../b.jpg';
import * as S from './styles';

import { Button } from '../Button';

export const ProductItem = ({
  title = 'Alien',
  image,
  price = 500,
  description = 'This is fully detailed statue of an Alien creature.',
}) => {
  return (
    <S.Container>
      <img src={pictureB} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Price>${price}</S.Price>
      <Button>Buy</Button>
    </S.Container>
  );
};
