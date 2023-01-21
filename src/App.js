import React from 'react'
import "./Assets/Css/style.css"
// import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Contact from './Component/Contact';
import About from './Component/About';
import Navbar from './Component/Navbar';

const App = () => {
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
        <div className="container py-5 top-main" id="top-main">
          <div className="row py-5 px-0 mx-0">
            {/* <div className="col-12 col-md-8"> */}
            <div className="col-8 text-center mx-auto">
              <h1 className='text-white name pt-5'>Prince Talaviya</h1>
              <h2 className='text-white tech'>React Js Developer</h2>
              <p className='text-white main-intro pb-5'>I am a web development engineer and I use React js to develop pages. This project is a resume template that can be used as the project home page or resume page.</p>
              <div className="col-12 text-center my-auto">
                <button type="button" class="btn know-more px-4 py-3">Know More Abut me</button>
              </div>
            </div>
            {/* <div className="col-12 col-md-4 text-center my-auto">
              <button type="button" class="btn btn-success">Know More Abut me</button>
            </div> */}
          </div>
        </div>
      </section>

      <About />
      <Contact />


    </>

  )
}

export default App


