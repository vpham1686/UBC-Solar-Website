import React, { useState } from 'react';
import HomePage from '../components/HomePage';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <HomePage />   
        </>
    );
};

export default Home;