import React from "react";
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  

  return (
    <>

    <Navbar/>

    <div className="container">
      <Hello/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>

    </div>
     
    </>
  )
}

export default App
