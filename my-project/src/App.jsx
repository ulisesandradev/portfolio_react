import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <section id="hero"><Hero /></section>
                <section id="about"><About /></section>
                <section id="technologies"><Technologies /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
              </>
            } />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
