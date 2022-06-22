/*Imports*/
import "./Navbar.scss";
import React, { useState } from "react";
import Logo from '../../src/img/logo-imcetron.png';
import { NavLink } from "react-router-dom";

function NavBar() {

  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);

  const header = document.querySelector('.main-header');

  window.addEventListener('scroll', () => {

      const scrollPos = window.scrollY;
      if (scrollPos > 10 ) {
          header.classList.add('scrolled');
      }
      else {
          header.classList.remove('scrolled');
      }
  });
    return (
      <>


  <div class="main-header">
         <img className="logo"
            src={Logo} 
            alt="IMCETRON"
           /> 

      <input type="checkbox" class="menu-btn" id="menu-btn"/>
        <label for="menu-btn" class="menu-icon">
          <span class="menu-icon__line"></span>
        </label>

        <ul className={click ? "nav-links active" : "nav-links"}>
          <li class="nav-link">
          <NavLink
                  exact
                  to="/"
                  target="_parent"
                  onClick={handleClick}
                >
                  Productos
                </NavLink>
          </li>
          <li class="nav-link">
          <NavLink
                  exact
                  to="/servicios" 
                  target="_parent"
                  onClick={handleClick}
                >
                  Servicios
                </NavLink>
          </li>
          <li class="nav-link">
          <NavLink
                  exact
                  to="/empresa"
                  target="_parent"
                  onClick={handleClick}
                >
                  Empresa
                </NavLink>
          </li>
          <li class="nav-link">
          <NavLink
                  exact
                  to="/contacto"
                  target="_parent"
                  onClick={handleClick}
                >
                  Contacto
                </NavLink>
          </li>
          <div className="redes">
              <li class="nav-link2">
                   <a 
                   href="https://www.facebook.com/"
                   target="_blank"
                  >
                 <i className="fa fa-facebook-f"></i></a>
              </li>
             <li class="nav-link2">
            <a 
            href="https://pe.linkedin.com/"
            target="_blank"
            >
            <i className="fa fa-linkedin"></i></a>
              </li>
          </div>
        </ul>
  </div>

      </>
    );
  }
  
  export default NavBar;