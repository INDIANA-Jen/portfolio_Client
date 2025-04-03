import React from "react";
import { Link } from "react-scroll";

import '../style/Navbar.scss'

function Navbar() {
  
  return (
    <>
      <div className="header">
        <div className="navContainer">
          {/*1.Partie Navbar logo */}
          <div className="navLogo">
            
              fmichael weaver

          </div>

          {
            /* 1. Partie liste de la Navbar
            * Commencement : d'abord créer une liste avec <ul><li></li></ul>.
            * Ensuite, Link : c'est un composant fourni par la bibliothèque React Router. Il est utilisé pour la navigation entre différentes pages d'une application sans recharger la page.
            * En même temps, installation de react-scroll : pnpm install react-scroll
            */
          }
          <ul className="navList">
            <li>
              <Link className="items">_hello</Link>
            </li>
            <li>
              <Link className="items">_about-me</Link>
            </li>
            <li>
              <Link className="items"> _projects</Link>
            </li>
          </ul>
          <div className="navContact">
            _contact-me
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Navbar;
