import React from 'react'
import profile from "./../Assets/Images/profile_img.jpg"
import html from "./../Assets/Images/html.png"
import css from "./../Assets/Images/css.png"
import js from "./../Assets/Images/javaScript.png"
import bootstrap from "./../Assets/Images/bootstrap.png"
import react from "./../Assets/Images/react.png"
import node from "./../Assets/Images/node.png"
import mongo from "./../Assets/Images/mongo.png"
import npm from "./../Assets/Images/npm.png"
import git from "./../Assets/Images/git.png"

const About = () => {
    return (
        <>
            <section className='about-back'>
                <div className='container py-5' id="about">
                    <div className="row mx-lg-5">
                        <div className="col-12 col-md-6 px-xl-5">

                            <img src={profile} className="img-fluid my-profile" alt="" />

                        </div>
                        <div className="col-12 col-md-6 pt-3 pt-md-5 px-md-1 px-lg-5">
                            <p id="aboutmepara" className='d-inline p-2'>About Me</p>
                            <h3 className='mt-4 text-white' data-aos="fade-down-left" data-aos-duration="1000"><b>React Js Web Developer</b></h3>
                            <p className="aboutDetail mt-4" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">I'm ReactJs Developer and I'm very passionate and dedicated to my work. With 0.1 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>

                            <button type="button" className="btn btn-dark py-3 px-4 mt-md-4">Download Resume</button>
                        </div>
                    </div>

                    <div className="row mx-md-1 mx-lg-5 px-md-5 mt-4">
                        {/* <p className="aboutDetail" style={{ textIndent: "3rem" }}> I am a Msc(CA & IT) Graduate Student at K.S.School of Bussiness Management from University. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like, HTML5, CSS, JavaScriipt, during my bachelor's. I have 6 months of professional work experience which helped me strengthen my experience in Web Design and React Js. I am passionate about developing complex applications that solve real-world problems impacting millions of users.</p> */}
                        <ul className="nav nav-pills mb-3 justify-content-between rounded-pill px-2 py-2 col-12 col-lg-10 col-xl-9 mx-auto" id="pills-tab" role="tablist">
                            <li className="nav-item col" role="presentation">
                                <button className="nav-link active w-100 tabNav rounded-pill" id="pills-skills-tab" data-bs-toggle="pill" data-bs-target="#pills-skills" type="button" role="tab" aria-controls="pills-skills" aria-selected="true">Skills</button>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <button className="nav-link w-100 tabNav rounded-pill" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Education</button>
                            </li>
                            <li className="nav-item col" role="presentation">
                                <button className="nav-link w-100 tabNav rounded-pill" id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false">Experience</button>
                            </li>
                        </ul>
                        <div className="tab-content mt-4" id="pills-tabContent">

                            <div className="tab-pane tab-bg fade show active" id="pills-skills" role="tabpanel" aria-labelledby="pills-skills-tab">

                                <div className="container">
                                    <div className="row row-cols-1 row-cols-md-3 gx-5 gy-4 px-lg-4 pb-4">
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0 text-white border-bott-card" data-aos="flip-down" data-aos-duration="700">

                                                <div className="card-body">
                                                    <h5 className="card-title text-center skill-head">Markup/Styling Language</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div>
                                                            <i className="fa-brands fa-html5" style={{ fontSize: "60px", color: "#ED653B" }}></i>
                                                            <h5 className='text-center'>HTML</h5>
                                                        </div>

                                                        <div>
                                                            <i className="fa-brands fa-css3-alt" style={{ fontSize: "60px", color: "#5DADE2" }}></i>
                                                            <h5 className='text-center'>CSS</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0 text-white border-bott-card" data-aos="flip-down" data-aos-duration="700" data-aos-delay="100">

                                                <div className="card-body">
                                                    <h5 className="card-title text-center skill-head">CSS Framework</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i className="fa-brands fa-bootstrap" style={{ fontSize: "60px", color: "#AF7AC5" }}></i>
                                                            <h5 className='text-center'>Bootstrap</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0 text-white border-bott-card" data-aos="flip-down" data-aos-duration="700" data-aos-delay="200">

                                                <div className="card-body">
                                                    <h5 className="card-title text-center skill-head">Front-End Language</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i className="fa-brands fa-square-js" style={{ fontSize: "60px", color: "#FFFF00" }}></i>
                                                            <h5 className='text-center'>Java Script</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0 text-white border-bott-card" data-aos="flip-down" data-aos-duration="700" data-aos-delay="300">
                                                <div className="card-body pb-0">
                                                    <h5 className="card-title text-center skill-head">JavaScript Framework</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i className="fa-brands fa-react" style={{ fontSize: "60px", color: "#61DAFB" }}></i>
                                                            <h5>React Js</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 bg-transparent border-0 text-white border-bott-card" data-aos="flip-down" data-aos-duration="700" data-aos-delay="400">
                                                <div className="card-body  pb-0">
                                                    <h5 className="card-title text-center skill-head">Version Control</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i className="fa-brands fa-git-alt" style={{ fontSize: "60px", color: "#F14E32" }}></i>
                                                            <h5 className='text-center'>Git</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                                <div className='container px-0 px-lg-4'>
                                    <div className="row row-cols-1 row-cols-md-2 g-4">
                                        <div className="col">
                                            <div className="card h-100 tab-bg text-white">
                                                <div className="card-body ps-4 ps-lg-5 pt-4">
                                                    <i className="fa-solid fa-book edu-logo"></i>
                                                    <p className='mb-1 edu-p'>2015-16</p>
                                                    <h3 className="card-title mb-1 text-white">SSC</h3>
                                                    <p className="card-text mb-1 text-white">Percentage - 81%</p>
                                                    <p className="edu-p">P.P.Savani Vidhyalaya</p>

                                                    <i className="fa-solid fa-building-columns edu-logo"></i>
                                                    <p className='mb-1 edu-p'>2016-18</p>
                                                    <h3 className="card-title mb-1 text-white">HSC</h3>
                                                    <p className="card-text mb-1 text-white">Percentage - 88%</p>
                                                    <p className="edu-p">Mauni Ankur Vidhya Vihar</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card h-100 tab-bg">

                                                <div className="card-body ps-4 ps-lg-5 pt-4">
                                                    <i className="fa-solid fa-user-graduate edu-logo"></i>
                                                    <p className='mb-1 edu-p'>2018-21</p>
                                                    <h3 className="card-title mb-1 text-white">Under Graduation (Bsc.(CA & IT))</h3>
                                                    <p className="card-text mb-1 text-white">GPA - 4.04 / 5</p>
                                                    <p className="edu-p">K.S.School of Bussiness Management</p>

                                                    <i className="fa-solid fa-user-graduate edu-logo"></i>
                                                    <p className='mb-1 edu-p'>2021-23</p>
                                                    <h3 className="card-title mb-1 text-white">Post Graduation (Msc.(CA & IT))</h3>
                                                    <p className="card-text mb-1 text-white">GPA - 3.96 / 5</p>
                                                    <p className="edu-p">K.S.School of Bussiness Management</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-experience" role="tabpanel" aria-labelledby="pills-experience-tab">
                                <div className='container px-0 px-lg-4'>
                                    <div className="row row-cols-1">
                                        <div className="col-12 col-xl-10 mx-auto">
                                            <div className="card h-100 tab-bg text-white">
                                                <div className="card-body pt-4 text-center">
                                                    <i className="fa-solid fa-laptop-code edu-logo"></i>
                                                    <p className='mb-1 edu-p mt-2'>May 2022 - November 2022 (06 month)</p>
                                                    <h3 className="card-title mb-1 text-white">UI Developer</h3>

                                                    <p className='mb-1 edu-p mt-5'>Jan 2023 - Current</p>
                                                    <h3 className="card-title mb-1 text-white">React Js Intern</h3>

                                                    <ul className='text-start exper-ul mt-3'>
                                                        <li>Extensive knowledge and expertise in web design and development using latest technologies.</li>
                                                        <li>Learned how to leverage open source platforms to handle problems and errors in code in an efficient and timely manner.
                                                        </li>
                                                        <li>Gained hands-on experience working in a real-world IT setting alongside seasoned and experienced developers and professionals.</li>
                                                        <li>All of the mentors provided incredibly great feedback and reviews.</li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container pb-4">
                    <div className="row">
                        <div className="col-11 mx-auto tab-bg">
                            <marquee behavior="alternate" direction="" scrollamount="15" className="p-3">
                                <img src={html} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={css} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={js} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={bootstrap} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={react} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={node} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={mongo} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={npm} alt="" className='marq-img mx-3 mx-md-5' />
                                <img src={git} alt="" className='marq-img mx-3 mx-md-5' />
                            </marquee>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
