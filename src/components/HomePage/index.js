import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';

import {
    HomeContainer,
    HomeHeroContainer,
    HomeMottoContainer,

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
            <HomeHeroContainer>
                Home.
            </HomeHeroContainer>
        </div>

        </>
    );
};

export default HomePage