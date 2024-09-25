import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/login" element={<Login />} /> {/* Home route */}
      </Routes>
    </Router>
  );
}

export default App;
