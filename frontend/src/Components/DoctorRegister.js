import React, { useState } from 'react';
import { useWeb3 } from '../store/auth';

const DoctorRegister = () => {
  const { setDoctor } = useWeb3();

  const [ic, setIc] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [qualification, setQualification] = useState('');
  const [major, setMajor] = useState('');

  const handleSetDoctor = async () => {
    try {
      await setDoctor(ic, name, phone, gender, dob, qualification, major);
      // Optionally, you can add logic to handle success, like displaying a success message.
      window.alert('Doctor details set successfully!');
    } catch (error) {
      console.error('Error setting doctor details:', error);
      // Optionally, you can add logic to handle errors, like displaying an error message.
    }
  };

  return (
    <div>
      <label>IC:</label>
      <input type="text" value={ic} onChange={(e) => setIc(e.target.value)} />

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Phone:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <label>Gender:</label>
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />

      <label>DOB:</label>
      <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />

      <label>Qualification:</label>
      <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} />

      <label>Major:</label>
      <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />

      <button onClick={handleSetDoctor}>Set Doctor Details</button>
    </div>
  );
};

export default DoctorRegister;
