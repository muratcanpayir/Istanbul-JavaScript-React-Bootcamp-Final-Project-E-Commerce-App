import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/actions/cartAction';
import "./Cart.scss";

function Cart() {
const dispatch=useDispatch();


useEffect(()=>{
  dispatch(getCart());
},[])
const cart=useSelector(state=>state.cart);
console.log(cart);
  return (
    <div>
     burasi cart
     {
       cart.data.map((item)=>(
         <>
        <div>{item.title}</div>
        <div>{item.price}</div>
        </>
       ))
     }
    </div>
  )
}

export default Cart;
