// src/App.jsx
import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Routes>
        <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup onSignup={setIsSignedUp} />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
