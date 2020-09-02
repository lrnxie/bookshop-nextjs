import { createContext, useState } from "react";

type CartContext = {
  cart: CartItem[];
  addCart: (book: Book) => void;
  removeCart: (id: string) => void;
  updateAmount: (id: string, amount: number) => void;
  clearCart: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContext | undefined>(undefined);

export const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addCart = (newBook: Book) => {
    setCart([{ ...newBook, amount: 1 }, ...cart]);
  };

  const removeCart = (id: string) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  const updateAmount = (id: string, amount: number) => {
    setCart(cart.map((book) => (book.id === id ? { ...book, amount } : book)));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addCart, removeCart, updateAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
