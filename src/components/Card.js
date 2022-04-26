import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="about-card">
        <div className="left-about">
          <p>Coffee Party</p>
          <p>Every Friday & Saturday</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            eligendi officiis ipsa atque nesciunt adipisci similique.
          </p>
          <p>
            <a href="/">
              Make reservation
              <FaAngleRight />
            </a>
          </p>
        </div>
        <div className="right-about">
          <h3>Location</h3>
          <p>
            You can find us,sit amet consectetur, quos eveniet officiis rem in.
          </p>
          <p>
            <IoLocationSharp /> 3RD FLOOR DUMAPLAZA MOMBASA ROAD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
