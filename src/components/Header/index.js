import { RiHomeFill, RiShoppingCart2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import * as S from './style';
import { useCart } from 'hooks/useCart';

export const Header = () => {
  const { cart } = useCart();

  const getAmount = () => {
    let amount = 0;

    cart.forEach((el) => {
      amount = amount + el.amount;
    });

    return amount;
  };

  return (
    <S.Header>
      <Link to='/'>
        <S.Title>90s Shop</S.Title>
      </Link>
      <nav>
        <ul>
          <Link to='/'>
            <li>
              <S.Link href='/'>
                <RiHomeFill />
                Home
              </S.Link>
            </li>
          </Link>
          |
          <li>
            <Link to='/cart'>
              <S.Link href='/cart'>
                <RiShoppingCart2Fill /> Cart {getAmount()}
              </S.Link>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </S.Header>
  );
};
