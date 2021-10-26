import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import { getCart } from "../../redux/actions/cartAction";
import { deleteFromCart } from "../../redux/actions/deleteFromCartAction";
import "./Cart.scss";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
    setTotalPrice(0);
  }, []);
  useEffect(() => {
    if (cart.status === REQUEST_STATUS.SUCCESS) {
      cart.data.map((item) => {
        setTotalPrice(totalPrice + Number(item.price));
      });
    }
  }, [cart]);

  return (
    <div>
      burasi cart
      {cart.data.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>{item.price}</div>
          <button
            onClick={() => {
              dispatch(deleteFromCart(item.id));
            }}
          >
            delete
          </button>
        </div>
      ))}
      <div>{totalPrice}</div>
    </div>
  );
}

export default Cart;
