import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addCart = (book) => {
    setCart([...cart, book]);
  };

  const removeCart = (id) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
