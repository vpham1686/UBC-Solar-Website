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
        <SidebarContainer className={(isOpen? "opened ": "closed ") + "overlay"} isOpen={isOpen} onClick={toggle}>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' smooth={true} offset={-75} onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to='projects' smooth={true} offset={-75} onClick={toggle}>
                        Projects
                    </SidebarLink>

                    <SidebarLink to='competitions' smooth={true} offset={-75} onClick={toggle}>
                        Competitions
                    </SidebarLink>

                    <SidebarLink to='sponsors' smooth={true} offset={-75} onClick={toggle}>
                        Sponsors
                    </SidebarLink>
                    <SidebarRoute to='/sponsor-us'>Sponsor Us</SidebarRoute>

                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/sponsor-us'>Sponsor Us</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;