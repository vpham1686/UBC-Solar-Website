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

} from './ProjectPageStyle';
import ProjectPageRaven from '../../assets/ProjectPageImages/ProjectPageRaven.png';
import DaybreakSpecs from '../../assets/ProjectPageImages/DaybreakSpecs.png';
import ProjectPageDaybreak from '../../assets/ProjectPageImages/ProjectPageDaybreak.png';
import RavenSpecs from '../../assets/ProjectPageImages/RavenSpecs.png';
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
                        <ProjectMainImageContentText>Projects</ProjectMainImageContentText>
                    </ProjectMainImageContentContainer>
                </ProjectMainImageContainer>
                <ProjectImage image={DaybreakSpecs} backgroundImage={ProjectPageDaybreak} />
                <ProjectTextContainer>
                    <ProjectTextName>Daybreak</ProjectTextName>
                    <ProjectTextYear>(2017 - 2022)</ProjectTextYear>
                    <p>Daybreak set out to build on the knowledge gained from Raven and learn from previous mistakes. Daybreak's design started in 2018, spearheaded by a starkly
                        bright and dedicated group of students. Daybreak's design focused on being more efficient, more competitive, and is going to be the team's first car to
                        officially race in competition. All aspects of Daybreak are an improvement over Raven, including a more efficient battery,
                        aeroshell, and an improved manufacturing process. The team started to manufacture Daybreak in 2019, with eyes set firmly on
                        the 2020 American Solar Challenge. Due to the global pandemic however, the team was not able to attend competition in 2020 or
                        2021. With the return to in-person work in 2022, the team is back in full swing and is in the final stages of getting Daybreak
                        race ready for the American Solar Challenge 2022!</p>
                </ProjectTextContainer>
                <ProjectImage image={RavenSpecs} backgroundImage={ProjectPageRaven} />
                <LastProjectTextContainer>
                    <ProjectTextName>Raven</ProjectTextName>
                    <ProjectTextYear>(2007 - 2017)</ProjectTextYear>
                    <p>Starting in 2007, a group of asportational students from the University of British Columbia set out to design a solar powered vehicle to compete in the
                        American Solar Challenge. However, given their lack of experience and structure, they unfortunately never got to finish the
                        car, but as pioneers of UBC Solar, they laid out much of the groundwork for what this design team has become. Fast forward to
                        2013, a new group of students - led by Dave Schwartz - restored the passion the initial group of students once had, with much
                        determination and hardwork they were successful in finishing the design and manufacturing of our solar car, Raven. With much
                        eagerness and excitement, the team took Raven to the Formula Sun Grand Prix in 2017, a competition where all the best solar
                        teams in North America competed for the most laps around the track. Despite their best efforts, an electrical issue prevented
                        the team from showcasing Raven in all its glory in the competition. However, this did not detour or take away the valuable
                        learning experiences the team gained from the moment project Raven was started to the last day of the competition. Geared up
                        with these experiences, a new generation of the team arose, with new goals to build upon the foundation previous design teams
                        laid out, marking the beginning of Daybreak.
                    </p>
                </LastProjectTextContainer>
            </div>
            <Footer />
        </>
    );
};

export default ProjectPage