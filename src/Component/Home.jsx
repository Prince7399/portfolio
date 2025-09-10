import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
            <section className='top-div py-5' id="home">
                <div className="container py-md-5 top-main" id="top-main">
                    <div className="row py-sm-5 py-md-5 px-0 mx-0">
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
                                data-aos-duration="1000">
                                I am a front-end web developer with 2 years of hands-on experience building responsive and dynamic web applications using React.js.
                                I specialize in developing scalable UI components, optimizing performance, and integrating APIs to deliver seamless user experiences.
                                My work includes projects ranging from personal portfolios to client-facing applications, focusing on clean code, reusable components,
                                and modern development practices such as React Hooks, Context API, and state management libraries. I’m passionate about turning ideas
                                into interactive digital solutions.
                            </p>
                            <div className="col-12 text-center my-auto">
                                <button type="button" className="btn know-more px-3 py-2 px-md-4 py-md-3">Know More About me</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
