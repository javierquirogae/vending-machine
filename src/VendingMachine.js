import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBr from './NavBar.js';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

const VendingMachine = () => {
  return (
    <Router>
        <div>
        <h1>Vending Machine</h1>
        <NavBr />
        
        <Routes>
          <Route path="/snack1" element={<Snack1 />} />
          <Route path="/snack2" element={<Snack2 />} />
          <Route path="/snack3" element={<Snack3 />} />
        </Routes>
        </div>       
    </Router>
  );
};

export default VendingMachine;
