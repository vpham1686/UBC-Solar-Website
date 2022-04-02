import React from 'react';

import Map from '../../assets/images/ASCMap.png';

import {
    CompetitionContainer,
    CompetitionMap,
    CompetitionTextContainer,
    CompetitionTextTitle,
    CompetitionText,
    FadeInLeftDiv,
    FadeInRightDiv,
} from './CompetitionsSectionStyle';

const CompetitionsSection = () => {
    return (
        <CompetitionContainer className='competitions'>
            <CompetitionTextContainer>
                <CompetitionTextTitle>
                    RACE
                </CompetitionTextTitle>
                <CompetitionText>
                The American Solar Challenge (ASC) is a week-long, over 2000 mile race across the United States. 
                Teams from across the globe race on highways powered only on the sun. 
                Teams camp on the side of the road and wake up at 5AM to charge during sunrise, race all day from 8AM-6PM, then charge during sundown. 
                This race showcases the remarkable feats students are able to accomplish and demonstrates the next generation of sustainable automotive technologies. 

                <br></br>
                <br></br>
                For more information:
                <a href="https://www.americansolarchallenge.org/" target="_blank" rel="noopener noreferrer" 
                style={{ textDecoration: 'none', color: '#E5B13A' }}> American Solar Challenge </a>
                </CompetitionText>
            </CompetitionTextContainer>
            <CompetitionMap>
                <img height='100%' width='100%' style={{borderRadius: '10px'}}
                    src={Map} >
                </img>
            </CompetitionMap>
        </CompetitionContainer>
    );
};

export default CompetitionsSection
