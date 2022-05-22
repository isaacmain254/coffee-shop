import React from "react";
import "./Home.css";
import coffee7 from "../Assets/coffee7-nobg.png";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="left-content">
          <p className="first-p">
            What's life Without <span>coffee?</span>
          </p>

          <p className="second-p">Welcome!</p>
          <p className="fifth">
            A cup of coffee can completely change your day!!
          </p>
          <p className="third-p">We serve the richest coffee in the city!</p>
          <p className="fourth-p">
            High quality in every cup of coffee that we serve ...
          </p>
          <button className="order">Order Now</button>
        </div>
        <div className="right-content">
          <img src={coffee7} alt="Cup of coffee at CoffeeShop" />
        </div>
      </div>
    </div>
  );
};

export default Home;
