import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container">
        <div className="navbar-brand">
            <span className='nav-span h4 text-light bg-info'>R</span>onaldo
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end fs-5" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/about"}>About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/services"}>Services</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/projects"}>Projects</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/myblogs"}>My Blog</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    </div>
</nav>

    </>
  )
}

export default Navbar
