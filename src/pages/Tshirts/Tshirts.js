import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import REQUEST_STATUS from "../../helpers/constants";
import { getTshirts } from "../../redux/actions/tshirtAction";
import Header from "../../components/Header/Header";
import "./Tshirts.scss";
import { useHistory } from "react-router";
import useTheme from "../../hooks/useTheme";
import Footer from "../../components/Footer/Footer";

function Products() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { theme } = useTheme();
  useEffect(() => {
    dispatch(getTshirts());
  }, [dispatch]);
  const tshirts = useSelector((state) => state.tshirts);
  console.log(tshirts);
  return (
    <>
      <Header />
      {tshirts.status === REQUEST_STATUS.PENDING && (
        <div class="loading">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      )}
      {tshirts.status === REQUEST_STATUS.SUCCESS && (
        <>
          <div
            className={`product-container ${
              theme === "light"
                ? "product-container-light"
                : "product-container-dark"
            }`}
          >
            {tshirts.data.map((tshirt) => (
              <div
                className={`product-card ${
                  theme === "light" ? "product-card-light" : "product-card-dark"
                }`}
                onClick={() => {
                  history.push("tshirt-details/" + tshirt.id);
                }}
                key={tshirt.id}
              >
                <div className="image">
                  <img src={tshirt.imageUrl} alt={tshirt.title} />
                </div>
                <div
                  className={`product-info ${
                    theme === "light"
                      ? "product-info-light"
                      : "product-info-dark"
                  }`}
                >
                  <div>{tshirt.title}</div>
                  <div>{tshirt.price}$</div>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Products;
