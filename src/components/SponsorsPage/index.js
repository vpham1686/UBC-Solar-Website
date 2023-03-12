import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import VisibilitySensor from 'react-visibility-sensor';

import HeroImage from '../../assets/SponsorsPageImages/SponsorsImage.png';

import Footer from '../Footer';

//Sponsors//
import DanielFamilyFoundation from '../../assets/Sponsors/DanielFamilyFoundation.png';

import PSIM from '../../assets/Sponsors/PSIM.png';
import Siemens from '../../assets/Sponsors/Siemens.png';

import Altium from '../../assets/Sponsors/Altium.png';
import Airtech from '../../assets/Sponsors/Airtech.png';
import Ansys from '../../assets/Sponsors/ANSYS.png'; //Don't forget to capitalize if it is capitalized in the assets section.
import Affinity from "../../assets/Sponsors/Affinity.png"

import UBCPhysicsandAstronomy from '../../assets/Sponsors/UBCPhysicsandAstronomy.png';
import JLCPCB from '../../assets/Sponsors/JLCPCB.png';
import UBCMechanicalEngineering from '../../assets/Sponsors/UBCMechanicalEngineering.png';
import Fluor from '../../assets/Sponsors/Fluor.png';
import Omron from '../../assets/Sponsors/Omron.png';
import MetalPros from '../../assets/Sponsors/MetalPros.png';
import WestMountainRadio from '../../assets/Sponsors/WestMountainRadio.png';

import CompositesResearchNetwork from '../../assets/Sponsors/CompositesResearchNetwork.png';
import UBCElectricalandComputerEngineering from '../../assets/Sponsors/UBCElectricalandComputerEngineering.png';
import Vicor from '../../assets/Sponsors/Vicor.png';
import VR3 from '../../assets/Sponsors/VR3.png';
import TCI from '../../assets/Sponsors/TCI.png';
import StRegis from '../../assets/Sponsors/StRegis.png';


import {
    HomeContainer,
    HomeHeroContainer,
    HeroPhoto,
    NavBtn,
    NavBtnLink1,
    NavBtnLink,

    HomeSponsorsContainer,
    DiamondContainer,
    DiamondSponsors,
    PlatinumContainer,
    PlatinumSponsors,
    PlatinumSponsorContainer,
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
} from './SponsorsPageStyle';

const SponsorsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    //animate
    const [DiamondSponsorActive, setDiamondSponsorActive] = useState(true);
    function onDiamondSponsorChange(isVisible) {
        if (isVisible) {
            setDiamondSponsorActive(false);
        }
    };

    const [PlatinumSponsorActive, setPlatinumSponsorActive] = useState(true);
    function onPlatinumSponsorChange(isVisible) {
        if (isVisible) {
            setPlatinumSponsorActive(false);
        }
    };

    const [GoldSponsorActive, setGoldSponsorActive] = useState(true);
    function onGoldSponsorChange(isVisible) {
        if (isVisible) {
            setGoldSponsorActive(false);
        }
    };

    const [SilverSponsorActive, setSilverSponsorActive] = useState(true);
    function onSilverSponsorChange(isVisible) {
        if (isVisible) {
            setSilverSponsorActive(false);
        }
    };

    const [BronzeSponsorActive, setBronzeSponsorActive] = useState(true);
    function onBronzeSponsorChange(isVisible) {
        if (isVisible) {
            setBronzeSponsorActive(false);
        }
    };

    const [SupporterSponsorActive, setSupporterSponsorActive] = useState(true);
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
                <HomeHeroContainer>
                    <HeroPhoto
                        src={HeroImage}>
                    </HeroPhoto>
                    <NavBtn>
                        <a href='https://donate.give.ubc.ca/page/80953/donate/1?transaction.dirgift=UBC+Solar%20G1921' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <NavBtnLink>Join the Race!</NavBtnLink>
                        </a>
                        <a href='https://drive.google.com/file/d/1Kzla66Yd8Xiri90RZao0MjDM4nOS8T2K/view?usp=sharing' target="_blank" style={{ textDecoration: 'none', marginLeft: '5vh' }}>
                            <NavBtnLink1>Sponsorship Package</NavBtnLink1>
                        </a>
                    </NavBtn>
                </HomeHeroContainer>
                <HomeSponsorsContainer>
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '35px', paddingTop: '50px' }}>Our Sponsors</h1>
                    <p style={{ fontSize: '2.3vh', textAlign: 'center', marginTop: '0', marginBottom: '50px', paddingBottom: '50px' }}>UBC Solar offers our utmost gratitude to all of our sponsors for allowing us to make our goals a reality and empowering us to race in competitions.</p>
                    <DiamondContainer>
                        <p style={{ color: '#70D1F4', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Diamond</p>
                        <VisibilitySensor onChange={onDiamondSponsorChange} partialVisibility={true} active={DiamondSponsorActive} offset={{ bottom: 100 }}>
                            {({ isVisible }) =>
                                <DiamondSponsors
                                    src={DanielFamilyFoundation} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                            }
                        </VisibilitySensor>
                    </DiamondContainer>

                    <PlatinumContainer>
                        <p style={{ color: '#CDD5E0', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Platinum</p>
                        <VisibilitySensor onChange={onPlatinumSponsorChange} partialVisibility={true} active={PlatinumSponsorActive} offset={{ bottom: 100 }}>
                            {({ isVisible }) =>
                                <PlatinumSponsorContainer>
                                    <PlatinumSponsors
                                        src={Ansys} style={{ opacity: `${isVisible ? '1' : '0'}` }} height="300px" />
                                    <PlatinumSponsors
                                        src={Affinity} style={{ opacity: `${isVisible ? '1' : '0'}` }} height="300px" />
                                </PlatinumSponsorContainer>
                            }
                        </VisibilitySensor>
                    </PlatinumContainer>

                    <GoldContainer>
                        <p style={{ color: '#FFD700', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Gold</p>
                        <VisibilitySensor onChange={onGoldSponsorChange} partialVisibility={true} active={GoldSponsorActive} offset={{ bottom: 100 }}>
                            {({ isVisible }) =>
                                <GoldSponsorContainer>
                                    <GoldSponsors
                                        src={PSIM} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <GoldSponsors
                                        src={Siemens} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                </GoldSponsorContainer>
                            }
                        </VisibilitySensor>
                    </GoldContainer>

                    <SilverContainer>
                        <p style={{ color: '#A9A9A9', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Silver</p>
                        <VisibilitySensor onChange={onSilverSponsorChange} partialVisibility={true} active={SilverSponsorActive} offset={{ bottom: 100 }}>
                            {({ isVisible }) =>
                                <SilverSponsorContainer>
                                    <SilverSponsors
                                        src={Altium} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <SilverSponsors
                                        src={Airtech} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                </SilverSponsorContainer>
                            }
                        </VisibilitySensor>
                    </SilverContainer>
                    <BronzeContainer>
                        <p style={{ color: '#CD7F32', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Bronze</p>
                        <VisibilitySensor onChange={onBronzeSponsorChange} partialVisibility={true} active={BronzeSponsorActive} offset={{ bottom: 100 }}>
                            {({ isVisible }) =>
                                <BronzeSponsorContainer>
                                    <BronzeSponsors
                                        src={UBCPhysicsandAstronomy} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <BronzeSponsors
                                        src={JLCPCB} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <BronzeSponsors
                                        src={UBCMechanicalEngineering} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <BronzeSponsors
                                        src={Fluor} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <BronzeSponsors
                                        src={Omron} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <BronzeSponsors
                                        src={MetalPros} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <BronzeSponsors
                                        src={WestMountainRadio} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <BronzeSponsors
                                        src={StRegis} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                </BronzeSponsorContainer>
                            }
                        </VisibilitySensor>
                    </BronzeContainer>
                    <SupporterContainer>
                        <p style={{ color: '#000000', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Supporter</p>
                        <VisibilitySensor onChange={onSupporterSponsorChange} partialVisibility={true} active={SupporterSponsorActive} offset={{ bottom: 100 }}>
                            {({ isVisible }) =>
                                <SupporterSponsorContainer>
                                    <SupporterSponsors
                                        src={CompositesResearchNetwork} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <SupporterSponsors
                                        src={UBCElectricalandComputerEngineering} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <SupporterSponsors
                                        src={Vicor} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <SupporterSponsors
                                        src={VR3} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
                                    <SupporterSponsors
                                        src={TCI} style={{ opacity: `${isVisible ? '1' : '0'}` }} />
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

export default SponsorsPage