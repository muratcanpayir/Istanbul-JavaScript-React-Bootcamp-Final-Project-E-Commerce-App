import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import REQUEST_STATUS from "../../helpers/constants";
import useTheme from "../../hooks/useTheme";
import {
  postAddToCart,
  resetAddToCart,
} from "../../redux/actions/addToCartAction";
import { getHatDetail } from "../../redux/actions/hatDetailAction";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./HatDetail.scss";

function HatDetail() {
  const { t: translate } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  //get hat details
  useEffect(() => {
    dispatch(getHatDetail(id));
  }, [dispatch,id]);
  const hatDetails = useSelector((state) => state.hatDetail);
  const addToCart = useSelector((state) => state.addToCart);
  useEffect(() => {
    if (addToCart.status === REQUEST_STATUS.SUCCESS) {
      //this reset function for stop toast working permanently
      dispatch(resetAddToCart());
      toast.success(translate("toastify.added"), {
        autoClose: 3000,
        theme: "colored",
      });
    }
  }, [addToCart,dispatch,translate]);
  const needLogin = () => {
    toast.error(translate("toastify.login"), {
      autoClose: 3000,
      theme: "colored",
    });
  };
  return (
    <>
      <Header />
      <div
        className={`tshirt-detail-wrapper ${
          theme === "light"
            ? "tshirt-detail-wrapper-light"
            : "tshirt-detail-wrapper-dark"
        }`}
      >
        {
          <>
            {/* loading section */}
            {hatDetails.status === REQUEST_STATUS.PENDING && (
              <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
            {hatDetails.status === REQUEST_STATUS.SUCCESS && (
              <div
                className={`tshirt-detail ${
                  theme === "light"
                    ? "tshirt-detail-light"
                    : "tshirt-detail-dark"
                }`}
                key={hatDetails.data.id}
              >
                <div className="hat-detail-image">
                  <img
                    src={hatDetails.data.imageUrl}
                    alt={hatDetails.data.title}
                  />
                </div>
                <div
                  className={`tshirt-detail-info ${
                    theme === "light"
                      ? "tshirt-detail-info-light"
                      : "tshirt-detail-info-dark"
                  }`}
                >
                  <div className="tshirt-detail-title">
                    {hatDetails.data.title}
                  </div>
                  <div className="tshirt-detail-desc">
                    {hatDetails.data.description}
                  </div>
                  <div className="tshirt-detail-color">
                    Color: <span>{hatDetails.data.color}</span>
                  </div>
                  <div className="tshirt-detail-price">
                    Price: <span>{hatDetails.data.price} $</span>
                  </div>
                  {/*
                    logged in check. if you logged in it'll show add to cart button
                    if you are not it'll show disabled add to cart button, when you click it toast function needLogin works
                   */}
                  {localStorage.getItem("access_token") ? (
                    <>
                      {/* add to cart button */}
                      <button
                        className="add-to-cart-button"
                        onClick={() => {
                          dispatch(postAddToCart(hatDetails.data));
                        }}
                      >
                        {translate("detail.button")}
                      </button>
                      <ToastContainer />
                    </>
                  ) : (
                    <>
                      <button
                        className="add-to-cart-button-disabled"
                        onClick={needLogin}
                      >
                        {translate("detail.button")}
                      </button>
                      <ToastContainer />
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        }
      </div>
    </>
  );
}

export default HatDetail;
