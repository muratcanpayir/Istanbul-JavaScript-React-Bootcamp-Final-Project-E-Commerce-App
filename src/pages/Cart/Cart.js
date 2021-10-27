import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import REQUEST_STATUS from "../../helpers/constants";
import { getCart } from "../../redux/actions/cartAction";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  deleteFromCart,
  resetDeleteOffer,
} from "../../redux/actions/deleteFromCartAction";
import "./Cart.scss";
import useCart from "../../hooks/useCart";

function Cart() {
  const { totalPrice, setTotalPrice } = useCart();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    if (cart.status === REQUEST_STATUS.SUCCESS) {
      setTotalPrice(0);
      cart.data.map((item) => {
        setTotalPrice((prev) => prev + Number(item.price));
      });
    }
  }, [cart]);
  const deleteProductFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };
  const deleteState = useSelector((state) => state.deleteFromCart);
  useEffect(() => {
    if (deleteState.status === REQUEST_STATUS.SUCCESS) {
      window.location.href = "/cart";
    }
  }, [deleteState]);

  return (
    <>
      <Header />
      {cart.status === REQUEST_STATUS.PENDING && <div>Loading....</div>}
      {cart.status === REQUEST_STATUS.SUCCESS && (
        <div className="cart-container">
          <div className="cart-wrapper">
            {cart.data.map((item) => (
              <div className="cart-items" key={item.id}>
                <div className="cart-image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="cart-items-right-side">
                  <div className="cart-items-info">
                    <div className="cart-title">
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-price">
                      <p>{item.price} $</p>
                    </div>
                  </div>
                  <button onClick={() => deleteProductFromCart(item.id)}>
                    <RiDeleteBinLine size={"24px"} />
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-subtotal">
              <p>
                Subtotal: <span>{totalPrice} $</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
