import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import { FaAngleDown } from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';

import HeroImage from '../../assets/HomePageImages/HeroImage.png';
import TeamPhoto from '../../assets/HomePageImages/HomeTeamPhoto.png';

import LeadershipIcon from '../../assets/HomePageImages/LeadershipIcon.png';
import SustainabilityIcon from '../../assets/HomePageImages/SustainabilityIcon.png';
import EducationIcon from '../../assets/HomePageImages/EducationIcon.png';
import InnovationIcon from '../../assets/HomePageImages/InnovationIcon.png';

import Footer from '../Footer';

//Sponsors//
import DanielFamilyFoundation from '../../assets/Sponsors/DanielFamilyFoundation.png';

import PSIM from '../../assets/Sponsors/PSIM.png';
import Siemens from '../../assets/Sponsors/Siemens.png';

import Altium from '../../assets/Sponsors/Altium.png';
import Airtech from '../../assets/Sponsors/Airtech.png';

import UBCPhysicsandAstronomy from '../../assets/Sponsors/UBCPhysicsandAstronomy.png';
import JLCPCB from '../../assets/Sponsors/JLCPCB.png';
import UBCMechanicalEngineering from '../../assets/Sponsors/UBCMechanicalEngineering.png';
import Fluor from '../../assets/Sponsors/Fluor.png';
import Omron from '../../assets/Sponsors/Omron.png';
import MetalPros from '../../assets/Sponsors/MetalPros.png';
import AffinityManufacturing from '../../assets/Sponsors/AffinityManufacturing.png';
import WestMountainRadio from '../../assets/Sponsors/WestMountainRadio.png';

import CompositesResearchNetwork from '../../assets/Sponsors/CompositesResearchNetwork.png';
import UBCElectricalandComputerEngineering from '../../assets/Sponsors/UBCElectricalandComputerEngineering.png';
import Vicor from '../../assets/Sponsors/Vicor.png';
import VR3 from '../../assets/Sponsors/VR3.png';
import TCI from '../../assets/Sponsors/TCI.png';

import Filler from '../../assets/Sponsors/Filler.png';


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
    HomeMeetContainer,
    MeetImageContainer,
    MeetDescriptionContainer,

    HomeValuesContainer,
    ValuesContainer,
    LeadershipContainer,
    SustainabilityContainer,
    EducationContainer,
    InnovationContainer,
    Icon,

    HomeSponsorsContainer,
    DiamondContainer,
    DiamondSponsors,
    GoldContainer,
    GoldSponsorContainer,
    GoldSponsors,
    SilverContainer,
    SilverSponsorContainer,
    SilverSponsors,
    BronzeContainer,
    BronzeSponsorContainer,
    BronzeSponsors,
    SupporterContainer,
    SupporterSponsorContainer,
    SupporterSponsors,
} from './HomePageStyle';

