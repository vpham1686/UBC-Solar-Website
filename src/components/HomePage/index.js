import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import { FaAngleDown } from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';

import HeroImage from '../../assets/HomePageImages/HeroImage.png';

import LeadershipIcon from '../../assets/HomePageImages/LeadershipIcon.png';
import SustainabilityIcon from '../../assets/HomePageImages/SustainabilityIcon.png';
import EducationIcon from '../../assets/HomePageImages/EducationIcon.png';
import InnovationIcon from '../../assets/HomePageImages/InnovationIcon.png';

import Footer from '../Footer';
import {
    HomeContainer,
    HomeHeroContainer,
    HeroPhoto,
    ArrowLevitate,

    HomeMottoContainer,
    MottoYellowContainer,
    MottoYellow,
    MottoBlueContainer,
    MottoBlue,

    Anchor,
    MapContainer,

    HomeValuesContainer,
    ValuesContainer,
    LeadershipContainer,
    SustainabilityContainer,
    EducationContainer,
    InnovationContainer,
    Icon,

} from './HomePageStyle';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    //Parallax
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    //Animate In
    const [HomeValuesContainerActive, setHomeValuesContainerActive] = useState(true);
    function onHomeValuesContainerChange(isVisible) {
        if (isVisible) {
            setHomeValuesContainerActive(false);
        }
    };

    return (
        <>
            <NavigationBar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            
            <HomeContainer>
                <HomeHeroContainer style={{ transform: `translateY(${offsetY * 0.39}px)` }}>
                    <HeroPhoto
                        src={HeroImage}>
                    </HeroPhoto>
                    <ArrowLevitate to='meet'>
                        <FaAngleDown size="80px" cursor="pointer" ></FaAngleDown>
                    </ArrowLevitate>
                </HomeHeroContainer>

                <HomeMottoContainer>
                    <MottoYellowContainer>
                        <MottoYellow>
                            Solar Powered,
                        </MottoYellow>
                    </MottoYellowContainer>
                    <MottoBlueContainer>
                        <MottoBlue>
                            Student Driven.
                        </MottoBlue>
                    </MottoBlueContainer>
                </HomeMottoContainer>

                <Anchor className='meet'></Anchor>
                <h1 style={{ verticalalign: 'middle', fontSize: '4vw', fontWeight: 'bold', textAlign: 'center', margin: '5vh 10vh 5vh 10vh', marginBottom: 'auto', color: '#000000' }}>Our Values</h1>

                <VisibilitySensor onChange={onHomeValuesContainerChange} partialVisibility={true} active={HomeValuesContainerActive} offset={{ bottom: 100 }}>
                    {({ isVisible }) =>
                        <HomeValuesContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                            <ValuesContainer>
                                <InnovationContainer>
                                    <h1 style={{ textAlign: 'center', marginBottom: '5vh', color: '#000000' }}>Innovation</h1>
                                    <Icon
                                        src={InnovationIcon}>
                                    </Icon>
                                    <h4 style={{ textAlign: 'center', color: '#000000', paddingLeft: '3vh', paddingRight: '3vh', paddingTop: '2vh', paddingBottom: '1vw' }}>
                                        Our focus is centered on cutting edge design and manufacturing high performance solar electric race cars.
                                    </h4>
                                </InnovationContainer>
                                <SustainabilityContainer>
                                    <h1 style={{ textAlign: 'center', marginBottom: '5vh', color: '#000000' }}>Sustainability</h1>
                                    <Icon
                                        src={SustainabilityIcon}>
                                    </Icon>
                                    <h4 style={{ textAlign: 'center', color: '#000000', paddingLeft: '3vh', paddingRight: '3vh', paddingTop: '2vh', paddingBottom: '1vw' }}>
                                        We believe in implementing and raising awareness around clean automobile energy and design life cycle sustainability.
                                    </h4>
                                </SustainabilityContainer>
                                <EducationContainer>
                                    <h1 style={{ textAlign: 'center', marginBottom: '5vh', color: '#000000' }}>Education</h1>
                                    <Icon
                                        src={EducationIcon}>
                                    </Icon>
                                    <h4 style={{ textAlign: 'center', color: '#000000', paddingLeft: '3vh', paddingRight: '3vh', paddingTop: '2vh', paddingBottom: '1vw' }}>
                                        Our team fosters an environment for continuous learning and allows members to pursue their career goals and passions.
                                    </h4>
                                </EducationContainer>
                                <LeadershipContainer>
                                    <h1 style={{ textAlign: 'center', marginBottom: '5vh', color: '#000000' }}>Leadership</h1>
                                    <Icon
                                        src={LeadershipIcon}>
                                    </Icon>
                                    <h4 style={{ textAlign: 'center', color: '#000000', paddingLeft: '3vh', paddingRight: '3vh', paddingTop: '2vh', paddingBottom: '1vw' }}>
                                        We strive to cultivate young leaders through mentorship and strengthening soft and technical skills through collaboration.
                                    </h4>
                                </LeadershipContainer>
                            </ValuesContainer>
                        </HomeValuesContainer>
                    }
                </VisibilitySensor>

                
                <MapContainer>
                    <h1 style={{ verticalalign: 'middle', fontSize: '4vw', fontWeight: 'bold', textAlign: 'left', margin: '8vh 10vh 5vh 10vh', marginBottom: 'auto', color: 'white', paddingTop: '5vh' }}>2023 Objectives...</h1>
                    
                    <ol style={{ verticalalign: 'middle', fontSize: '2vw', fontWeight: 'bold', textAlign: 'left', margin: '5vh 1vh 5vh 20vh', color: 'white', paddingBottom: '5vh' }}>
                        <p>☀️ Finish Brightside design - Our newest car!</p>
                        <p>☀️ Launch a successful crowdfunding campaign</p>
                        <p>☀️ Start manufacturing by May 12st</p>
                        <p>☀️ Expand our network or industry and professional connections</p>
                    </ol>
                    
                    
                </MapContainer>



            </HomeContainer>

            <Footer />
        </>
    );
};

export default HomePage