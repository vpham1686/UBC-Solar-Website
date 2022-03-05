import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Test1 from '../../assets/images/TeamPhoto.png';
import Test2 from '../../assets/images/Electrical.JPG';

import BatteryIcon from '../../assets/images/YouTube.png';
import PowerIcon from '../../assets/images/YouTube.png';
import AeroshellIcon from '../../assets/images/YouTube.png';


import {
    ProjectContainer, 
    DaybreakContainer,
    DaybreakTextContainer,
    DaybreakTitleText,
    DaybreakText,
    DaybreakImage,
    DaybreakIconContainer,
    DaybreakBatteryIcon,
    DaybreakBatteryText,
    DaybreakPowerIcon,
    DaybreakPowerText,
    DaybreakAeroshellIcon,
    DaybreakAeroshellText,

    BrightsideContainer,
    BrightsideTextContainer,
    BrightsideTitleText,
    BrightsideText,
    BrightsideImage,
    BrightsideIconContainer,
    BrightsideBatteryIcon,
    BrightsideBatteryText,
    BrightsidePowerIcon,
    BrightsidePowerText,
    BrightsideAeroshellIcon,
    BrightsideAeroshellText,

    RavenContainer,
    RavenTextContainer,
    RavenTitleText,
    RavenText,
    RavenImage,
    RavenIconContainer,
    RavenBatteryIcon,
    RavenBatteryText,
    RavenPowerIcon,
    RavenPowerText,
    RavenAeroshellIcon,
    RavenAeroshellText,
} from './ProjectSectionStyle';
import { FaYoutube } from 'react-icons/fa';

const ProjectSection = () => {
    return (
        <ProjectContainer>
            <DaybreakContainer>
                <DaybreakTextContainer>
                    <DaybreakTitleText>
                        DAYBREAK (2017 - 2022)
                    </DaybreakTitleText>
                    <DaybreakText>
                        This is our car!
                    </DaybreakText>
                </DaybreakTextContainer>

                <DaybreakIconContainer>
                    <DaybreakBatteryIcon>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakBatteryText>
                            420x Panasonic NCR18650b Li-ion cells (5.1kWh)
                        </DaybreakBatteryText>
                    </DaybreakBatteryIcon>
                    <DaybreakPowerIcon>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakPowerText>
                        NGM SC-M150 in-hub BLDC (3.75kW)
                        4m^2 of Sunpower E60 solar cells
                        </DaybreakPowerText>
                    </DaybreakPowerIcon>

                    <DaybreakAeroshellIcon>
                        <img height='50px' width='50px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakAeroshellText>
                        Spaceframe monohull
                        Twill weave carbon fibre, soric core
                        4130 Chromoly steel spaceframe
                        </DaybreakAeroshellText>
                    </DaybreakAeroshellIcon>

                </DaybreakIconContainer>

                <DaybreakImage>
                    <Carousel>

                        <img src={Test1} />
                        <img src={Test2} />
                        <img src={Test1} />
                        <img src={Test2} />

                    </Carousel>
                </DaybreakImage>
            </DaybreakContainer>

        </ProjectContainer>
    );
};

export default ProjectSection
