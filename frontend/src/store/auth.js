import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Lock from '../contracts/Lock.json'; // Replace with your contract ABI

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
        account: null,
        doctorsList: [],
        patientsList: [],
    });

    const [account, setAccount] = useState("Not Connected");

    useEffect(() => {
        const connectWallet = async () => {
            const contractAddress = '0x6046912476b658beDA7822433B95b54999da9E50'; // Replace with your contract address
            const contractABI = Lock.abi
            try {
                const { ethereum } = window;
                if (ethereum) {
                    
                    const account = await ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    window.ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });
                    window.ethereum.on("accountsChanged", () => {
                        window.location.reload();
                    });
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(
                        contractAddress,
                        contractABI,
                        signer
                    );
                    setAccount(account[0]);
    
                    const caccount = (await provider.listAccounts())[0];
    
                    // Fetch the list of doctors' addresses after defining the contract
                    const doctorsList = contract ? await contract.getDoctors() : [];
                    const patientsList = contract ? await contract.getPatients() : [];
    
                    setState({ provider, signer, contract, caccount, doctorsList , patientsList });
                } else {
                    window.alert("Please install and log in to Metamask wallet to initiate the transaction.")
                }
                
            } catch (error) {
                console.error('Error connecting wallet:', error);
            }
        };

        connectWallet();
    }, []);

    const setDoctor = async (_ic, _name, _phone, _gender, _dob, _qualification, _major) => {
        try {
            const { contract, account } = state;
            const tx = await contract.setDoctor(_ic, _name, _phone, _gender, _dob, _qualification, _major);
            await tx.wait();
        } catch (error) {
            console.error('Error setting doctor details:', error);
        }
    };

    const setDetails = async (_ic, _name, _phone, _gender, _dob, _height, _weight, _houseaddr, _bloodgroup, _allergies, _medication) => {
        try {
            const { contract, account } = state;
            const tx = await contract.setDetails(_ic, _name, _phone, _gender, _dob, _height, _weight, _houseaddr, _bloodgroup, _allergies, _medication);
            await tx.wait();
        } catch (error) {
            console.error('Error setting patient details:', error);
        }
    };

    const setAppointment = async (patientAddress, date, time, diagnosis, prescription, description, status) => {
        try {
            const { contract, account } = state;
            const tx = await contract.setAppointment(patientAddress, date, time, diagnosis, prescription, description, status);
            await tx.wait();
        } catch (error) {
            console.error('Error setting appointment:', error);
        }
    };

    const getDoctors = async () => {
        const { contract } = state;
        const doctorsList = contract ? await contract.getDoctors() : [];
        setState((prevState) => ({ ...prevState, doctorsList }));
    };

    const getPatients = async () => {
        const { contract } = state;
        const patientsList = contract ? await contract.getDoctors() : [];
        setState((prevState) => ({ ...prevState, patientsList }));
    };

    return (
        <Web3Context.Provider value={{ ...state, setDoctor, setAppointment, setDetails, getDoctors, getPatients }}>
            {children}
        </Web3Context.Provider>
    );
};

export const useWeb3 = () => {
    const web3ContextValue = useContext(Web3Context);
    if (!web3ContextValue) {
        throw new Error('useWeb3 used outside of the Provider');
    }
    return web3ContextValue;
};
