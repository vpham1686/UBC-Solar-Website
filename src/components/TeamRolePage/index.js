import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';

import Footer from '../Footer';

import {
    TeamRoleContainer,

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
                Team Roles.
            </TeamRoleContainer>

            <Footer/>
        </>
    );
};

export default TeamRolePage