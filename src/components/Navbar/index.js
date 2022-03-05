import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/Logo.png';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink, 
} from './NavStyle';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav className='/'>
                <NavLogo to='/'>
                    <img width="100" height="75"
                        src={Logo}>
                    </img>
                </NavLogo>
                <NavbarContainer>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='competitions'>Competitions</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='sponsors'>Sponsors</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/sponsor-us'>Sponsor Us</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar