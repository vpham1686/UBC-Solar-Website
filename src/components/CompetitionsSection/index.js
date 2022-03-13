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
                    ASC Competition
                </CompetitionTextTitle>
                <CompetitionText>
                The American Solar Challenge is a 2500km road race across central North America. 
                Spanning over five days, teams from around the world compete to cross the finish line powered by nothing but the sun. 
                Pushing the vehicles and their designers to their limits, it is our drive and ambition that will get us through the pearly gates.
                <br></br>
                <br></br>
                UBC Solar will be competing against many teams from around the world in the upcoming competition with our new racecar: Daybreak.
                
                
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
