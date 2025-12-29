import { useState } from 'react';
import { useEffect } from "react";
import './Header.css';
import logo from '@shared/assets/logo/logo4epuha-white.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);



    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
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
                <Link to="/news" className={`nav-item ${isActive('/news')}`}>News</Link>
                <Link to="/store" className={`nav-item ${isActive('/store')}`}>Store</Link>

                <div className="header-actions">
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>

                    <Link to="/store" className="cart-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="cart-badge">1</span>
                    </Link>
                </div>

                <button className="btn-contact" onClick={() => navigate('/contact')}>Contact us</button>
            </div>
        </header>
    );
};