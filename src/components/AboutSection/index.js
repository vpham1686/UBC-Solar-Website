import React from 'react';
import TeamPhoto from '../../assets/images/TeamPhoto.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import {
    AboutContainer,
    AboutContentBox,
    AboutDescriptionContainer,
    AboutTitle,
    AboutDescription,
    AboutPhotoContainer,
    AboutTeamPhoto,
    AboutCounter,
} from './AboutStyle';

const AboutSection = () => {
    return (
        <AboutContainer className='about'>
            <AboutContentBox>
                <AboutDescriptionContainer>
                    <AboutTitle>
                        MEET THE TEAM
                        <AboutCounter>
                        Member Count:&nbsp;
                        
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 100 }}>
                                    {isVisible ? <CountUp end={70} duration={3} /> : null}
                                </div>
                                )}
                            </VisibilitySensor>
                        </AboutCounter>
                    </AboutTitle>

                    <AboutDescription>
                    <br></br>UBC Solar is an engineering design team that consists dedicated students ranging from programs such as engineering, business, and sciences.
                    We are passionate about pushing the limits of sustainable innovation through the development of electric solar-powered racecars.
                    <br></br>
                    <br></br>
                    UBC Solar provides an opportunity for undergraduate students to transcend the classroom and learn in an interdisciplinary team environment.
                    As a team, we strive to promote clean energy and sustainable automotive solutions while encouraging continuous learning in a fast-paced environment to produce the next generation of industry leaders.

                    </AboutDescription>
    
                </AboutDescriptionContainer>

                <AboutPhotoContainer>
                    <AboutTeamPhoto>
                        <img height='100%' width='100%' style={{borderRadius: '10px'}}
                            src={TeamPhoto} >
                        </img>
                    </AboutTeamPhoto>
                </AboutPhotoContainer>
            </AboutContentBox>
        </AboutContainer>
    );
};

export default AboutSection