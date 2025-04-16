import React from "react";

import Navbar from './components/Navbar/componentsNavbar/Navbar';

import Hello from "./components/Hello/HelloDisplay";
//import AboutMe from "./components/AboutMe/ComponentsAboutMe/AboutMe";
import AboutMe from "./components/AboutMe/AboutMeDisplay";
import Projects from "./components/Projects/componentsProjects/Projects";
import ContactMe from './components/ContactMe/componentsContactMe/ContactMe';

import './styleCommon/App.scss'



function App() {
  

  return (
  <>
    

          <div className="mainContainer">
            <Navbar/>

            <div className="">
              <Hello/>
              <AboutMe/>
              <Projects/>
              <ContactMe/>
            </div>

          </div>
    
  </>

  )
}

export default App;
