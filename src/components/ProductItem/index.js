import * as S from './styles';
import Skeleton from 'react-loading-skeleton';
import { Button } from '../Button';
import { moneyFormatter } from 'utils/moneyFormatter';

export const ProductItem = ({
  title = 'Alien',
  image = '',
  price = 500,
  description = 'This is fully detailed statue of an Alien creature.',
  id = '2',
  isLoading = false,
  onClick,
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
      <S.Title data-testid='title'>{title}</S.Title>
      <S.Description data-testid='description'>{description}</S.Description>
      <S.Price data-testid='price'>{moneyFormatter(price)}</S.Price>
      <Button onClick={onClick}>Buy</Button>
    </S.Container>
  );
};
