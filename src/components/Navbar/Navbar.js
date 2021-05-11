import React from 'react';
import logo from '../../images/logo.png'



const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
                {/* <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        

                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;