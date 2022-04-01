import React from "react";
import { data } from "./data";
import Drink from "./Drink";
import "./Menu.css";
import { FaAngleRight } from 'react-icons/fa';

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <h1>Drinks</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
        illum atque <br />minus optio voluptatem ratione natus fugit.
      </p>
      <p><a href="#">All Drinks<FaAngleRight/></a></p>
        <div className="drink">
          {data.map((drink) => (
            <Drink className="drink-item" key={drink.id} drink={drink} />
          ))}
        </div>
    </div>
  );
};

export default Menu;
