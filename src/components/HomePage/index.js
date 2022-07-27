import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';

import HeroImage from '../../assets/HomePageImages/HeroImage.svg';

import {
    HomeContainer,
    
    HomeHeroContainer,
    HeroPhoto,

    HomeMottoContainer,
    MottoYellowContainer,
    MottoYellow,
    MottoBlueContainer,
    MottoBlue,

} from './HomePageStyle';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <NavigationBar isOpen={isOpen }toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <div>

            <HomeContainer>

                <HomeHeroContainer>
                    <HeroPhoto
                        src={HeroImage}>
                    </HeroPhoto>
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

            </HomeContainer>
            
        </div>

        </>
    );
};

export default HomePage