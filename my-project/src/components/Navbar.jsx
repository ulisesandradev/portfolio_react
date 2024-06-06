import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative mb-10 flex items-center justify-between py-6">
      <a href="./#" className="flex flex-shrink-0 items-center">
        <text x="10" y="50" fill="#06BC9B" font-family="Arial" font-size="40" font-weight="bold" font-style="italic">U/A</text>
      </a>
      <button
        className="text-white block md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? '✕' : '☰'} 
      </button>
      <div className="hidden md:flex m-8 items-center justify-center gap-4 text-xl">
        <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} style={{color:"white"}}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} style={{color:"white"}}>About</a>
        <a href="#technologies" onClick={(e) => handleScroll(e, 'technologies')} style={{color:"white"}}>Technologies</a>
        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} style={{color:"white"}}>Experience</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} style={{color:"white"}}>Projects</a>
        <Link to="/contact" style={{color:"white"}}>Contact</Link>
      </div>
      
      <div className={`fixed top-0 left-0 h-full w-64 bg-purple-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
          <a href="#technologies" onClick={(e) => handleScroll(e, 'technologies')}>Technologies</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
