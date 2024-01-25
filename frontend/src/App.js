import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Doctors from './Components/Doctor';
import Dashboard from './Components/Dashboard';
import SetAppointment from './Components/SetAppointment';
import { Route, Routes } from 'react-router-dom';
import SetDetails from './Components/SetDetails';
import DoctorRegister from './Components/DoctorRegister';
import Patients from './Components/Patient';
import { useWeb3 } from './store/auth';


function App() {

  const { state } = useWeb3();
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/doctor-register' element={<Doctors />} />
        <Route exact path='/doctors' element={<DoctorRegister />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/new-appointment' element={<SetAppointment />} />
        <Route exact path='/patient-details' element={<SetDetails />} />
        <Route exact path='/patients' element={<Patients />} />
      </Routes>
    </>
  );
}

export default App;
