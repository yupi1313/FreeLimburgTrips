import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComoTrip from './pages/ComoTrip';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como" element={<ComoTrip />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
