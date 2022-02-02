import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {

  return (

    <footer>
        <nav>
            <Link to ='/'>Home</Link>
            <Link to='/characters'>Characters</Link>    
            <Link to='/houses'>Houses</Link>
            <Link to='/chronology'>Chronology</Link>         
        </nav>

    </footer>
  )
};

export default Footer;
