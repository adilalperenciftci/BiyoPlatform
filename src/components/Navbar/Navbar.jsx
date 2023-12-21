import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Navbar için özel CSS

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    BiyoPlatform
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Ana Sayfa
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/makaleler" className="nav-links">
                            Makaleler
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/egitim" className="nav-links">
                            Eğitim
                        </Link>
                    </li>
                    {/* Daha fazla navigasyon öğesi eklenebilir */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
