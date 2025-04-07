import React from "react";
import { Link } from "react-scroll";

import '../style/Navbar.scss'

function Navbar() {
  
  return (
    <>
      <div className="header">
        <div className="navContainer">
          {
            /* 1. Partie liste de la Navbar
            * Commencement : d'abord créer une liste avec <ul><li></li></ul>.
            * Ensuite, Link : c'est un composant fourni par la bibliothèque React Router. Il est utilisé pour la navigation entre différentes pages d'une application sans recharger la page.
            * En même temps, installation de react-scroll : pnpm install react-scroll
            */
          }
          <ul className="navList">
            <li className="yourname">
                {/*1.Partie Navbar logo */}
                  <Link className="contyourname">michael-weaver</Link>
            </li>
            <li className="items">
                <Link>_hello</Link>

            </li>
            <li className="items">
                <Link>_about-me</Link>
            </li>
            <li className="items">
                <Link> _projects</Link>
            </li >
            <li  className="navnull">
                <Link></Link>
            </li>
            <li  className="navContact">
              <div>
                <Link>_contact-me</Link>
              </div>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  )
}

export default Navbar;
