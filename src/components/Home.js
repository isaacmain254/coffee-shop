import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="left-content">
          <p className="first-p">
            What's life Without <span>coffee?</span>
          </p>
          <p className="second-p">Welcome!</p>
          <p className="third-p">We serve the richest coffee in the city!</p>
          <p className="fourth-p">
            High quality in every cup of coffee that we serve ...
          </p>
          <button className="order">Order Now</button>
        </div>
        <div className="right-content">
          <img src="images/coffee7-nobg.png" alt="coffee cup" />
        </div>
      </div>
    </div>
  );
};

export default Home;
