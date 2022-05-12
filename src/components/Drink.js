import React from "react";
import "./Drink.css";

const Drink = ({ drink }) => (
  <div className="card-item">
    <div className="card-content">
      <img src={require("../Assets" + drink.image)} alt="coffeeimage" />
      <p className="price">${drink.price}</p>
      <h2>{drink.name}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
        placeat?
      </p>
      <button>Get Delivery</button>
    </div>
  </div>
);

export default Drink;
