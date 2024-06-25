import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  return (
    <div className="FooterMain">
      <div className="FooterColumn1">
        <img src="/images/logo.png" alt="" />
        <div className="socialIcons">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="FooterColumn2">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/" onClick={handleExploreClick}>Home</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={handleExploreClick}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleExploreClick}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className="FooterColumn3">
        <div className="MapLocation">
          <iframe
            className="responsive-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7241206233575!2d77.57689719999999!3d13.053224400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1750e19aec8f%3A0x63bf48f01f16ef5d!2snikhil%20enterprises%20pvc%20strip%20curtain%20air%20curtain%20monsoon%20blinds%20fly%20catcher%20automatic%20door!5e0!3m2!1sen!2sin!4v1718778271607!5m2!1sen!2sin"
            width="480"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
