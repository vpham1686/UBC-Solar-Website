import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';
import HomePage from '../components/HomePage';
import ProjectPage from '../components/ProjectPage';
import CompetitionPage from '../components/CompetitionPage';
import TeamRolePage from '../components/TeamRolePage';
import RecruitmentPage from '../components/JoinUsPage';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            {/* <NavigationBar isOpen={isOpen }toggle={toggle} /> Removed to disable double layering navigation bars. */}
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            <HomePage />   
            {/* <ProjectPage />
            <CompetitionPage />
            <TeamRolePage />
            <RecruitmentPage /> */}
            
        </>
    );
};

export default Home;