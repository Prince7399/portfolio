import React from 'react'
import restaurent from "./../Assets/Images/restaurent_project.png"
import portfolio from "./../Assets/Images/portfolio_project.png"
import { project_data } from "./../Assets/API/Project_api";

const Project = () => {
    return (
        <>
            <section className='project py-5 overflow-hidden' id='project'>

                <div className="container">
                    <div className="row text-center py-5 theme-color">
                        <h1>Project Work</h1>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2">
                        {/* <div class="col-12 col-md-5 mx-auto">
                            <div class="card h-100 tab-bg" data-aos="zoom-out-right" data-aos-duration="1500">
                                <div className='p-4'>
                                    <img src={restaurent} class="card-img-top proj-img" alt="..." />
                                </div>

                                <div class="card-body">
                                    <h2 class="card-title text-center theme-color">Restaurent Website</h2>
                                    <h3 class="card-title text-center theme-color">React Based Restaurent Website</h3>
                                    <h3 class="card-title mt-3 text-white">Key Features</h3>
                                    <ul className='text-white'>
                                        <li>Incorporated all the key features of an e-commerce website in a dynamic manner.</li>
                                        <li>Handled all composition, color, illustration, typography, and branding.</li>
                                        <li>Followed best code practices while developing dynamic and reusable code.</li>
                                    </ul>
                                    <b className='theme-color'><u>Technology Used</u></b>
                                    <div className="d-flex justify-content-around mt-2">
                                        <i class="fa-brands fa-html5 tech-proj-icon"></i>
                                        <i class="fa-brands fa-css3-alt tech-proj-icon"></i>
                                        <i class="fa-brands fa-square-js tech-proj-icon"></i>
                                        <i class="fa-brands fa-bootstrap tech-proj-icon"></i>
                                        <i class="fa-brands fa-react tech-proj-icon"></i>
                                        <i class="fa-brands fa-git-alt tech-proj-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-5 mx-auto">
                            <div class="card h-100 tab-bg" data-aos="zoom-out-left" data-aos-duration="1500">
                                <div className='p-4'>
                                    <img src={portfolio} class="card-img-top proj-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h2 class="card-title text-center theme-color">Portfolio Website</h2>
                                    <h3 class="card-title text-center theme-color">React Based Portfolio Website</h3>
                                    <h3 class="card-title mt-3 text-white">Key Features</h3>
                                    <ul className='text-white'>
                                        <li>Incorporated all the key features of an e-commerce website in a dynamic manner.</li>
                                        <li>Created all the components from scratch using react and java script.</li>
                                        <li>Followed best code practices while developing dynamic and reusable code.</li>
                                    </ul>
                                    <b className='theme-color'><u>Technology Used</u></b>
                                    <div className="d-flex justify-content-around mt-2">
                                        <i class="fa-brands fa-html5 tech-proj-icon"></i>
                                        <i class="fa-brands fa-css3-alt tech-proj-icon"></i>
                                        <i class="fa-brands fa-square-js tech-proj-icon"></i>
                                        <i class="fa-brands fa-bootstrap tech-proj-icon"></i>
                                        <i class="fa-brands fa-react tech-proj-icon"></i>
                                        <i class="fa-brands fa-git-alt tech-proj-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {
                            project_data.map((data, ind) => {
                                return (
                                    <>
                                        <div class="col-12 col-md-5 mx-auto">
                                            <div class="card h-100 tab-bg" data-aos="zoom-out-right" data-aos-duration="1500">
                                                <div className='p-4'>
                                                    <img src={data.image} class="card-img-top proj-img" alt="..." />
                                                </div>

                                                <div class="card-body">
                                                    <h2 class="card-title text-center theme-color">{data.title}</h2>
                                                    <h3 class="card-title text-center theme-color">React Based Restaurent Website</h3>
                                                    <h3 class="card-title mt-3 text-white">Key Features</h3>
                                                    <ul className='text-white'>
                                                        {
                                                            data.key.map((liVal, ind) => {
                                                                return (
                                                                    <>
                                                                        <li>{liVal}</li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <b className='theme-color'><u>Technology Used</u></b>
                                                    <div className="d-flex justify-content-around mt-2">
                                                        {
                                                            data.technology.map((icon, ind) => {
                                                                return (
                                                                    <>
                                                                        <i className={`fa-brands ${icon}`}></i>
                                                                    </>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                        {/* <div class="col-12 col-md-5 mx-auto">
                            <div class="card h-100 tab-bg" data-aos="zoom-out-right" data-aos-duration="1500">
                                <div className='p-4'>
                                    <img src={restaurent} class="card-img-top proj-img" alt="..." />
                                </div>

                                <div class="card-body">
                                    <h2 class="card-title text-center theme-color">Restaurent Website</h2>
                                    <h3 class="card-title text-center theme-color">React Based Restaurent Website</h3>
                                    <h3 class="card-title mt-3 text-white">Key Features</h3>
                                    <ul className='text-white'>
                                        <li>Incorporated all the key features of an e-commerce website in a dynamic manner.</li>
                                        <li>Handled all composition, color, illustration, typography, and branding.</li>
                                        <li>Followed best code practices while developing dynamic and reusable code.</li>
                                    </ul>
                                    <b className='theme-color'><u>Technology Used</u></b>
                                    <div className="d-flex justify-content-around mt-2">
                                        <i class="fa-brands fa-html5 tech-proj-icon"></i>
                                        <i class="fa-brands fa-css3-alt tech-proj-icon"></i>
                                        <i class="fa-brands fa-square-js tech-proj-icon"></i>
                                        <i class="fa-brands fa-bootstrap tech-proj-icon"></i>
                                        <i class="fa-brands fa-react tech-proj-icon"></i>
                                        <i class="fa-brands fa-git-alt tech-proj-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div> */}



                    </div>
                </div>
            </section>

        </>
    )
}

export default Project
