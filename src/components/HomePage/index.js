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
    const [ HomeValuesContainerActive, setHomeValuesContainerActive ] = useState(true);
    function onHomeValuesContainerChange(isVisible) {
        if (isVisible) {
            setHomeValuesContainerActive(false);
        }
    };

    const [ DiamondSponsorActive, setDiamondSponsorActive ] = useState(true);
    function onDiamondSponsorChange(isVisible) {
        if (isVisible) {
            setDiamondSponsorActive(false); }
    };

    const [ GoldSponsorActive, setGoldSponsorActive ] = useState(true);
    function onGoldSponsorChange(isVisible) {
        if (isVisible) {
            setGoldSponsorActive(false);
        }
    };

    const [ SilverSponsorActive, setSilverSponsorActive ] = useState(true);
    function onSilverSponsorChange(isVisible) {
        if (isVisible) {
            setSilverSponsorActive(false);
        }
    };

    const [ BronzeSponsorActive, setBronzeSponsorActive ] = useState(true);
    function onBronzeSponsorChange(isVisible) {
        if (isVisible) {
            setBronzeSponsorActive(false);
        }
    };

    const [ SupporterSponsorActive, setSupporterSponsorActive ] = useState(true);
    function onSupporterSponsorChange(isVisible) {
        if (isVisible) {
            setSupporterSponsorActive(false);
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
                <h1 style={{ fontSize: '4vw', fontWeight: 'bold', textAlign: 'center', margin: '10vh 0px 0px 0px', marginBottom: 'auto', color: '#000000' }}>Meet the Team</h1>
                <HomeMeetContainer>
                    <MeetImageContainer src={TeamPhoto} />
                    <MeetDescriptionContainer>
                        <p style={{ fontSize: '1vh', color: '#000000', fontSize: '15px' }}>UBC Solar is an engineering design team that consists
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

                <VisibilitySensor onChange={onHomeValuesContainerChange} partialVisibility={true} active={HomeValuesContainerActive} offset={{ bottom: 100 }}>
                {({isVisible}) =>
                <HomeValuesContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                    <ValuesContainer>
                        <InnovationContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: '#000000' }}>Innovation</h1>
                            <Icon
                                src={InnovationIcon}>
                            </Icon>
                            <p style={{textAlign: 'center', color: '#000000', paddingLeft: '10px', paddingRight: '10px', paddingTop: '2vw'  }}>
                            UBC Solar pushes the limits of technological innovation by designing and manufacturing solar electric race cars that are fully self-sufficient on solar energy.
                            </p>
                        </InnovationContainer>
                        <SustainabilityContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: '#000000' }}>Sustainability</h1>
                            <Icon
                                src={SustainabilityIcon}>
                            </Icon>
                            <p style={{ textAlign: 'center', color: '#000000',  paddingLeft: '10px', paddingRight: '10px', paddingTop: '2vw'  }}>
                            We are a sustainable design team that raises awareness around clean automobile energy and design life cycle sustainability.
                            </p>
                        </SustainabilityContainer>
                        <EducationContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: '#000000' }}>Education</h1>
                            <Icon
                                src={EducationIcon}>
                            </Icon>
                            <p style={{ textAlign: 'center', color: '#000000',  paddingLeft: '10px', paddingRight: '10px', paddingTop: '2vw'  }}>
                            The team encourages continuous learning and creates the opportunities for our members to advance their future career and pursue their passions. 
                            </p>
                        </EducationContainer>
                        <LeadershipContainer>
                            <h1 style={{ textAlign: 'center', marginBottom: 'auto', color: '#000000' }}>Leadership</h1>
                            <Icon
                                src={LeadershipIcon}>
                            </Icon>
                            <p style={{ textAlign: 'center', color: '#000000',  paddingLeft: '10px', paddingRight: '10px', paddingTop: '2vw' }}>
                            Our team raises leadership through providing members with the mentorship and support to further strengthen soft and technical skills that are required to lead a team.
                            </p>
                        </LeadershipContainer>
                    </ValuesContainer>
                </HomeValuesContainer>
                }
                </VisibilitySensor>

                <HomeSponsorsContainer>
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '0px' }}>Sponsors</h1>
                    <p style={{ fontSize: '2vh', textAlign: 'center', marginTop: '0', marginBottom: '50px' }}>UBC Solar would like to thank all of our sponsors for helping the team achieve our goals and enabling us to participate in competitions.</p>
                    <DiamondContainer>
                        <p style={{ color: '#70D1F4', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Diamond</p>
                        <VisibilitySensor onChange={onDiamondSponsorChange} partialVisibility={true} active={DiamondSponsorActive} offset={{ bottom: 100 }}>
                        {({isVisible}) =>
                        <DiamondSponsors 
                            src={DanielFamilyFoundation} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            }
                        </VisibilitySensor>
                    </DiamondContainer>

                    <GoldContainer>
                        <p style={{ color: '#FFD700', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Gold</p>
                        <VisibilitySensor onChange={onGoldSponsorChange} partialVisibility={true} active={GoldSponsorActive} offset={{ bottom: 100 }}>
                        {({isVisible}) =>
                        <GoldSponsorContainer>
                            <GoldSponsors
                                src={PSIM} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <GoldSponsors
                                src={Siemens} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                        </GoldSponsorContainer>
                        }    
                        </VisibilitySensor>
                    </GoldContainer>

                    <SilverContainer>
                        <p style={{ color: '#A9A9A9', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Silver</p>
                        <VisibilitySensor onChange={onSilverSponsorChange} partialVisibility={true} active={SilverSponsorActive} offset={{ bottom: 100 }}>
                        {({isVisible}) =>
                        <SilverSponsorContainer>
                            <SilverSponsors
                                src={Altium} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <SilverSponsors
                                src={Airtech} style={{ opacity: `${isVisible ? '1' : '0'}`}}/>
                        </SilverSponsorContainer>
                        }    
                        </VisibilitySensor>
                    </SilverContainer>
                    <BronzeContainer>
                        <p style={{ color: '#CD7F32', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Bronze</p>
                        <VisibilitySensor onChange={onBronzeSponsorChange} partialVisibility={true} active={BronzeSponsorActive} offset={{ bottom: 100 }}>
                        {({isVisible}) =>
                        <BronzeSponsorContainer>
                            <BronzeSponsors
                                src={UBCPhysicsandAstronomy} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <BronzeSponsors
                                src={JLCPCB} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <BronzeSponsors
                                src={UBCMechanicalEngineering} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <BronzeSponsors
                                src={Fluor} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <BronzeSponsors
                                src={Omron} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <BronzeSponsors
                                src={MetalPros} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <BronzeSponsors
                                src={AffinityManufacturing} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <BronzeSponsors
                                src={WestMountainRadio} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                        </BronzeSponsorContainer>
                        }    
                        </VisibilitySensor>
                    </BronzeContainer>
                    <SupporterContainer>
                        <p style={{ color: '#000000', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Supporter</p>
                        <VisibilitySensor onChange={onSupporterSponsorChange} partialVisibility={true} active={SupporterSponsorActive} offset={{ bottom: 100 }}>
                        {({isVisible}) =>
                        <SupporterSponsorContainer>
                            <SupporterSponsors
                                src={CompositesResearchNetwork} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <SupporterSponsors
                                src={UBCElectricalandComputerEngineering} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <SupporterSponsors
                                src={Vicor} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <SupporterSponsors
                                src={VR3} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                            <SupporterSponsors
                                src={TCI} style={{ opacity: `${isVisible ? '1' : '0'}` }}/>
                        </SupporterSponsorContainer>
                        }    
                        </VisibilitySensor>
                    </SupporterContainer>
                </HomeSponsorsContainer>
            </HomeContainer>

            <Footer />
        </>
    );
};

export default HomePage