import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import useTheme from "../../hooks/useTheme";
import Footer from "../../components/Footer/Footer";


function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <div
        className={`home-container ${
          theme === "light" ? "home-container-light" : "home-container-dark"
        }`}
      >
        <div
          className={`categories-card ${
            theme === "light" ? "categories-card-light" : "categories-card-dark"
          }`}
        >
          <div className="category-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-app-78087.appspot.com/o/Goku%20Tee.jpg?alt=media&token=c723a6f9-0d99-4f23-ae50-8e6f08c520db"
              alt="tshirt-category"
            />
          </div>
          <div
            className={`category-title ${
              theme === "light" ? "category-title-light" : "category-title-dark"
            }`}
          >
            <p>T-Shirts</p>
          </div>
        </div>
        <div
          className={`categories-card ${
            theme === "light" ? "categories-card-light" : "categories-card-dark"
          }`}
        >
          <div className="category-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-app-78087.appspot.com/o/hats%2FPalm%20Cap.jpg?alt=media&token=d974913d-4bdc-40f9-af39-e84935c8264a"
              alt="hat-category"
            />
          </div>
          <div
            className={`category-title ${
              theme === "light" ? "category-title-light" : "category-title-dark"
            }`}
          >
            <p>Hats</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
