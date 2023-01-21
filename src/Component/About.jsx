import React from 'react'
import profile from "./../Assets/Images/profile_img.jpg"

const About = () => {
    return (
        <>
            <section className='about-back'>
                <div className='container py-5 mt-5' id="about">
                    <div className="row  mx-lg-5">
                        <div className="col-12 col-md-6 px-xl-5">

                            <img src={profile} className="img-fluid my-profile" alt="" />

                        </div>
                        <div className="col-12 col-md-6 pt-md-5 px-md-1 px-lg-5">
                            <p id="aboutmepara" className='d-inline p-2'>About Me</p>
                            <h3 className='mt-4'><b>React Js Web Developer</b></h3>
                            <p className="aboutDetail mt-4" >I'm ReactJs Developer and I'm very passionate and dedicated to my work. With 0.1 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>

                            <button type="button" class="btn btn-dark py-3 px-4 mt-md-4">Download Resume</button>
                        </div>
                    </div>

                    <div className="row mx-md-1 mx-lg-5 px-md-5 mt-4">
                        {/* <p className="aboutDetail" style={{ textIndent: "3rem" }}> I am a Msc(CA & IT) Graduate Student at K.S.School of Bussiness Management from University. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like, HTML5, CSS, JavaScriipt, during my bachelor's. I have 6 months of professional work experience which helped me strengthen my experience in Web Design and React Js. I am passionate about developing complex applications that solve real-world problems impacting millions of users.</p> */}
                        <ul class="nav nav-pills mb-3 justify-content-between rounded-pill px-2 py-2 col-12 col-lg-10 col-xl-9 mx-auto" id="pills-tab" role="tablist">
                            <li class="nav-item col" role="presentation">
                                <button class="nav-link active w-100 tabNav rounded-pill" id="pills-skills-tab" data-bs-toggle="pill" data-bs-target="#pills-skills" type="button" role="tab" aria-controls="pills-skills" aria-selected="true">Skills</button>
                            </li>
                            <li class="nav-item col" role="presentation">
                                <button class="nav-link w-100 tabNav rounded-pill" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false">Education</button>
                            </li>
                            <li class="nav-item col" role="presentation">
                                <button class="nav-link w-100 tabNav rounded-pill" id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false">Experience</button>
                            </li>
                        </ul>
                        <div class="tab-content mt-4" id="pills-tabContent">

                            <div class="tab-pane tab-bg fade show active" id="pills-skills" role="tabpanel" aria-labelledby="pills-skills-tab">

                                <div className="container">
                                    <div class="row row-cols-1 row-cols-md-3 gx-5 gy-4 px-lg-4 pb-4">
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 text-white border-bott-card">

                                                <div class="card-body">
                                                    <h5 class="card-title text-center">Markup/Styling Language</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div>
                                                            <i class="fa-brands fa-html5" style={{ fontSize: "60px", color: "#ED653B" }}></i>
                                                            <h5 className='text-center'>HTML</h5>
                                                        </div>

                                                        <div>
                                                            <i class="fa-brands fa-css3-alt" style={{ fontSize: "60px", color: "#5DADE2" }}></i>
                                                            <h5 className='text-center'>CSS</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 text-white border-bott-card">

                                                <div class="card-body">
                                                    <h5 class="card-title text-center">CSS Framework</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i class="fa-brands fa-bootstrap" style={{ fontSize: "60px", color: "#AF7AC5" }}></i>
                                                            <h5 className='text-center'>Bootstrap</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 text-white border-bott-card">

                                                <div class="card-body">
                                                    <h5 class="card-title text-center">Front-End Language</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i class="fa-brands fa-square-js" style={{ fontSize: "60px", color: "#FFFF00" }}></i>
                                                            <h5 className='text-center'>Java Script</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 text-white border-bott-card">
                                                <div class="card-body pb-0">
                                                    <h5 class="card-title text-center">JavaScript Framework</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i class="fa-brands fa-react" style={{ fontSize: "60px", color: "#61DAFB" }}></i>
                                                            <h5>React Js</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 text-white border-bott-card">
                                                <div class="card-body  pb-0">
                                                    <h5 class="card-title text-center">Version Control</h5>
                                                    <div className="d-flex justify-content-around mt-3">
                                                        <div className='text-center'>
                                                            <i class="fa-brands fa-git-alt" style={{ fontSize: "60px", color: "#F14E32" }}></i>
                                                            <h5 className='text-center'>Git</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                                <div>

                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-experience" role="tabpanel" aria-labelledby="pills-experience-tab">Experience</div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
