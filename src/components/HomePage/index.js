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


                    <h1 style={{ font: '30px', fontWeight: 'bold', textAlign: 'center' }}>Meet the Team</h1>
                    <HomeMeetContainer>
                    <MeetImageContainer src={ TeamPhoto } />
                        
                    <MeetDescriptionContainer>
                        <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </MeetDescriptionContainer>
                </HomeMeetContainer>

            </HomeContainer>
            
        </div>

        </>
    );
};

export default HomePage