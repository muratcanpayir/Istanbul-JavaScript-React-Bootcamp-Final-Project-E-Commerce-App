import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import REQUEST_STATUS from "../../helpers/constants";
import { getTshirtDetail } from "../../redux/actions/tshirtDetailAction";
import { postAddToCart, resetAddToCart } from "../../redux/actions/addToCartAction";
import "./TshirtDetail.scss";
import Header from "../../components/Header/Header";

function TshirtDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTshirtDetail(id));
  }, []);

  const tshirtDetails = useSelector((state) => state.tshirtDetail);
  const addToCart = useSelector((state) => state.addToCart);
  useEffect(() => {
    if (addToCart.status === REQUEST_STATUS.SUCCESS) {
      dispatch(resetAddToCart());
      alert("addet to cart");
    }
  }, [addToCart]);
  return (
    <>
      <Header />
      <div className="tshirt-detail-wrapper">
        {
          <>
            {tshirtDetails.status === REQUEST_STATUS.PENDING && (
              <div>Loading...</div>
            )}
            {tshirtDetails.status === REQUEST_STATUS.SUCCESS && (
              <div className="tshirt-detail" key={tshirtDetails.data.id}>
                <div className="tshirt-detail-image">
                  <img
                    src={tshirtDetails.data.imageUrl}
                    alt={tshirtDetails.data.title}
                  />
                </div>
                <div className="tshirt-detail-info">
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
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      dispatch(postAddToCart(tshirtDetails.data));
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

export default TshirtDetail;
