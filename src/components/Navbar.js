import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './Navbar.css';

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const closeMobileMenu = () => {
        setShowNavbar(!showNavbar)
    };

    return (
        <nav className='navbar_main'>
            <div className="navbar-container">

                <Link to="/" className='navbar-logo'>
                    <img src={logo} alt="logo guidano posracionalismo" /> <span className='title-page'> <small>el</small> Posracionalista </span>
                </Link>

                <div className="menu-icon">
                    <i onClick={handleNavbar} className={showNavbar ?'fas fa-bars' : 'fas fa-times'} ></i>
                </div>
                <ul className={showNavbar ? 'nav-menu' : 'nav-menu active'}>
                    <li onClick={closeMobileMenu} className="nav-item">
                        <Link className='nav-links' to="/"  >Inicio </Link>
                    </li>
                    <li onClick={closeMobileMenu} className="nav-item">
                        <Link className='nav-links' to="/info" >Información</Link>
                    </li >
                    <li onClick={closeMobileMenu} className="nav-item"><Link className='nav-links' to="/foro" >Foro</Link></li>
                    <li onClick={closeMobileMenu} className="nav-item"><Link className='nav-links' to="/login" >Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar