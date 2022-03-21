import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AboutSubteamSection from '../components/AboutSubteamSection';
import ProjectRevealSection from '../components/ProjectRevealSection';
import ProjectSection from '../components/ProjectSection';
import CompetitionsSection from '../components/CompetitionsSection';
import SponsorSection from '../components/SponsorSection';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <Navbar isOpen={isOpen }toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <AboutSubteamSection />
            {/* <ProjectRevealSection /> */}
            <ProjectSection />
            <CompetitionsSection />
            <SponsorSection />
            <FooterSection />
        </>
    );
};

export default Home;