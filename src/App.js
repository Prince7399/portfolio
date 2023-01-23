import { React, useEffect } from 'react'
import "./Assets/Css/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Footer from './Component/Footer';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <i className="fa-solid fa-angles-up to-top"></i> */}



      {/* <About />
      <Project />
      <Contact /> */}


    </>

  )
}

export default App


