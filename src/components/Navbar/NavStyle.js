import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: #04112E;
    height: 10%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 1000;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    justify-content: end;
    width: 100%;
    padding: 0 24px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: -13px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavNav = styled.nav`

    ul li a {
        text-decoration: none;
        color: #FFFFFF;
    }

    ul li a,
    ul li a:after,
    ul li a:before {
        transition: all .5s;
    }

    ul li a:hover {
        color: #E5B13A;
    }

    &.stroke ul li a {
        position: relative;
    }

    &.stroke ul li a:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #E5B13A;
        height: 3px; 
    }

    &.stroke ul li a:hover:after {
        width: 100%;
      }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decorartion: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;