import React from 'react'
import './Footer.css';
import { BsFacebook, BsTwitter, BsYoutube} from "react-icons/bs";


const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer-content">
            <div className="about-us">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quisquam assumenda vero dolores impedit atque recusandae odio blanditiis deleniti illum.</p>
                <div className="social-media">
                <i><BsFacebook /></i>
                <i><BsTwitter /></i>
                <i><BsYoutube /></i>
                </div>
                
            </div>
            <div className="contact">
                <h3>Contact </h3>
                <p>3RD FLOOR DUMAPLAZA MOMBASA ROAD</p>
                <p>+254 799644320</p>
                <p>contact@info.com</p>
            </div>
            <div className="opening-info">
                <h3>Opening Hours</h3>
                <p>Mon-Fri--8AM-8PM</p>
                <p>Saturday--8AM-4PM</p>
                <p>Sunday--closed</p>
            </div>
            </div>
            <hr />
            <p className='copy'>Copyright &copy; 2022 CoffeeShop | Powered by Coffee Shop</p>
        </div>
    )
}

export default Footer
