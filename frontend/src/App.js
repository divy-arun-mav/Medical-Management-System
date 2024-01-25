import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Doctor from './Components/Doctor';
import Dashboard from './Components/Dashboard';
import SetAppointment from './Components/SetAppointment';
import { Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/doctor' element={<Doctor />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/new-appointment' element={<SetAppointment />} />
      </Routes>
    </>
  );
}

export default App;
