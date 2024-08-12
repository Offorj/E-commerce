import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected imports
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Shop from './Pages/Shop'
const App = () => {
  return (
    <Router> {/* Simplified router setup */}
        <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
