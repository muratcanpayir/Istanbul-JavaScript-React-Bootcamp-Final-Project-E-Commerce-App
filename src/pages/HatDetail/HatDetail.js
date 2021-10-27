import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import REQUEST_STATUS from "../../helpers/constants";
import { postAddToCart } from "../../redux/actions/addToCartAction";
import { getHatDetail } from "../../redux/actions/hatDetailAction";
import "./HatDetail.scss";

function HatDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
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
      <div className="tshirt-detail-wrapper">
        {
          <>
            {hatDetails.status === REQUEST_STATUS.PENDING && (
              <div>Loading...</div>
            )}
            {hatDetails.status === REQUEST_STATUS.SUCCESS && (
              <div className="tshirt-detail" key={hatDetails.data.id}>
                <div className="tshirt-detail-image">
                  <img
                    src={hatDetails.data.imageUrl}
                    alt={hatDetails.data.title}
                  />
                </div>
                <div className="tshirt-detail-info">
                  <div className="tshirt-detail-title">
                    {hatDetails.data.title}
                  </div>
                  <div className="tshirt-detail-desc">
                    {hatDetails.data.description}
                  </div>
                  <div className="tshirt-detail-color">
                    {hatDetails.data.color}
                  </div>
                  <div className="tshirt-detail-price">
                    {hatDetails.data.price}
                  </div>
                  <button
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
