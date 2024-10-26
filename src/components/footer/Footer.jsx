import React from 'react';
import './Footer.css';
import github_icon from '../../assets/github_icon.png'
import linked_icon from '../../assets/linked_icon.png'
import insta_icon from '../../assets/insta_icon.jpg'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" aria-label="github">
                            <img src={github_icon} alt="github" />
                        </a>
                        <a href="#" aria-label="linkedin">
                            <img src={linked_icon} alt="linkedin" />
                        </a>
                        <a href="#" aria-label="instagram">
                            <img src={insta_icon} alt="instagram" />
                        </a>
                        
                    </div>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
