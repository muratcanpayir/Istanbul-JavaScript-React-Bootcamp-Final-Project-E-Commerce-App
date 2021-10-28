import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="categories-card">
          <div className="category-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-app-78087.appspot.com/o/Goku%20Tee.jpg?alt=media&token=c723a6f9-0d99-4f23-ae50-8e6f08c520db"
              alt="tshirt-category"
            />
          </div>
          <div className="category-title">
            <p>T-Shirts</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
