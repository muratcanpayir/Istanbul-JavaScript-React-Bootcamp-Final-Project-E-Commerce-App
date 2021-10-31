import { createContext, useState } from "react";

//cart context created for use cart total price on header
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <CartContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
