import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import REQUEST_STATUS from "../../helpers/constants";
import useTheme from "../../hooks/useTheme";
import { postAddToCart } from "../../redux/actions/addToCartAction";
import { getHatDetail } from "../../redux/actions/hatDetailAction";
import "./HatDetail.scss";

function HatDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  useEffect(() => {
    dispatch(getHatDetail(id));
  }, []);
  const hatDetails = useSelector((state) => state.hatDetail);
  console.log(hatDetails);
  const addToCart = useSelector((state) => state.addToCart);
  useEffect(() => {
    if (addToCart.status === REQUEST_STATUS.SUCCESS) {
      alert("added to cart");
    }
  }, [addToCart]);
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
            {hatDetails.status === REQUEST_STATUS.PENDING && (
              <div>Loading...</div>
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
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      dispatch(postAddToCart(hatDetails.data));
                    }}
                  >
                    Add To Cart!
                  </button>
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
