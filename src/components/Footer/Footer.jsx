import React from 'react';
import './footer.css'; // Footer için özel CSS
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <p>Biyoteknoloji Araştırma ve Geliştirme Platformu © {new Date().getFullYear()}</p>
                <p>Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
