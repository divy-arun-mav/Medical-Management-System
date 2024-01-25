import React, { useEffect } from 'react';
import { useWeb3 } from '../store/auth'; // Replace with the correct path

const Patients = () => {
    const { patientsList, getPatients } = useWeb3();

    useEffect(() => {
        // Fetch the list of doctors' addresses when the component mounts
        getPatients();
    }, [patientsList]);

    return (
        <div>
            <h2>Patients List</h2>
            {patientsList.length > 0 ? (
                <ul>
                    {patientsList.map((patientAddress, index) => (
                        <li key={index}>{patientAddress}</li>
                    ))}
                </ul>
            ) : (
                <p>No patients found.</p>
            )}
        </div>
    );
};

export default Patients;
