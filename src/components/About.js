import React from "react";
import "./About.css";
import { FaAngleRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="about-content" id="about">
      <div className="head">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          natus quibusdam non nulla error,
          <br /> voluptate doloremque fugiat.
        </p>
      </div>
      <div className="content">
        <div className="about-head">
          <h3>
            We offer a unique coffee environment unlike any other in town .
          </h3>
        </div>
        <div className="about-body">
          <h3>Why you should try us</h3>
          <p>We offer the best coffee in town ... </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, quos eveniet officiis rem
            in. Magni temporibus suscipit officiis tenetur veniam nihil quo
            corporis maiores nesciunt quaerat dicta ex, harum inventore
            voluptatum laborum corrupti sequi quos neque ducimus ipsam autem
            dolores eveniet unde consequuntur. Repellendus provident dolor quo
            aperiam, laudantium numquam quis sint aliquam. Vero, et adipisci
            illo ea reprehenderit necessitatibus ab quaerat voluptatibus animi
            corrupti iusto nam sit minima autem architecto quidem laborum
            eveniet nostrum eaque? Quam, quia? Nobis, molestias culpa!
            Voluptates, adipisci facilis?
          </p>
          <p>
            Read more <FaAngleRight />
          </p>
        </div>
      </div>
      {/* <div className="about-container">
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
      </div> */}
    </div>
  );
};

export default About;
