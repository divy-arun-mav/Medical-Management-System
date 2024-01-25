import React, { useState } from 'react';
import { useWeb3 } from '../store/auth';

const AppointmentForm = () => {
    const { setAppointment } = useWeb3();

    const [patientAddress, setPatientAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [prescription, setPrescription] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSetAppointment = async () => {
        try {
            await setAppointment(patientAddress, date, time, diagnosis, prescription, description, status);
            // Optionally, you can add logic to handle success, like displaying a success message.
            window.alert('Appointment set successfully!');
        } catch (error) {
            console.error('Error setting appointment:', error);
            // Optionally, you can add logic to handle errors, like displaying an error message.
        }
    };

    return (
        <>
        <div className='container1'>
            <label>Patient Address:</label>
            <input type="text" value={patientAddress} onChange={(e) => setPatientAddress(e.target.value)} />

            <label>Date:</label>
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />

            <label>Time:</label>
            <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />

            <label>Diagnosis:</label>
            <input type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />

            <label>Prescription:</label>
            <input type="text" value={prescription} onChange={(e) => setPrescription(e.target.value)} />

            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

            <label>Status:</label>
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />

            <button onClick={handleSetAppointment}>Set Appointment</button>
            </div>
            <style>
                {`
                    .container1{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                    }
                `}
            </style>
        </>
    );
};

export default AppointmentForm;
