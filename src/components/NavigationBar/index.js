import React from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import Logo from '../../assets/NavigationBarImages/Logo.svg';
import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavNav,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavigationBarStyle';

const Navbar = ({ isOpen, toggle }) => {

    return (
        <>
            <Nav className='/'>
                <NavLinks to='/'>
                    <img width="250vw"
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
                                <NavLinks to='/projects'>Our Garage</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/competitions'>Competitions</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/recruitment'>Recruiting</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/team-roles'>About</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavNav>

                    
                    <NavBtn>
                    <a href='/sponsorships' rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <NavBtnLink to='/sponsorships' smooth={true} offset={-75}>Sponsor Us</NavBtnLink>
                    </a>
                    </NavBtn> 
                    

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar