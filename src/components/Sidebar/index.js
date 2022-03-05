import React from 'react';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarStyle';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to='projects' onClick={toggle}>
                        Projects
                    </SidebarLink>

                    <SidebarLink to='competitions' onClick={toggle}>
                        Competitions
                    </SidebarLink>

                    <SidebarLink to='sponsors' onClick={toggle}>
                        Sponsors
                    </SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/sponsor-us'>Sponsor Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;