const HomePage = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    const toggle = () => {
        setIsOpen( !isOpen );
    };

    //Parallax
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
  
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    function onChange (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }

    return (
        <>
        <NavigationBar isOpen={ isOpen }toggle={ toggle } />
        <Sidebar isOpen={ isOpen } toggle={ toggle } />

            <HomeContainer>
                <HomeHeroContainer style={{ transform: `translateY(${offsetY * 0.39}px)`}}>
                    <HeroPhoto
                        src={ HeroImage }>
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
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '0', marginBottom: 'auto' }}>Meet the Team</h1>
                    <HomeMeetContainer>
                    <MeetImageContainer src={ TeamPhoto } />
                    <MeetDescriptionContainer>
                        <p style={{ color: 'white', fontSize: '1vw'}}>UBC Solar is an engineering design team that consists 
                        of dedicated students ranging from programs such as engineering, business, and sciences. 
                        We are passionate about pushing the limits of sustainable innovation through the 
                        development of electric solar-powered racecars.
                        <br></br>
                        <br></br>
                        UBC Solar provides an opportunity for undergraduate students to transcend the classroom 
                        and learn in an interdisciplinary team environment. As a team, we strive to promote clean 
                        energy and sustainable automotive solutions while encouraging continuous learning in a 
                        fast-paced environment to produce the next generation of industry leaders.</p>
                    </MeetDescriptionContainer>
                </HomeMeetContainer>

                <HomeValuesContainer>
                    <ValuesContainer>
                        <LeadershipContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: 'white' }}>Leadership</h1>
                            
  

                            <p style={{ textAlign: 'center', color: 'white' }}>
                                Our team focuses on raising leadership through...
                            </p>

                        </LeadershipContainer>
                        <SustainabilityContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: 'white' }}>Sustainability</h1>
                            <Icon
                                src={ SustainabilityIcon }>
                            </Icon>
                            <p style={{ textAlign: 'center', color: 'white' }}>
                                Our team focuses on raising leadership through...
                            </p>
                        </SustainabilityContainer>
                        <EducationContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: 'white' }}>Education</h1>
                            <Icon
                                src={ EducationIcon }>
                            </Icon>
                            <p style={{ textAlign: 'center', color: 'white' }}>
                                Our team focuses on raising leadership through...
                            </p>
                        </EducationContainer>
                        <InnovationContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: 'white' }}>Innovation</h1>
                            <Icon
                                src={ InnovationIcon }>
                            </Icon>
                            <p style={{ textAlign: 'center', color: 'white' }}>
                                Our team focuses on raising leadership through...
                            </p>
                        </InnovationContainer>
                    </ValuesContainer>
                </HomeValuesContainer>
                
                <HomeSponsorsContainer>
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '0px' }}>Sponsors</h1>
                    <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '0', marginBottom: '50px' }}>UBC Solar would like to thank all of our sponsors for helping the team achieve our goals and enabling us to participate in competitions.</p>
                    <DiamondContainer>
                        <p style={{ color: '#70D1F4', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Diamond</p>
                        <DiamondSponsors
                            src={ DanielFamilyFoundation } />
                    </DiamondContainer>
                    <GoldContainer>
                        <p style={{ color: '#FFD700', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Gold</p>
                        <GoldSponsorContainer>
                            <GoldSponsors
                                src={ Filler } />
                            <GoldSponsors
                                src={ PSIM } />
                            <GoldSponsors
                                src={ Siemens } />
                        </GoldSponsorContainer>
                    </GoldContainer>
                    <SilverContainer>
                        <p style={{ color: '#A9A9A9', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Silver</p>
                        <SilverSponsorContainer>
                            <SilverSponsors
                                src={ Filler } />
                            <SilverSponsors
                                src={ Altium } />
                            <SilverSponsors
                                src={ Airtech } />    
                        </SilverSponsorContainer>
                    </SilverContainer>
                    <BronzeContainer>
                        <p style={{ color: '#CD7F32', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Bronze</p>
                        <BronzeSponsorContainer>
                            <BronzeSponsors
                                src={ UBCPhysicsandAstronomy } />
                            <BronzeSponsors
                                src={ JLCPCB } />
                            <BronzeSponsors
                                src={ UBCMechanicalEngineering } />
                            <BronzeSponsors
                                src={ Fluor } />
                            <BronzeSponsors
                                src={ Omron } />
                            <BronzeSponsors
                                src={ MetalPros } />
                            <BronzeSponsors
                                src={ AffinityManufacturing } />    
                            <BronzeSponsors
                                src={ WestMountainRadio } />    
                        </BronzeSponsorContainer>
                    </BronzeContainer>
                    <SupporterContainer>
                        <p style={{ color: '#000000', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Supporter</p>
                        <SupporterSponsorContainer>
                            <SupporterSponsors
                                src={ CompositesResearchNetwork } />
                            <SupporterSponsors
                                src={ UBCElectricalandComputerEngineering } />
                            <SupporterSponsors
                                src={ Vicor } />
                            <SupporterSponsors
                                src={ VR3 } />
                            <SupporterSponsors
                                src={ TCI } />
                        </SupporterSponsorContainer>
                    </SupporterContainer>
                </HomeSponsorsContainer>
            </HomeContainer>
            
            <Footer/>
        </>
    );
};

export default HomePage