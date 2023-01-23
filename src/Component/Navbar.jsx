import React from 'react';



const Navbar = () => {

    return (
        <>
            <div className="container top-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Prince</a> */}
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
                                    <a className="nav-link nav-color" href="#">Projects</a>
                                </li>
                                <li className="nav-item nav-item-list">
                                    <a className="nav-link nav-color" href="#contact">Contact</a>

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
