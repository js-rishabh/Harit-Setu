import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import SignInPage from './SignInPage'; // Use the wrapper
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
