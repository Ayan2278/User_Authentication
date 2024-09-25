import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/login" element={<Login />} /> {/* Home route */}
      </Routes>
    </Router>
  );
}

export default App;
