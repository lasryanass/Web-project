import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";


import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className='logo'>
          <a href='http://www.inpt.ac.ma/'>
            <img src='./images.png' alt='Acceuil' className='rounded' className="img-fluid" />
          </a>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Aide</NavLink>
            </li>
            <li>
              <NavLink to="/">Contacter Nous </NavLink>
            </li>
            <li>

              <a href='https://inemail.ine.inpt.ma/' >IneMail</a>

            </li>

          </ul>
        </div>
        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
