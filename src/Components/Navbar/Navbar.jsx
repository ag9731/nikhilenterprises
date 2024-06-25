import React, { useState, useRef } from "react";
import "./Navbar.css";
import { FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayDrop, setDrop] = useState(false);
  const timeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDrop(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDrop(false);
    }, 350); // Adjust the delay time here (in milliseconds)
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <div className="TitleNavbar">
        <div className="NavTop">
          <div className="NavTopLeftContent">
            <h4>
              Delivers top-quality, cleaner environments with exceptional design
              and performance.
            </h4>
          </div>
          <div className="NavTopRightContent">
            <div>
              <FaPhoneAlt className="NavIcons" />
              <p>
                <a className="mobilenumber" href="tel:9663131304">
                  9663131304
                </a>
              </p>
            </div>
            <div>
              <FaPhoneAlt className="NavIcons" />
              <p>
                <a className="mobilenumber" href="tel:7411444961">
                  9663131304
                </a>
              </p>
            </div>
            <div>
              <FaEnvelopeOpen className="NavIcons" />
              <p>
                {" "}
                <a className="mobilenumber" href="mailto:nikhil.enterprises.234@gmail.com">
                  nikhil.enterprises.234@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Nav Bottom Section - Main Navigation Bar */}
        <div className="navmain">
          <div className="NavBottom">
            <div className="LogoSection">
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <div
              className={`NavigationSection ${mobileMenuOpen ? "open" : ""}`}
            >
              <div className="NavNavigation">
                <ul>
                  <li>
                    <Link to="/" onClick={handleLinkClick}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" onClick={handleLinkClick}>
                      About Us
                    </Link>
                  </li>
                  <div
                    className="dropMain"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="drop">
                      <li>Products</li>
                      <AiFillCaretDown
                        className={`dropIcon ${displayDrop ? "rotated" : ""}`}
                      />
                    </div>
                    {displayDrop && (
                      <div
                        className="dropMenu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <ul className="dropUl">
                          <li>
                            <Link
                              to="/products/pvc-strip-curtains"
                              onClick={handleLinkClick}
                            >
                              Pvc stripe curtain
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/air-curtain"
                              onClick={handleLinkClick}
                            >
                              Air curtain
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/softwall-curtain"
                              onClick={handleLinkClick}
                            >
                              Soft wall curtain,car detailing centre curtains &
                              washing area curtains
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/industrial-door-curtain"
                              onClick={handleLinkClick}
                            >
                              Industrial door curtains
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/fly-catcher"
                              onClick={handleLinkClick}
                            >
                              Fly catcher
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/monsoon-blinds"
                              onClick={handleLinkClick}
                            >
                              Monsoon blinds
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/pvc-blinds"
                              onClick={handleLinkClick}
                            >
                              Pvc blinds
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/roller-blinds"
                              onClick={handleLinkClick}
                            >
                              Roller blinds
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/vertikacl-blinds"
                              onClick={handleLinkClick}
                            >
                              Vartikacl blinds
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/hand-dryer"
                              onClick={handleLinkClick}
                            >
                              Hand dryer
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/automatic-door"
                              onClick={handleLinkClick}
                            >
                              Automatic door
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <li>
                    <Link to="/testimonial" onClick={handleLinkClick}>
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={handleLinkClick}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="NavButton">
                <Link to="/contact">
                  <button className="btn" onClick={handleLinkClick}>
                    GET A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="menuIcons">
            <div className="menuIconsChild" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <AiOutlineClose className="menuClose" />
              ) : (
                <FaAlignRight className="menuOpen" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
