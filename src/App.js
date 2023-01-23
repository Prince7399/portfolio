import { React, useEffect } from 'react'
import "./Assets/Css/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Contact from './Component/Contact';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Project from './Component/Project';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter> */}
      <section className='top-div py-5'>
        <Navbar />
        <div className="container py-md-5 top-main" id="top-main">
          <div className="row py-md-5 px-0 mx-0">
            {/* <div className="col-12 col-md-8"> */}
            <div className="col-12 col-md-8 text-center mx-auto">
              <h1 className='text-white name pt-5' data-aos="flip-left" data-aos-duration="1500">Prince Talaviya</h1>
              <h2 className='text-white tech' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000">React Js Developer</h2>
              <p className='text-white main-intro pb-5' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000">I am a web development engineer and I use React js to develop pages. This project is a resume template that can be used as the project home page or resume page.</p>
              <div className="col-12 text-center my-auto">
                <button type="button" className="btn know-more px-3 py-2 px-md-4 py-md-3">Know More About me</button>
              </div>
            </div>
            {/* <div className="col-12 col-md-4 text-center my-auto">
              <button type="button" className="btn btn-success">Know More Abut me</button>
            </div> */}
          </div>
        </div>
      </section>

      <About />
      <Project />
      <Contact />


    </>

  )
}

export default App


