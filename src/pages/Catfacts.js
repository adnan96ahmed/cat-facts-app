import React, { useEffect, useState } from 'react';
import axios from '../axios-instance';
import './Catfacts.css';

const Catfacts = () => {
    const [catFact, setCatFact] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // get cat fact function
    const getFact = () => {
        setIsLoading(true);
        axios.get('/fact')
            .then(res => {
                // setting success states
                setIsLoading(false);
                setIsError(false);
                setCatFact(res.data.fact);
            })
            .catch(err => {
                // setting error states
                setIsLoading(false);
                setIsError(true);
                console.log(err);
            });
    }

    useEffect(() => {
        // getting initial cat fact on load
        getFact();
    }, [])

    return (
        <div className='Catfacts'>
            <h1 className='Header'>The Great Cat Fact App</h1>
            <button className='NewFactButton' onClick={getFact} disabled={isLoading}>Get New Cat Fact</button>
            {isLoading ?
                <text>New cat fact incoming...</text> :
                isError ?
                    <text>Error loading cat fact! Please try again!</text> :
                    <text>{catFact}</text>
            }
        </div>
    );
}

export default Catfacts;