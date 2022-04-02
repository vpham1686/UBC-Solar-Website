import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Carousel Imports//
import Daybreak1 from '../../assets/carousel/Daybreak1.jpg';
import Daybreak2 from '../../assets/carousel/Daybreak2.jpg';
import Daybreak3 from '../../assets/carousel/Daybreak3.jpg';
import Daybreak4 from '../../assets/carousel/Daybreak4.jpg';
import Daybreak5 from '../../assets/carousel/Daybreak5.jpg';

import Raven1 from '../../assets/carousel/Raven1.jpg';
import Raven2 from '../../assets/carousel/Raven2.jpg';
import Raven3 from '../../assets/carousel/Raven3.jpg';
import Raven4 from '../../assets/carousel/Raven4.jpg';
import Raven5 from '../../assets/carousel/Raven5.jpg';
import RavenColor from '../../assets/carousel/RavenColor.png';

//Component Icons Import//
import BatteryIcon from '../../assets/images/Battery.png';
import PowerIcon from '../../assets/images/Power.png';
import AeroshellIcon from '../../assets/images/Aeroshell.png';

import {
    ProjectContainer,

    DaybreakContainer,
    DaybreakTextContainer,
    DaybreakTitleText,
    DaybreakImage,
    DaybreakBatteryText,
    DaybreakPowerText,
    DaybreakAeroshellText,
    DaybreakStoryContainer,
    DaybreakStoryText,

    RavenContainer,
    RavenTextContainer,
    RavenTitleText,
    RavenImage,
    RavenBatteryText,
    RavenPowerText,
    RavenAeroshellText,
    RavenStoryContainer,
    RavenStoryText,

    FadeInLeftDiv,
    FadeInRightDiv,

} from './ProjectSectionStyle';

const ProjectSection = () => {
    return (
        <ProjectContainer className='projects'>

            <DaybreakContainer>
                
                <FadeInLeftDiv>
                <DaybreakTextContainer>
                    <DaybreakTitleText>
                        DAYBREAK (2017 - 2022)
                    </DaybreakTitleText>
                        <img height='75px' width='75px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakBatteryText>
                            420x Panasonic NCR18650b Li-ion cells (5.1kWh)
                        </DaybreakBatteryText>
                        <img height='75px' width='75px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakPowerText>
                        NGM SC-M150 in-hub BLDC (3.75kW)
                        4m<sup>2</sup> of Sunpower E60 solar cells
                        </DaybreakPowerText>
                        <img height='75px' width='75px'
                            src={BatteryIcon}>
                        </img>
                        <DaybreakAeroshellText>
                        Spaceframe monohull
                        Twill weave carbon fibre, soric core
                        4130 Chromoly steel spaceframe
                        </DaybreakAeroshellText>
                </DaybreakTextContainer>
                </FadeInLeftDiv>

                <DaybreakImage>
                    <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false}> 

                        <img src={Daybreak1} />
                        <img src={Daybreak2} />
                        <img src={Daybreak3} />
                        <img src={Daybreak4} />
                        <img src={Daybreak5} />

                    </Carousel>
                </DaybreakImage>
            </DaybreakContainer>

            <DaybreakStoryContainer>
                <DaybreakStoryText>
                    Daybreak set out to build on the knowledge gained from Raven and learn from previous mistakes. 
                    Daybreak's design started in 2018, spearheaded by a starkly bright and dedicated group of students. 
                    Daybreak's design focused on being more efficient, more competitive, and is going to be the team's first car to officially race in competition. 
                    All aspects of Daybreak are an improvement over Raven, including a more efficient battery, aeroshell, and an improved manufacturing process.
                    The team started to manufacture Daybreak in 2019, with eyes set firmly on the 2020 American Solar Challenge. 
                    Due to the global pandemic however, the team was not able to attend competition in 2020 or 2021. 
                    With the return to in-person work in 2022, the team is back in full swing and is in the final stages of getting Daybreak race ready for the American Solar Challenge 2022!
                </DaybreakStoryText>
            </DaybreakStoryContainer>


            <RavenContainer>
                <FadeInLeftDiv>
                <RavenTextContainer>

                    <RavenTitleText>
                        Raven (2008 - 2017)
                    </RavenTitleText>
                        <img height='75px' width='75px'
                            src={BatteryIcon}>
                        </img>
                        <RavenBatteryText>
                            4kWh of LiFePO4 cells powering a 8kWPGM 132 brushed DC motor (8kW)
                        </RavenBatteryText>
                        <img height='75px' width='75px'
                            src={BatteryIcon}>
                        </img>
                        <RavenPowerText>
                            6m<sup>2</sup> of Sunpower C60 solar cells
                        </RavenPowerText>
                        <img height='75px' width='75px'
                            src={BatteryIcon}>
                        </img>
                        <RavenAeroshellText>
                            Twill weave carbon fibre/fibreglass, soric core
                        </RavenAeroshellText>
                </RavenTextContainer>
                </FadeInLeftDiv>

                <RavenImage>
                    <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false}> 

                        <img src={RavenColor} />
                        <img src={Raven1} />
                        <img src={Raven2} />
                        <img src={Raven3} />
                        <img src={Raven4} />
                        <img src={Raven5} />

                    </Carousel>
                </RavenImage>
            </RavenContainer>

            <RavenStoryContainer>
                <RavenStoryText>
                Starting in 2007, a group of asportational students from the University of British Columbia set out to design a solar powered vehicle to compete in the American Solar Challenge. 
                However, given their lack of experience and structure, they unfortunately never got to finish the car, but as pioneers of UBC Solar, they laid out much of the groundwork for what this design team has become. 
                Fast forward to 2013, a new group of students – led by Dave Schwartz – restored the passion the initial group of students once had, with much determination and hardwork they were successful in finishing the design and manufacturing of our solar car, Raven. 
                With much eagerness and excitement, the team took Raven to the Formula Sun Grand Prix in 2017, a competition where all the best solar teams in North America competed for the most laps around the track. Despite their best efforts, an electrical issue prevented the team from showcasing Raven in all its glory in the competition. 
                However, this did not detour or take away the valuable learning experiences the team gained from the moment project Raven was started to the last day of the competition. 
                Geared up with these experiences, a new generation of the team arose, with new goals to build upon the foundation previous design teams laid out, marking the beginning of Daybreak.
                </RavenStoryText>
            </RavenStoryContainer>

        </ProjectContainer>
    );
};

export default ProjectSection
