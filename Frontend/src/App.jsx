import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/" element={<Login />} /> {/* Home route */}
        <Route path="/home" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* Home route */}
        <Route path="/contact" element={<Contact />} /> {/* Home route */}
      </Routes>
    </Router>
  );
}

export default App;
