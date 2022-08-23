import pictureB from '../../b.jpg';
import * as S from './styles';

export const ProductItem = ({ title, image, price, description }) => {
  return (
    <S.Container>
      <img src={pictureB} />

      <S.Title>Alien</S.Title>
      <S.Description>
        This is fully detailed statue of an Alien creature.{' '}
      </S.Description>
      <S.Price>$500</S.Price>
    </S.Container>
  );
};
