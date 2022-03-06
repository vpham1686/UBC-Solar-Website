import React from 'react';

import Map from '../../assets/images/ASCMap.png';

import {
    CompetitionContainer,
    CompetitionMap,
} from './CompetitionsSectionStyle';

const CompetitionsSection = () => {
    return (
        <CompetitionContainer>
            <CompetitionMap>
                <img height='100%' width='100%' style={{borderRadius: '10px'}}
                    src={Map} >
                </img>
            </CompetitionMap>
        </CompetitionContainer>
    );
};

export default CompetitionsSection
