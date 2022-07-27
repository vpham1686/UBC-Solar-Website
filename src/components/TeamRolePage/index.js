import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';

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
        <div>
            <TeamRoleContainer>
                Team Roles.
            </TeamRoleContainer>
        </div>

        </>
    );
};

export default TeamRolePage