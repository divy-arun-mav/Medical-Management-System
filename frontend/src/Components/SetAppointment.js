import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Lock from './contracts/Lock.json';
import { useAuth } from './store/auth';
import Navbar from './Components/Navbar';

const contractAddress = "0x0d246A1803161Ea962E7fDDFE6AfbE1AC4316244";

const SetAppointment = () => {

    const { state } = useAuth();
    const { contract } = state;

    const [name, setName] = useState("");
    const [ic, setIC] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDOB] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [address, setAddress] = useState("");
    const [blood, setBlood] = useState("");
    const [disease, setDisease] = useState("");
    const [allergy, setAllergy] = useState("");
    const [medication, setMedication] = useState("");

    const requestAccount = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    };

    const fetchData = async () => {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(contractAddress, Lock.abi, provider);
            try {
                // Assuming setDetails is a function you have in your contract
                const data = await contract.setDetails();
                console.log("data: ", data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
    };

    const setData = async () => {
        // You need to pass a value to setName here; currently, it's not doing anything
        setName("exampleName");
    };

    // Use useEffect for fetching data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);



  return (
      <>
          <input value={ic} className="_ic" placeholder="IC code" type="text" />
          <input value={name} className="patient-name" placeholder="name" type="text" />
          <input value={phone} className="patient-phone-number" placeholder="phone number" type="text" />
          <input value={dob} className="patient-dob" placeholder="dob eg: 02/02/2000" type="text" />
          <input value={height} className="patient-height" placeholder="height in cms" type="text" />
          <input value={weight} className="patient-weight" placeholder="weight in kg" type="text" />
          <input value={address} className="patient-address" placeholder="address" type="text" />
          <input value={blood} className="patient-bloodgrp" placeholder="blood group" type="text" />
          <input value={disease} className="patient-disease" placeholder="allergy / disease" type="text" />
          <label>*if any</label>
          <input value={allergy} className="patient-allergy" placeholder="allergies" type="text" />
          <label>*if taken any</label>
          <input value={medication} className="patient-medication" placeholder="medication done" type="text" />
          <button type="submit">Submit</button>
    </>
  )
}

export default SetAppointment