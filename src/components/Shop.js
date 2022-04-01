import React from "react";
import { FaAngleRight } from 'react-icons/fa';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-content">
      <div className="shop">
      <div className="shop-left">
        <h2>Your home deserves coffee ,too</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          recusandae sed tempore beatae quam dolore tempora iusto architecto
          ullam quia fugit, voluptates amet quibusdam expedita distinctio autem
          excepturi. Porro, esse facilis sequi, debitis illo aut repellendus
          ipsum error nemo ratione ad pariatur itaque distinctio laboriosam?
        </p>
        
      </div>
      <div className="shop-right">
        <img src="images/coffee6-nobg.png" alt="coffee"/>
      </div>
      </div>
      <p className="shop-now"><a href="/shop">More Coffee<FaAngleRight/></a></p>
    </div>
  );
};

export default Shop;
