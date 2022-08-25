import { useCart } from 'hooks/useCart';
import * as S from './styles';
import { BsTrashFill } from 'react-icons/bs';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

export const Cart = () => {
  const { cart, updateProductAmount, removeProduct } = useCart();

  const calculateAmount = () => {
    const total = cart.reduce((acc, el) => {
      return acc + el.amount * el.price;
    }, 0);

    return total;
  };

  return (
    <S.Container>
      {cart.map((el) => (
        <S.ProductItem>
          <img src={el.image} />

          <div className='infos'>
            <h1>{el.title}</h1>
            <span>{el.description}</span>
          </div>

          <div className='shop-infos'>
            <p>${el.price}</p>
            <div className='update'>
              <IoMdArrowDropleft
                onClick={() => updateProductAmount(el.id, el.amount - 1)}
                className='arrow'
              />
              <span>Qnt: {el.amount}</span>
              <IoMdArrowDropright
                onClick={() => updateProductAmount(el.id, el.amount + 1)}
                className='arrow'
              />
            </div>
            <div onClick={() => removeProduct(el.id)} className='remove'>
              <BsTrashFill />
              <span>REMOVE</span>
            </div>
          </div>
        </S.ProductItem>
      ))}

      <S.CheckoutBox>
        <h1>Total: </h1>
        <span>${calculateAmount()}</span>
      </S.CheckoutBox>
    </S.Container>
  );
};
