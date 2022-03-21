import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const SidebarContainer = styled.div`

    position: fixed;
    z-index: 999;
    width: 100vw;
    height: calc(100% - 5rem);
    background-color: rgba(0, 0, 0, 0.7);
    align-items: center;

    &.opened {
        transition: all 0.4s ease-in-out;
        transform: translateX(0);

        @media screen and (min-width: 769px) {
            display: none;
        }

        nav {
            width: 100%;
        }

        ul {
            height: 100vh;
            list-style: none;
            margin: 0;
            padding: 0%;
        }

        li {
            height: calc((100% - 5rem)/5);
            text-align: center;
        }

        ul li {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        nav li:nth-of-type(1){
            background-color: #002145;
        }
        
        nav li:nth-of-type(2){
            background-color: #002145;
        }

        nav li:nth-of-type(3){
            background-color: #002145;
        }

        nav li:nth-of-type(4){
            background-color: #002145;
        }

        nav li:nth-of-type(5){
            background-color: #E5B13A;
        }

        nav li a {
            letter-spacing: 0.4rem;
            font-size: 2rem;
        }

        nav li a:hover,
        nav li a:active {
            transform: scale(1.2);
        }

        .slidein:nth-of-type(1) {
            animation: slide-in 0.4s linear 0.2s both;
        }

        .slidein:nth-of-type(2) {
            animation: slide-in 0.4s linear 0.3s both;
        }

        .slidein:nth-of-type(3) {
            animation: slide-in 0.4s linear 0.4s both;
        }

        .slidein:nth-of-type(4) {
            animation: slide-in 0.4s linear 0.5s both;
        }

        .slidein:nth-of-type(5) {
            animation: slide-in 0.4s linear 0.6s both;
        }

        @keyframes slide-in {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
        }

        display: flex;
        flex-direction: column;
    }

    &.closed {
        transition: all 0.1s ease-in-out;
        transform: translateX(-100vw);

        nav {
            width: 100%;
        }

        ul {
            height: 100vh;
            list-style: none;
            margin: 0;
            padding: 0%;
        }

        li {
            height: calc((100% - 5rem)/5);
            text-align: center;
        }

        ul li {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        nav li:nth-of-type(1){
            background-color: #002145;
        }
        
        nav li:nth-of-type(2){
            background-color: #002145;
        }

        nav li:nth-of-type(3){
            background-color: #002145;
        }

        nav li:nth-of-type(4){
            background-color: #002145;
        }

        nav li:nth-of-type(5){
            background-color: #E5B13A;
        }

        nav li a {
            letter-spacing: 0.4rem;
            font-size: 2rem;
        }

        nav li a:hover,
        nav li a:active {
            transform: scale(1.2);
        }

        .slideout:nth-of-type(1) {
            animation: slide-out 0.3s linear 0.1s both;
        }

        .slideout:nth-of-type(2) {
            animation: slide-out 0.3s linear 0.1s both;
        }

        .slideout:nth-of-type(3) {
            animation: slide-out 0.3s linear 0.1s both;
        }

        .slideout:nth-of-type(4) {
            animation: slide-out 0.3s linear 0.1s both;
        }

        .slideout:nth-of-type(5) {
            animation: slide-out 0.3s linear 0.1s both;
        }

        @keyframes slide-out {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
        }

        display: flex;
        flex-direction: column;
    }
`;

export const SidebarWrapper = styled.nav`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
`

export const SidebarLink = styled(LinkScroll)`
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    text-decoration: none;
    color: white;
`;
