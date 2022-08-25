import { createContext, useState, useContext, useEffect } from 'react';
import { api } from 'services/api';

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = async (id) => {
    const productExists = cart.find((el) => el.id === id);
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (productExists) {
      productExists.amount = amount;
      updateProductAmount(id, amount);
      return;
    }

    const product = await api.get(`/models/${id}`).then((el) => el.data.models);
    if (!product) {
      throw Error('Error');
    }

    const newProduct = { ...product, amount: 1 };
    setCart([...cart, newProduct]);
    localStorage.setItem('@cart', JSON.stringify([...cart, newProduct]));
  };

  const removeProduct = async (productId) => {
    const productExists = cart.find((el) => el.id === productId);
    if (productExists) {
      const newCart = cart.filter((el) => el.id !== productId);
      setCart(newCart);
      localStorage.setItem('@cart', JSON.stringify(newCart));
    }
  };

  const updateProductAmount = async (productId, amount) => {
    if (amount <= 0) {
      removeProduct(productId);
      return;
    }

    const updateCart = [...cart];
    const productExists = cart.find((el) => el.id === productId);

    if (productExists) {
      productExists.amount = amount;

      setCart(updateCart);
      localStorage.setItem('@cart', JSON.stringify([...updateCart]));
    }
  };

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('@cart'));

    if (dataFromLocalStorage) {
      setCart(dataFromLocalStorage);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
