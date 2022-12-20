import { useState } from 'react';
import  './Navbar.css'
const navbar = () => {

  return (
    <nav>
      <div className="topnav">
        <div className='logo'><a href="#react">REACT JS</a></div>
        <div>
          <a className="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        
        
      </div>
    </nav>
  );
};

export default navbar;
