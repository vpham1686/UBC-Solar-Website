import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'
import Logo from '../../assets/NavigationBarImages/Logo.png';
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
                                <NavLinks to='projects'>Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='competitions'>Competitions</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='team-roles'>Team Roles</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='recruitment'>Join Us</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavNav>

                    
                    <NavBtn>
                    <a href='https://drive.google.com/file/d/1E40IN7ro8bu5YJBgEa-oPB5TQk6k-lW0/view?usp=sharing' target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <NavBtnLink to='/sponsor-us' smooth={true} offset={-75}>Sponsor Us</NavBtnLink>
                    </a>
                    </NavBtn> 
                    

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar