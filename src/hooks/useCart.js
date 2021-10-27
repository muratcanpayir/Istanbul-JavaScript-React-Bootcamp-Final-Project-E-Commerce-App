import { useContext } from "react";
import {CartContext} from "../context/cartContext";

export default function useCart(){
  const {totalPrice,setTotalPrice}=useContext(CartContext);
  return {totalPrice,setTotalPrice};
}