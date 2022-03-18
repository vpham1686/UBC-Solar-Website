import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const SidebarContainer = styled.aside`

    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #002145;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #E5B13A;
    padding 1rem 1rem;
    position: relative;
`;

export const Icon = styled.div`
    position: abolsute;
    top: 1.2rem;
    right: 1.3rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
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
    border-radius: 50px;
    background: #E5B13A;
    white-space: nowrap;
    padding: 16px 64px;
    color: #002145;
    font-size: 22px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #E5B13A;
        color: white;
    }
`;
