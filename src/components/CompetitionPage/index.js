import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import Footer from '../Footer'
import {
    ProjectMainImageContainer,
    ProjectTextContainer,
    ProjectImage,
    ProjectMainImageContentContainer,
    ProjectMainImageContentText,
    ProjectTextName,
    ProjectTextYear,
    LastProjectTextContainer

} from './CompetitionStyle';
import ProjectPageRaven from '../../assets/CompetitionPageImages/CompetitionsPageImage2.png';
import ProjectPageDaybreak from '../../assets/CompetitionPageImages/CompetitionsPageImage1.png';
const ProjectPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavigationBar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <div style={{ marginBottom: '5vh' }}>
                <ProjectMainImageContainer>
                    {/* <ProjectImage src={ProjectPageMainImage} alt="Main Image" /> */}
                    <ProjectMainImageContentContainer>
                        <ProjectMainImageContentText>Competitions</ProjectMainImageContentText>
                    </ProjectMainImageContentContainer>
                </ProjectMainImageContainer>
                <ProjectImage backgroundImage={ProjectPageDaybreak} />
                <ProjectTextContainer>
                    <ProjectTextName>Formula Sun Grand Prix 2022</ProjectTextName>
                    <p>
                    After countless all-nighters from many dedicated members preparing for the competition, driving 12 - 14 hours a day down to Topeka, Kansas, our team officially broke UBC Solar personal records at the Formula Sun Grand Prix 2022 competition! 
                    Learning from the mistakes of the 2017 FSGP competition, our team carefully planned the logistics and engineering designs to minimize as much risk as possible for our car, Daybreak.
                    Passing strict safety requirements and a rigorous dynamics test for the first time while also racing our solar car on the racetrack for the first time in history; competing against many other top universities from all over North America. 
                    Our drivers: Cywin Tapia and James Seto spent countless days driving the solar car, determined to perfect their techniques through the extreme Kansas heat.
                    This competition was a huge learning opportunity for our members and also provided the team with new ideas from cooperating with other top universities. 
                    The competition has sparked the future success for our team and allowed us to pursue more ambitious endeavors with the experiences we gained.
                    </p>
                    
                </ProjectTextContainer>
                <ProjectImage backgroundImage={ProjectPageRaven} />
                <LastProjectTextContainer>
                    <ProjectTextName>Formula Sun Grand Prix 2017</ProjectTextName>
                    <p>
                    T
                    </p>
                </LastProjectTextContainer>
            </div>
            <Footer />
        </>
    );
};

export default ProjectPage