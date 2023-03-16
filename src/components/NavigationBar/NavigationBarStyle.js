import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
    background: rgba(4, 17, 46);
    height: 60px;
    width: 100%;
    font-weight: 650;
    display: flex;
    align-items: center;
    font-size: 17px;
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

    @media screen and (max-width: 900px) {
        display: block;
        position: absolute;
        top: 7px;
        right: 15px;
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
        bottom: 10px;
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

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkRouter)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decorartion: none;
    padding: 0 15px;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: linear-gradient(to right, #E5B13A 50%, #04112E 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    white-space: nowrap;
    padding: 7px 18px;
    color: white;
    font-size: 17px;
    font-weight: bold;
    outline: none;
    border: 3px solid #E5B13A;
    cursor: pointer;
    transition: all 1s ease-out;
    text-decoration: none;

    &:hover {
        background-position: left bottom;
        color: #04112E;
    }
`;