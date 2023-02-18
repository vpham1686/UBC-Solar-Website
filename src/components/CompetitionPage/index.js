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
                    After countless all-nighters from many dedicated members preparing for the competition, driving 12 - 14 hours a day down to Topeka, Kansas, the team officially broke UBC Solar personal records at the Formula Sun Grand Prix 2022 competition! 
                    Learning from the mistakes of the 2017 FSGP competition, the team carefully planned the logistics and engineering designs to minimize as much risk as possible for the car, Daybreak.
                    The team passed strict safety requirements and a rigorous dynamics test for the first time and raced the solar car on the racetrack for the first time in history; competing against many other top universities from all over North America.   
                    Our drivers: Cywin Tapia (Former Mechanical Executive) and James Seto (Solar Array Lead at Competition) spent countless days driving the solar car, determined to perfect their techniques through the extreme Kansas heat.                   
                    This competition was a huge learning opportunity for our members and also provided the team with new ideas from cooperating with other top universities. 
                    The competition has sparked the future success for our team and allowed us to pursue more ambitious endeavors with the experiences we gained.
                    </p>
                    
                </ProjectTextContainer>
                <ProjectImage backgroundImage={ProjectPageRaven} />
                <LastProjectTextContainer>
                    <ProjectTextName>Formula Sun Grand Prix 2017</ProjectTextName>
                    <p>
                    FSGP 2017 was UBC Solar's first time in a competition. 
                    The team had a few ambitious members with an objective of pioneering their way into a competition. 
                    The solar car, Raven, was not fully tested before committing to the competition which led to some engineering faults along the journey. 
                    Sections of the aeroshell were cracked from the drive to the competition site. 
                    This setback made it difficult for the team to work on improving other vehicle systems and repairing the aeroshell in the span of the competition scrutineering period. 
                    The team unfortunately did not pass dynamics testing and did not get to bring Raven onto the racetrack. On the brightside, the team learnt many valuable techniques to further improve future solar car designs and brought back valuable experiences that led to the improved competition logistics for Daybreak in 2022.
                    </p>
                </LastProjectTextContainer>
            </div>
            <Footer />
        </>
    );
};

export default ProjectPage