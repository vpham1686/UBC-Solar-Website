import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const SidebarContainer = styled.div`

    position: fixed;
    z-index: 999;
    width: 100%;
    height: calc(100% - 5rem);
    background-color: rgba(0, 0, 0, 0.7);
    align-items: center;

    &.opened {
        transition: all 0.4s ease-in-out;
        transform: translateX(0);
    }

    &.closed {
        transition: all 0.8s ease-in-out;
        transform: translateX(-100vw);
    }
`;

export const SidebarWrapper = styled.nav`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #E5B13A;
    cursor: pointer;
    margin-left: -40px;

    &:hover {
        color: white;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #E5B13A;
    cursor: pointer;
    margin-left: -40px;

    &:hover {
        color: white;
        transition: 0.2s ease-in-out;
    }
`;
