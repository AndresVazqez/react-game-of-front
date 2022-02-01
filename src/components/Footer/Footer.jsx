import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {

  return (

    <footer className='footer'>
        <nav className='footer__nav'>
            <Link to ='/'>Home</Link>
            <Link to='/characters'>Characters</Link>    
            <Link to='/houses'>Houses</Link>
            <Link to='/chronology'>Chronology</Link>         
        </nav>

    </footer>
  )
};

export default Footer;
