import React from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/Logo.png';
import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavNav,
    NavMenu, 
    NavItem, 
    NavLinks,
} from './NavStyle';

const Navbar = ({ isOpen, toggle }) => {
    return (
        <>
            <Nav className='/'>
                <NavLinks to='hero' smooth={true} offset={-90} onClick={isOpen? toggle : null }>
                    <img width="250px"
                        src={Logo}>
                    </img>
                </NavLinks>

                <NavbarContainer>

                    <MobileIcon onClick={toggle}>
                        <Hamburger color="#FFFFFF" rounded toggled={isOpen} toggle={toggle}/>
                    </MobileIcon>
                    <NavNav className="stroke">
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about' smooth={true} offset={-75}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='projects' smooth={true} offset={-75}>Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='competitions' smooth={true} offset={-75}>Competitions</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='sponsors' smooth={true} offset={-75}>Sponsors</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavNav>

                    {/* <NavBtn>
                        <NavBtnLink to='/sponsor-us' smooth={true} offset={-75}>Sponsor Us</NavBtnLink>
                    </NavBtn> */}

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar