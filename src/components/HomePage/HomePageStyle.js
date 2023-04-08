import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const HomeContainer = styled.div`
`;

export const HomeHeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroPhoto = styled.img`
    height: calc(100vh - 60px);
    width: 100%;
    object-fit: cover;
    overflow: auto;

    @media screen and (max-width: 1200px) {
        height: 46vw;
    }
`;

export const ArrowLevitate = styled(LinkScroll)`
    position: absolute;
    display: flex;    

    z-index: 5;
    color: #E5B13A;

    // Animation
    animation-name: ArrowLevitate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes ArrowLevitate {
        from { transform: translate(0, 0px);  }
        65%  { transform: translate(0, 15px); }
        to   { transform: translate(0,-0px);  }
    }

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    position: absolute;
    display: flex;    
    top: 65%;
    z-index: 5;
    color: #E5B13A;
    align-items: center;

`;

export const NavBtnLink = styled.div`
    border-radius: 50px;
    background: #04112E;
    background-size: 200% 100%;
    background-position: right bottom;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    outline: none;
    border: 5px solid #E5B13A;
    cursor: pointer;
    transition: all .5s ease-out;
    text-decoration: none;

    &:hover {
        background-position: left bottom;
        color: #04112E;
        background: #E5B13A;
    }
    @media screen and (max-width: 900px) {
        font-size: calc(10px + 1.5vw);
        padding: calc(8px + .5vw) calc(16px + 1vw);
        border: calc(2px + .5vw) solid #E5B13A;
    }
`;

export const HomeMottoContainer = styled.div`
    opacity: 100%;
`;

export const MottoYellowContainer = styled.div`
    background: rgba(229, 177, 58, 0.95);
    display: flex;
    justify-content: left;
    align-items: center;
    opacity: 99%;
    height: 15vw;
`;

export const MottoBlueContainer = styled.div`
    background: rgba(0, 33, 69, 0.95);
    display: flex;
    justify-content: right;
    align-items: center;
    opacity: .99;
    height: 15vw;
`;

export const MottoYellow = styled.p`
    font-size: 5vw;
    font-weight: bold;
    color: #002145;
    opacity: 100%;
    text-align: left;
    padding-left: 5%;
`;

export const MottoBlue = styled.p`
    font-size: 5vw;
    font-weight: bold;
    color: #E5B13A;
    opacity: 100%;
    text-align: right;
    padding-right: 5%;
`;

export const Anchor = styled.div`
    display: block;
    position: relative;
    visibility: hidden;
    top: -60px;
    align-items: center;
    justify-content: right;
`;

export const HomeValuesContainer = styled.div`
    margin: 50px 50px;
    height: auto;
    transition: 1s ease-in;

    @media screen and (max-width: 1000px) {
        margin: 25px 10px;
        height: auto;
    }
`;

export const MapContainer = styled.div`
    margin: 50px 50px;
    background: #002145; 
    height: auto;
    width: auto;
    transition: 1s ease-in;


    @media screen and (max-width: 1000px) {
        margin: 25px 10px;
        height: auto;
    }
`;

export const ValuesContainer = styled.div`
    display: grid;
    grid-template-areas: "a b c d";
    height: auto;
    grid-gap: 3vw;
    grid-template-columns: repeat(4, 23%);
    justify-content: center;
    @media screen and (max-width: 1000px) {
        grid-template-rows: repeat(1, auto);
        grid-template-columns: 75%;
        grid-template-areas: 
        "a"
        "b"
        "c"
        "d";
    }
`;

export const ValuesTitle = styled.div`
    text-align: center;
    margin-top: 2.5vh;
    margin-bottom: 2vh;
    color: black;
    font-size: 4vh;
    font-weight: bold;

    @media screen and (max-width: 1250px) {
        font-size: 3vh;
    }
`;

export const LeadershipContainer = styled.div`
    grid-area: d;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 60px;
    margin: 0 auto;
`;

export const Icon = styled.img`
    display: block;
    margin: 0 auto;
    marginTop: auto;
    marginBottom: auto;
    width: 35%; 

    transition: 1.5s;
    transition-timing-function: cubic-bezier(1,-0.12,.83,.67);

    @media screen {
        width: 20%;
    }
`;

export const SustainabilityContainer = styled.div`
    grid-area: b;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 60px;
    margin: 0 auto;
`;

export const EducationContainer = styled.div`
    grid-area: c;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 60px;
    margin: 0 auto;
`;

export const InnovationContainer = styled.div`
    grid-area: a;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 60px;
    margin: 0 auto;
`;

export const MapBulletContainer = styled.div`
    vertical-align: middle; 
    text-align: left;
    margin: 5vh 1vh 5vh 20vh;
    color: white;
    padding-bottom: 5vh;

    @media screen and (max-width: 900px) {
        margin: 3vh 7vh 3vh 9vh;
    }
`;

export const MapBullet = styled.div`
    color: white;
    font-size: 2vw;
    font-weight: bold;

    @media screen and (max-width: 900px) {
        margin: 3vh 1vh 3vh .3vh;
        font-size: 5vw;
    }
`;

export const MapTitle = styled.div`
    vertical-align: middle;
    font-size: 4vw;
    font-weight: bold;
    text-align: left;
    margin: 8vh 10vh 5vh 10vh;
    color: white; 
    padding-top: 5vh;

    @media screen and (max-width: 900px) {
        margin: 8vh 1vh 5vh 5vh;
        padding-top: 4vh;
        font-size: 9vw;
    }
`;
