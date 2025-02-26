// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-red-500 p-4 text-white shadow-md">
          <h1 className="text-2xl font-bold">My Simple Website</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li>
                <button onClick={toggleLogin} className="hover:underline">
                  {isLoggedIn ? 'Logout' : 'Login'}
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer className="bg-gray-200 text-center p-4">
          <p>&copy; 2023 My Simple Website</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;