import React, { useEffect } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import useTheme from "../../hooks/useTheme";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTshirts } from "../../redux/actions/tshirtAction";
import REQUEST_STATUS from "../../helpers/constants";
import { useHistory } from "react-router-dom";
import blackBanner from "../../images/black-banner.jpg";

function Home() {
  const { theme } = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();

  //get tshirts
  useEffect(() => {
    dispatch(getTshirts());
  }, [dispatch]);
  const tshirts = useSelector((state) => state.tshirts);
  return (
    <>
      <Header />
      {/* Loading section */}
      {tshirts.status === REQUEST_STATUS.PENDING && (
        <div className="loading">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
      {/* get tshirts and map them. you can click to go to tshirt details page */}
      {tshirts.status === REQUEST_STATUS.SUCCESS && (
        <>
          <div
            className={`home-banner ${
              theme === "light" ? "home-banner-light" : "home-banner-dark"
            }`}
          >
            <img src={blackBanner} alt="banner" />
          </div>
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

export default Home;
