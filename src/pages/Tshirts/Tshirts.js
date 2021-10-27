import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import { getTshirts } from "../../redux/actions/tshirtAction";
import Header from "../../components/Header/Header";
import "./Tshirts.scss";
import { useHistory } from "react-router";

function Products() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getTshirts());
  }, [dispatch]);
  const tshirts = useSelector((state) => state.tshirts);
  console.log(tshirts);
  return (
    <>
      <Header />
      {tshirts.status === REQUEST_STATUS.PENDING && <div>Loading....</div>}
      {tshirts.status === REQUEST_STATUS.SUCCESS && (
        <div className="product-container">
          {tshirts.data.map((tshirt) => (
            <div
              className="product-card"
              onClick={() => {
                history.push("tshirt-details/" + tshirt.id);
              }}
              key={tshirt.id}
            >
              <div className="image">
                <img src={tshirt.imageUrl} alt={tshirt.title} />
              </div>
              <div className="product-info">
                <div>{tshirt.title}</div>
                <div>{tshirt.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
