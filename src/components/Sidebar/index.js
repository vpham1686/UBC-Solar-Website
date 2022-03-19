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
                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarLink to='about' smooth={true} offset={-75} onClick={toggle}>
                            About
                        </SidebarLink>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarLink to='projects' smooth={true} offset={-75} onClick={toggle}>
                            Projects
                        </SidebarLink>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarLink to='competitions' smooth={true} offset={-75} onClick={toggle}>
                            Competitions
                        </SidebarLink>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarLink to='sponsors' smooth={true} offset={-75} onClick={toggle}>
                            Sponsors
                        </SidebarLink>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/sponsor-us'>
                            Sponsor Us
                        </SidebarRoute>
                    </li>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/sponsor-us'>Sponsor Us</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;