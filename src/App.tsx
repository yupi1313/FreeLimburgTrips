import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComoTrip from './pages/ComoTrip';
import ComoRealTrip from './pages/ComoRealTrip';
import Feb23Home from './pages/feb23/Feb23Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como" element={<ComoTrip />} />
        <Route path="/comoreal" element={<ComoRealTrip />} />
        <Route path="/23" element={<Feb23Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
