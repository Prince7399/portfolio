import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <>
            <div className="container-fluid top-nav">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav text-white ms-auto">
                                <li class="nav-item nav-item-list">

                                    <NavLink className="nav-link nav-color" to="/prince-portfolio"><a class="nav-link nav-color my-active" aria-current="page">Home</a></NavLink>
                                </li>
                                <li class="nav-item nav-item-list">

                                    <NavLink className="nav-link nav-color" to="/about"><a class="nav-link nav-color my-active">About</a></NavLink>
                                </li>
                                <li class="nav-item nav-item-list">

                                    <NavLink className="nav-link nav-color" to="/project"><a class="nav-link nav-color my-active">Projects</a></NavLink>
                                </li>
                                <li class="nav-item nav-item-list">

                                    <NavLink className="nav-link nav-color" to="/contact"><a class="nav-link nav-color my-active">Contact</a></NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item nav-item-list">
                                    <a className="nav-link nav-color active" aria-current="page" href="#top-main">Home</a>

                                </li>
                                <li className="nav-item nav-item-list">
                                    <a className="nav-link nav-color" href="#about">About</a>

                                </li>
                                <li className="nav-item nav-item-list">
                                    <a className="nav-link nav-color" href="#project">Projects</a>
                                </li>
                                <li className="nav-item nav-item-list">
                                    <a className="nav-link nav-color" href="#contact">Contact</a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

            </div>
        </>
    )
}

export default Navbar
