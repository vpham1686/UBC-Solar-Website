import React from 'react';
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute
} from './SidebarStyle';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer className={(isOpen? "opened ": "closed ") + "overlay"} isOpen={isOpen} onClick={toggle}>

            <SidebarWrapper>
                <SidebarMenu>
                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/projects'  offset={-75} onClick={toggle}>
                            Projects
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/competitions' offset={-75} onClick={toggle}>
                            Competitions
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/team-roles' offset={-75} onClick={toggle}>
                            Our Team
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <SidebarRoute to='/recruitment' offset={-75} onClick={toggle}>
                            Join Us
                        </SidebarRoute>
                    </li>

                    <li className={(isOpen? "slidein": "slideout")}>
                        <a href='https://drive.google.com/file/d/1E40IN7ro8bu5YJBgEa-oPB5TQk6k-lW0/view' target='blank' style={{ textDecoration: 'none', color: '#ffffff' }}>Sponsor Us</a>
                    </li>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/sponsor-us'>Sponsor Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;