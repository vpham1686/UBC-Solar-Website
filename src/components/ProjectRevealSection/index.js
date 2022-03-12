import React from 'react';
import HorizontalLogo from '../../assets/images/HorizontalLogo.png';
import Daybreak from '../../assets/images/Daybreak.png';
import {
    ProjectRevealContainer,
    ProjectRevealBackground,
} from './ProjectRevealSectionStyle';

const ProjectRevealSection = () => {
    return (

        <ProjectRevealContainer>
            <ProjectRevealBackground>
                <img width="100%" height="100%"
                    src={Daybreak}>
                </img>
            </ProjectRevealBackground>



        </ProjectRevealContainer>
    );
};

export default ProjectRevealSection