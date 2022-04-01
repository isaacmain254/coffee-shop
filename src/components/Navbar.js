import React from 'react';
import { useState } from 'react';
import { BiCoffeeTogo } from "react-icons/bi";
import './Navbar.css'
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }
  const closeMobileMenu = () => setClicked(false);
  return (
    <nav className="navbar">
      <div className="logo" >
        <h1><BiCoffeeTogo style={{ color: '#5c4033' }} /><a href='#home'onClick={closeMobileMenu}>CoffeeShop</a></h1>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} ></i>
      </div>
      <ul className={clicked ? "menu-list active" : "menu-list"}>
        <li>
          <a href="#home" className="menu-item " onClick={closeMobileMenu}>Home</a>
        </li>
        <li>
          <a href="#menu" className="menu-item " onClick={closeMobileMenu}>Our Menu</a>
        </li>
        <li>
          <a href="#about" className="menu-item " onClick={closeMobileMenu}>About</a>
        </li>
        <li>
          <a href="#contact" className="menu-item " onClick={closeMobileMenu} >Contact</a>
        </li>
        <li>
          <a href="#shop" className="menu-item " onClick={closeMobileMenu}>Shop</a>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar
