import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import { FaAngleDown } from 'react-icons/fa';

import TeamRoleHero from '../../assets/TeamRoleImages/TeamRoles.png';

import Footer from '../Footer';

//Team Leads

import {
    TeamRoleContainer,
    HeroContainer,
    HeroPhoto,
    ArrowLevitate,
    TeamLeadContainer,
    LeadProfileContainer,
    LeadImage,
    LeadDescription,
    LeadName,
    LeadPosition,

} from './TeamRoleStyle';

const TeamRolePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <NavigationBar isOpen={isOpen }toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />

            <TeamRoleContainer>
                <HeroContainer>
                        <HeroPhoto
                            src={ TeamRoleHero }>
                        </HeroPhoto>
                        <ArrowLevitate to='meet'>
                        <FaAngleDown size="80px" cursor="pointer" ></FaAngleDown>
                        </ArrowLevitate>
                    </HeroContainer>

                <TeamLeadContainer>
                    <LeadProfileContainer>
                        <LeadImage></LeadImage>
                        <LeadDescription></LeadDescription> //Hover Effect
                        <LeadName>Daddy</LeadName>
                        <LeadPosition>Your Mom</LeadPosition>
                    </LeadProfileContainer>
                </TeamLeadContainer>
            </TeamRoleContainer>

            <Footer/>
        </>
    );
};

export default TeamRolePage