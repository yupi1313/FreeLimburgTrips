import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
