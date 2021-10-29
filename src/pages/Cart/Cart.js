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
import useTheme from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

function Cart() {
  const { t: translate } = useTranslation();
  const { totalPrice, setTotalPrice } = useCart();
  const { theme } = useTheme();
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
      dispatch(getCart());
    }
  }, [deleteState]);

  return (
    <>
      <Header />
      {cart.status === REQUEST_STATUS.PENDING && <div>Loading....</div>}
      {cart.status === REQUEST_STATUS.SUCCESS && (
        <div
          className={`cart-container ${
            theme === "light" ? "cart-container-light" : "cart-container-dark"
          }`}
        >
          <div className="cart-wrapper">
            {cart.data.length === 0 ? (
              <p className="cart-title">Your cart is empty.</p>
            ) : (
              <p className="cart-title">
                CART{" "}
                {cart.data.length === 1 && (
                  <span>({cart.data.length} Product)</span>
                )}
                {cart.data.length > 1 && (
                  <span>({cart.data.length} Products)</span>
                )}
              </p>
            )}
            {cart.data.map((item) => (
              <div
                className={`cart-items ${
                  theme === "light" ? "cart-items-light" : "cart-items-dark"
                }`}
                key={item.id}
              >
                <div className="cart-image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="cart-items-right-side">
                  <div className="cart-items-info">
                    <div
                      className={`cart-title ${
                        theme === "light"
                          ? "cart-title-light"
                          : "cart-title-dark"
                      }`}
                    >
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-price">
                      <p>{item.price} $</p>
                    </div>
                  </div>
                  <button
                    className={`delete-from-cart-button ${
                      theme === "light"
                        ? "delete-from-cart-button-light"
                        : "delete-from-cart-button-dark"
                    }`}
                    onClick={() => deleteProductFromCart(item.id)}
                  >
                    <RiDeleteBinLine size={"24px"} />
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-subtotal">
              <p>
                {translate("cart.subtotal")}:{" "}
                <span>{totalPrice.toFixed(2)} $</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
