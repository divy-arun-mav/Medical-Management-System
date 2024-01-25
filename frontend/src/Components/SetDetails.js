import React, { useState } from 'react';
import { useWeb3 } from '../store/auth';

const SetDetails = () => {
    const { setDetails } = useWeb3();

    const [ic, setIc] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [houseaddr, setHouseAddr] = useState('');
    const [bloodgroup, setBloodGroup] = useState('');
    const [allergies, setAllergies] = useState('');
    const [medication, setMedication] = useState('');

    const handleSetDetails = async () => {
        try {
            await setDetails(ic, name, phone, gender, dob, height, weight, houseaddr, bloodgroup, allergies, medication);
            // Optionally, you can add logic to handle success, like displaying a success message.
            window.alert('Patient details set successfully!');
        } catch (error) {
            console.error('Error setting patient details:', error);
            // Optionally, you can add logic to handle errors, like displaying an error message.
        }
    };

    return (
        <>
        <div className='continer1'>
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

            <label>Height:</label>
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />

            <label>Weight:</label>
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />

            <label>House Address:</label>
            <input type="text" value={houseaddr} onChange={(e) => setHouseAddr(e.target.value)} />

            <label>Blood Group:</label>
            <input type="text" value={bloodgroup} onChange={(e) => setBloodGroup(e.target.value)} />

            <label>Allergies:</label>
            <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} />

            <label>Medication:</label>
            <input type="text" value={medication} onChange={(e) => setMedication(e.target.value)} />

            <button onClick={handleSetDetails}>Set Patient Details</button>
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

export default SetDetails;
