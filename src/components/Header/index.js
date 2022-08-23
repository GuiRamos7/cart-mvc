import { RiHomeFill, RiShoppingCart2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import * as S from './style';

export const Header = () => {
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
                <RiShoppingCart2Fill /> Cart {[].length}
              </S.Link>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </S.Header>
  );
};
