import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Gallery from './components/Gallery';
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
        <Gallery />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
