import React from 'react';
import logo from '../../../Logo.png'

const Header = () => {
    return (
        <div>
            <nav className="container navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <a className="navbar-brand" href="#"><img style={{ width: '120px' }} src={logo} alt="" /></a>

                        <form className="d-flex w-25 ms-5 position-relative">
                            <i style={{ fontSize: '20px' }} className="fas fa-search position-absolute ms-4 mt-2"></i>
                            <input className="form-control me-2 text-center" type="search" placeholder=" Search your Destination..." aria-label="Search" />

                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">News</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link active" aria-current="page" href="#">Destination</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item ms-5">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                            <li className="nav-item ms-5 ">
                                <button className="nav-link active bg-warning rounded ps-4 pe-4" aria-current="page" href="#">Login</button>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;