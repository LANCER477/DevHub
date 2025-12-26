import { useState } from 'react';
import './Header.css';
import logo from '@shared/assets/logo/logo4epuha-white.png';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                {/* <span className="logo-text">TRAVEL WITH 4EPUHA</span> */}
            </div>

            <div className={`burger-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </div>

            <div className={`header-right ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <Link to="/" className={`nav-item ${isActive('/')}`}>Home</Link>
                <Link to="/about" className={`nav-item ${isActive('/about')}`}>About us</Link>
                <Link to="/services" className={`nav-item ${isActive('/services')}`}>Services</Link>
                <div className="nav-item">News</div>
                <div className="nav-item">Store</div>

                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>

                <button className="btn-contact">Contact us</button>
            </div>
        </header>
    );
};