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

                                    <NavLink className="nav-link nav-color" to="/"><a class="nav-link nav-color my-active" aria-current="page">Home</a></NavLink>
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
            </div>
        </>
    )
}

export default Navbar
