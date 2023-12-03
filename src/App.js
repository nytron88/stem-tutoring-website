import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Appointments from './routes/Appointments';
import ChemistryResources from './routes/Resources/ChemistryResources';
import PhysicsResources from './routes/Resources/PhysicsResources';
import MathResources from './routes/Resources/MathResources';
import BiologyResources from './routes/Resources/BiologyResources';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointments' element={<Appointments />}></Route>
        <Route path='/chemistry-resources' element={<ChemistryResources />}></Route>
        <Route path='/physics-resources' element={<PhysicsResources />}></Route>
        <Route path='/math-resources' element={<MathResources />}></Route>
        <Route path='/biology-resources' element={<BiologyResources />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
