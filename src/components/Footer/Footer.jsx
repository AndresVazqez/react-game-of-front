import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {

  return (

    <footer className='footer'>
        <nav className='footer__nav'>
            <Link className='footer__nav--a' to ='/'>Home</Link>
            <Link className='footer__nav--a' to='/characters'>Characters</Link>    
            <Link className='footer__nav--a' to='/houses'>Houses</Link>
            <Link className='footer__nav--a' to='/chronology'>Chronology</Link>         
        </nav>

    </footer>
  )
};

export default Footer;
