import React from 'react';
import TeamPhoto from '../../assets/images/TeamPhoto.png';

import {
    AboutContainer,
    AboutContentBox,
    AboutDescriptionContainer,
    AboutTitle,
    AboutDescription,
    AboutPhotoContainer,
    AboutTeamPhoto,
} from './AboutStyle';

const AboutSection = () => {
    return (
        <AboutContainer className='about'>
            <AboutContentBox>
                <AboutDescriptionContainer>
                    <AboutTitle>
                        MEET THE TEAM
                    </AboutTitle>
                    <AboutDescription>
                    UBC Solar is an engineering design team that consists of roughly 70 dedicated engineering students.
                    Our members are focused on pushing the limits of sustainable innovation through the development of solar vehicles by developing

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