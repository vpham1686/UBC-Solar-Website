import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import { FaAngleDown } from 'react-icons/fa';

import HeroImage from '../../assets/HomePageImages/HeroImage.png';
import TeamPhoto from '../../assets/HomePageImages/HomeTeamPhoto.png';

import Footer from '../Footer';

//Sponsors//
import DanielFamilyFoundation from '../../assets/Sponsors/DanielFamilyFoundation.svg';

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
    HomeNewsfeedContainer,
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
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '0', paddingTop: '10px', marginBottom: 'auto' }}>Meet the Team</h1>
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
                                src={ DanielFamilyFoundation } />
                            <GoldSponsors
                                src={ DanielFamilyFoundation } />
                            <GoldSponsors
                                src={ DanielFamilyFoundation } />
                            <GoldSponsors
                                src={ DanielFamilyFoundation } />
                            <GoldSponsors
                                src={ DanielFamilyFoundation } />
                            <GoldSponsors
                                src={ DanielFamilyFoundation } />
                            <GoldSponsors
                                src={ DanielFamilyFoundation } />    
                        </GoldSponsorContainer>
                    </GoldContainer>
                    <SilverContainer>
                        <p style={{ color: '#A9A9A9', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Silver</p>
                        <SilverSponsorContainer>
                            <SilverSponsors
                                src={ DanielFamilyFoundation } />
                            <SilverSponsors
                                src={ DanielFamilyFoundation } />
                            <SilverSponsors
                                src={ DanielFamilyFoundation } />
                            <SilverSponsors
                                src={ DanielFamilyFoundation } />
                            <SilverSponsors
                                src={ DanielFamilyFoundation } />
                            <SilverSponsors
                                src={ DanielFamilyFoundation } />
                            <SilverSponsors
                                src={ DanielFamilyFoundation } />    
                        </SilverSponsorContainer>
                    </SilverContainer>
                    <BronzeContainer>
                        <p style={{ color: '#CD7F32', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Bronze</p>
                        <BronzeSponsorContainer>
                            <BronzeSponsors
                                src={ DanielFamilyFoundation } />
                            <BronzeSponsors
                                src={ DanielFamilyFoundation } />
                            <BronzeSponsors
                                src={ DanielFamilyFoundation } />
                            <BronzeSponsors
                                src={ DanielFamilyFoundation } />
                            <BronzeSponsors
                                src={ DanielFamilyFoundation } />
                            <BronzeSponsors
                                src={ DanielFamilyFoundation } />
                            <BronzeSponsors
                                src={ DanielFamilyFoundation } />    
                        </BronzeSponsorContainer>
                    </BronzeContainer>
                    <SupporterContainer>
                        <p style={{ color: '#000000', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Supporter</p>
                        <SupporterSponsorContainer>
                            <SupporterSponsors
                                src={ DanielFamilyFoundation } />
                            <SupporterSponsors
                                src={ DanielFamilyFoundation } />
                            <SupporterSponsors
                                src={ DanielFamilyFoundation } />
                            <SupporterSponsors
                                src={ DanielFamilyFoundation } />
                            <SupporterSponsors
                                src={ DanielFamilyFoundation } />
                            <SupporterSponsors
                                src={ DanielFamilyFoundation } />
                            <SupporterSponsors
                                src={ DanielFamilyFoundation } />    
                        </SupporterSponsorContainer>
                    </SupporterContainer>
                </HomeSponsorsContainer>
            </HomeContainer>
            
            <Footer/>
        </>
    );
};

export default HomePage