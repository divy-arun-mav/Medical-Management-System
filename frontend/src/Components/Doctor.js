import React from 'react'
import Navbar from './Navbar';
import { AuthProvider } from '../store/auth';

const DoctorProfile = () => {

    return (
        <>
            <h1>Doctor Details</h1>
            <img className="doctor-img" />
            <h3 className="doctor-name">{ }</h3>
            <h4 className="description">{ }</h4>
        </>
    )
}

const Doctor = () => {
  return (
      <>
          <div className="doctor-profile">
              <DoctorProfile/>
        </div>
    </>
  )
}

export default Doctor;