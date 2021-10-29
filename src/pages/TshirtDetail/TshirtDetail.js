import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import REQUEST_STATUS from "../../helpers/constants";
import { getTshirtDetail } from "../../redux/actions/tshirtDetailAction";
import {
  postAddToCart,
  resetAddToCart,
} from "../../redux/actions/addToCartAction";
import "./TshirtDetail.scss";
import Header from "../../components/Header/Header";
import useTheme from "../../hooks/useTheme";
import {useTranslation} from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function TshirtDetail() {
  const {t:translate}=useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  useEffect(() => {
    dispatch(getTshirtDetail(id));
  }, []);

  const tshirtDetails = useSelector((state) => state.tshirtDetail);
  const addToCart = useSelector((state) => state.addToCart);
  useEffect(() => {
    if (addToCart.status === REQUEST_STATUS.SUCCESS) {
      dispatch(resetAddToCart()); 
      toast.success(translate("toastify.added"), {
        autoClose: 3000,
        theme:"colored"
      });
    }
  }, [addToCart]);
  const needLogin=()=>{
    toast.error(translate("toastify.login"), {
      autoClose: 3000,
      theme:"colored"
    });
    console.log("kjahsd");
  }
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
            {tshirtDetails.status === REQUEST_STATUS.PENDING && (
              <div>Loading...</div>
            )}
            {tshirtDetails.status === REQUEST_STATUS.SUCCESS && (
              <div
                className={`tshirt-detail ${
                  theme === "light"
                    ? "tshirt-detail-light"
                    : "tshirt-detail-dark"
                }`}
                key={tshirtDetails.data.id}
              >
                <div className="tshirt-detail-image">
                  <img
                    src={tshirtDetails.data.imageUrl}
                    alt={tshirtDetails.data.title}
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
                    {tshirtDetails.data.title}
                  </div>
                  <div className="tshirt-detail-desc">
                    {tshirtDetails.data.description}
                  </div>
                  <div className="tshirt-detail-color">
                    Color: <span>{tshirtDetails.data.color}</span>
                  </div>
                  <div className="tshirt-detail-price">
                    Price: <span>{tshirtDetails.data.price} $</span>
                  </div>
                  {localStorage.getItem("access_token") ? (
                    <>
                    <button
                      className="add-to-cart-button"
                      onClick={() => {
                        dispatch(postAddToCart(tshirtDetails.data));
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

export default TshirtDetail;
