import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes, FaInstagram} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false)

    const clickHandler = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


    return (
        <nav className="navbar">
            <div className={`navbar-container container ${click ? "active" : ""}`}>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}  >
                    Mobola Andé
                </Link>
                <div className="menu-icon" onClick={clickHandler} >              
                    {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars"/>}
                </div>
    
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/illustrations/" className="nav-links" onClick={closeMobileMenu} >
                            Illustrations
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about/" className="nav-links" onClick={closeMobileMenu} >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="//www.instagram.com/ande.illus_/" target="_blank" rel="noreferrer" className="nav-links" onClick={closeMobileMenu} >
                            <FaInstagram/>
                        </Link>
                    </li>
                </ul>


            </div>
        </nav>

    )
}

export default Navbar