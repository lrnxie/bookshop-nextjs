import { createContext, useState } from "react";

type CartContext = {
  cart: Book[];
  addCart: (book: Book) => void;
  removeCart: (id: string) => void;
  clearCart: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContext | undefined>(undefined);

export const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState([]);

  const addCart = (book: Book) => {
    setCart([...cart, book]);
  };

  const removeCart = (id: string) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
