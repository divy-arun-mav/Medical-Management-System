import React, { useEffect } from 'react';
import { useWeb3 } from '../store/auth'; // Replace with the correct path

const Doctors = () => {
    const { doctorsList, getDoctors } = useWeb3();

    useEffect(() => {
        // Fetch the list of doctors' addresses when the component mounts
        getDoctors();
    }, [doctorsList]);

    return (
        <div>
            <h2>Doctors List</h2>
            {doctorsList.length > 0 ? (
                <ul>
                    {doctorsList.map((doctorAddress, index) => (
                        <li key={index}>{doctorAddress}</li>
                    ))}
                </ul>
            ) : (
                <p>No doctors found.</p>
            )}
        </div>
    );
};

export default Doctors;
