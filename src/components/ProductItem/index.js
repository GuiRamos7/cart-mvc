import * as S from './styles';
import Skeleton from 'react-loading-skeleton';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const ProductItem = ({
  title = 'Alien',
  image = '',
  price = 500,
  description = 'This is fully detailed statue of an Alien creature.',
  id = '2',
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <S.Container>
        <Skeleton style={{ borderRadius: '24px' }} height={200} />
        <S.Title>
          <Skeleton />
        </S.Title>
        <S.Description>
          <Skeleton height={5} count={3} />
        </S.Description>
        <S.Price>
          <Skeleton height={10} />
        </S.Price>
        <Skeleton height={20} />
      </S.Container>
    );
  }

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
