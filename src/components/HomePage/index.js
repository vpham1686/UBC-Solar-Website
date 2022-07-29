import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import { FaAngleDown } from 'react-icons/fa';

import HeroImage from '../../assets/HomePageImages/HeroImage.svg';
import TeamPhoto from '../../assets/HomePageImages/HomeTeamPhoto.svg';

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

    HomeMeetContainer,
    MeetImageContainer,
    MeetDescriptionContainer,

    HomeNewsfeedContainer,

    HomeSponsorsContainer,
    DiamondContainer,
    GoldContainer,
    SilverContainer,
    BronzeContainer,
    FriendContainer,

} from './HomePageStyle';

const HomePage = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    const toggle = () => {
        setIsOpen( !isOpen );
    };

    return (
        <>
        <NavigationBar isOpen={ isOpen }toggle={ toggle } />
        <Sidebar isOpen={ isOpen } toggle={ toggle } />

        <div>

            <HomeContainer>

                <HomeHeroContainer>
                    <HeroPhoto
                        src={ HeroImage }>
                    </HeroPhoto>

                    <ArrowLevitate>
                    <FaAngleDown size="80px" cursor="pointer"
                        onClick={({ target })=>window.scrollTo( 0, 1900 )}/>
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


                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', margin: '0'}}>Meet the Team</h1>
                    <HomeMeetContainer>
                    <MeetImageContainer src={ TeamPhoto } />
                        
                    <MeetDescriptionContainer>
                        <p style={{ color: 'white' }}>UBC Solar is an engineering design team that consists 
                        dedicated students ranging from programs such as engineering, business, and sciences. 
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

                
                <HomeNewsfeedContainer>
                    


                </HomeNewsfeedContainer>


                <HomeSponsorsContainer>

                    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '0px' }}>Sponsors</h1>
                    <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '0', marginBottom: '50px' }}>UBC Solar would like to thank all of our sponsors for helping the team achieve our goals and enabling us to participate in competitions.</p>

                    <DiamondContainer>
                        <p style={{ color: '#70D1F4', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginTop: '-42px', background: 'white', padding: '0px', marginLeft: 'auto', marginRight: 'auto', padding: '16px' }}>Diamond</p>
                    </DiamondContainer>
                    
                    <GoldContainer>

                    </GoldContainer>

                    <SilverContainer>

                    </SilverContainer>
                    
                    <BronzeContainer>
                    
                    </BronzeContainer>

                    <FriendContainer>

                    </FriendContainer>
                </HomeSponsorsContainer>

            </HomeContainer>
            
        </div>

        </>
    );
};

export default HomePage