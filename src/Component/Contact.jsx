import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='contact_bg py-5'>
                <div className="container">
                    <div className="row pt-5">
                        <h1 className='text-center theme-color'>Contact</h1>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12 col-md-5 col-xl-4 ms-auto py-5">

                            <div className='d-flex align-items-center mb-4'>
                                <i class="fa-regular fa-envelope contact-mail"></i>
                                <h3 className='text-white ms-5'>Get in touch</h3>
                            </div>
                            <form action="">
                                <input type="text" name="" id="" placeholder='Name' className='form-control' />
                                <input type="email" name="" id="" placeholder='Email' className='form-control mt-3' />
                                <textarea className="form-control mt-3" placeholder="Message" rows="5"></textarea>
                                <button type="button" class="btn btn-success mt-3 px-4 form-submit">Submit</button>

                            </form>
                        </div>
                        <div className="col-12 col-md-5 col-xl-4 me-auto py-5">
                            <div className="d-flex flex-column pt-md-5">
                                <div className="d-flex flex-row align-item-center">
                                    <i class="fa-solid fa-phone contact-icon"></i>
                                    <a href="tel:909932326" className='ms-3 contact-detail phone'>+91 9099323266</a>
                                </div>
                                <div className="d-flex flex-row mt-3">
                                    <i class="fa-regular fa-envelope contact-icon"></i>
                                    <a href="mailto: talaviyap200@gmail.com" className='ms-3 contact-detail phone'>talaviyap200@gmail.com</a>
                                </div>
                                <div className="d-flex flex-row mt-3">
                                    <i class="fa-brands fa-github contact-icon"></i>
                                    <a href="https://github.com/PrinceTcompose" className='ms-3 contact-detail phone'>github.com/PrinceTcompose</a>
                                </div>
                                <div className="d-flex flex-row mt-3">
                                    {/* <i class="fa-brands fa-linkedin-in contact-icon"></i> */}
                                    <i class="fa-brands fa-linkedin contact-icon"></i>
                                    <a href="https://www.linkedin.com/" className='ms-3 contact-detail phone'>linkedin.com/in/princetalaiya</a>
                                </div>
                                <div className="d-flex flex-row mt-3">
                                    <i class="fa-solid fa-location-dot contact-icon"></i>
                                    <a href="https://www.google.co.in/maps/place/TechCompose+Solutions+Pvt.+Ltd./@23.0307876,72.545812,17z/data=!3m1!4b1!4m5!3m4!1s0x395e84edf52c7b9f:0x15cb4da8393658ae!8m2!3d23.0307876!4d72.5480007?hl=en" className='ms-3 contact-detail phone'>TechCompose Solutions,Ahmedabad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
