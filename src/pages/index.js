import React, { useState } from 'react';
import HomePage from '../components/HomePage';
import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <NavigationBar isOpen={isOpen }toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HomePage />
        </>
    );
};

export default Home;