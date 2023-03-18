import React from 'react';
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarRoute
} from './SidebarStyle';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer className={(isOpen? "opened ": "closed ") + "overlay"} isOpen={isOpen} onClick={toggle}>

            <SidebarWrapper>
                <SidebarMenu>
                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/team-roles'  offset={-75} onClick={toggle}>
                            About
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/projects' offset={-75} onClick={toggle}>
                            Our Garage
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/competitions' offset={-75} onClick={toggle}>
                            Competitions
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/recruitment' offset={-75} onClick={toggle}>
                            Recruiting
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/sponsorships' offset={-75} onClick={toggle}>
                            Sponsor Us
                        </SidebarRoute>
                    </li>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;