import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import REQUEST_STATUS from "../../helpers/constants";
import { getCart, resetCart } from "../../redux/actions/cartAction";
import { deleteFromCart, resetDeleteOffer } from "../../redux/actions/deleteFromCartAction";
import "./Cart.scss";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    if (cart.status === REQUEST_STATUS.SUCCESS) {
      setTotalPrice(0);
      cart.data.map((item) => {
        setTotalPrice(prev=>prev+Number(item.price));    
      });
    }
  }, [cart]);
  const deleteProductFromCart=(id)=>{
    dispatch(deleteFromCart(id))
  }
  const deleteState=useSelector(state=>state.deleteFromCart)
  useEffect(()=>{
    if(deleteState.status===REQUEST_STATUS.SUCCESS){
      window.location.href="/cart";
    }
  },[deleteState])

  return (
    <>
    <Header />
    <div className="cart-container">
      <div className="cart-wrapper">
      burasi cart
      {cart.data.map((item) => (
        <div className="cart-items" key={item.id}>
          <div className="cart-image">
            <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="cart-items-right-side">
            <div className="cart-items-info">
          <div className="cart-title">{item.title}</div>
          <div className="cart-price">{item.price}</div>
          </div>
          <button
            onClick={()=>deleteProductFromCart(item.id)}
          >
            delete
          </button>
          </div>
        </div>
      ))}
      <div>{totalPrice}</div>
    </div>
    </div>
    </>
  );
}

export default Cart;
