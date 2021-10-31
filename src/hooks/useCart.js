import { useContext } from "react";
import { CartContext } from "../context/cartContext";

//custom hook for context
export default function useCart() {
  const { totalPrice, setTotalPrice } = useContext(CartContext);
  return { totalPrice, setTotalPrice };
}
