import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Portfolio.hu_full_logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu from '../../assets/menu.png';
import menu_close from '../../assets/menu_close.png';

const Navbar = () => {
  const [state, setState] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    if (menuOpen) {
      menuRef.current.style.right = '-350px';
    } else {
      menuRef.current.style.right = '0';
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className='port-logo'/>
      <img
        src={menuOpen ? menu_close : menu}
        alt="Menu Toggle"
        className="nav-open"
        onClick={toggleMenu}
      />

      <ul className="nav-menu" ref={menuRef}>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setState('home')}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setState('about')}>About Us</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setState('skills')}>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setState('education')}>Education</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setState('contact')}>Contact Us</p>
          </AnchorLink>
        </li>
      </ul>
      
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
