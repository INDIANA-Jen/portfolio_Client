import React from "react";

import Navbar from './components/Navbar/componentsNavbar/Navbar';

import Hello from "./components/Hello/componentsHello/Hello";
import AboutMe from "./components/AboutMe/ComponentsAboutMe/AboutMe";
import Projects from "./components/Projects/componentsProjects/Projects";
import ContactMe from './components/ContactMe/componentsContactMe/ContactMe';




import './style/App.scss'



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
