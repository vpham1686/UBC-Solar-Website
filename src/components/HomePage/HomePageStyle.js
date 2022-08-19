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

export const HomeMottoContainer = styled.div`
    
`;

export const MottoYellowContainer = styled.div`
    background: rgba(229, 177, 58, 0.95);
    display: flex;
    justify-content: left;
    align-items: center;
    opacity: 85%;
    height: 15vw;
`;

export const MottoBlueContainer = styled.div`
    background: rgba(0, 33, 69, 0.95);
    display: flex;
    justify-content: right;
    align-items: center;
    opacity: 85%;
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
`;

export const HomeMeetContainer = styled.div`
    display: grid;
    grid-template-areas: "image text";
    grid-template-columns: 70% 30%;
    height: calc(100vh-60px);
    width: 100%;
    @media screen and (max-width: 1000px) {
        grid-template-areas: 
        "image"
        "text";
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
    }
`;

export const MeetImageContainer = styled.img`
    grid-area: image;
    height: auto;
    width: 90%;
    margin: auto;
    border-radius: 5px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        border-radius: 0px;
    }
`

export const MeetDescriptionContainer = styled.div`
    background: rgba(229, 177, 58, 0.95);
    border-radius: 10px;
    grid-area: text;
    margin: auto 20px;
    padding: 15px;

    @media screen and (max-width: 1000px) {
        border-radius: 0px;
        margin: 20px;
    }
`;

export const HomeValuesContainer = styled.div`
    margin: 50px 10px;
    height: auto;
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
    grid-gap: 20px;
    grid-template-columns: repeat(4, 23%);
    justify-content: center;
    @media screen and (max-width: 1000px) {
        grid-gap: 10px;
        grid-template-rows: repeat(1, auto);
        grid-template-columns: 90%;
        grid-template-areas: 
        "a"
        "b"
        "c"
        "d";
    }
`;

export const LeadershipContainer = styled.div`
    grid-area: d;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 50px;
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
`;

export const SustainabilityContainer = styled.div`
    grid-area: b;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 50px;
    margin: 0 auto;
`;

export const EducationContainer = styled.div`
    grid-area: c;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 50px;
    margin: 0 auto;
`;

export const InnovationContainer = styled.div`
    grid-area: a;
    background: rgba(229, 177, 58, 0.95);
    border-radius: 50px;
    margin: 0 auto;
`;

export const HomeSponsorsContainer = styled.div`

`;

export const DiamondContainer = styled.div`
    border-top: 5px solid;
    border-color: #70D1F4;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 8vh;
`;

export const DiamondSponsors = styled.img`
    display: flex;
    justify-self: center;
    transition: 1s ease-in;

    @media screen and (max-width: 750px) {
        max-width: 200px;
    }
`;

export const GoldContainer = styled.div`
    border-top: 5px solid;
    border-color: #FFD700;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const GoldSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 40vw);
    grid-template-rows: repeat(1, 25vh);
    align-items: center;

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(2, 40vw);
        grid-template-rows: repeat(1, 15vh);
    }
`;

export const GoldSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;

    @media screen and (max-width: 1200px) {
        zoom: 1.4;
        padding-bottom: 3vh;
    }

    @media screen and (max-width: 750px) {
        zoom: 2;
        padding-bottom: 3vh;
    }
`;

export const SilverContainer = styled.div`
    border-top: 5px solid;
    border-color: #A9A9A9;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const SilverSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 40vw);
    grid-template-rows: repeat(1, 20vh);
    align-items: center;

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(2, 40vw);
        grid-template-rows: repeat(1, 15vh);
    }
`;

export const SilverSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;

    @media screen and (max-width: 1200px) {
        zoom: 1.4;
        padding-bottom: 3vh;
    }

    @media screen and (max-width: 750px) {
        zoom: 2;
        padding-bottom: 3vh;
    }
`;

export const BronzeContainer = styled.div`
    border-top: 5px solid;
    border-color: #CD7F32;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const BronzeSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-template-rows: repeat(1, 25vh);
    align-items: center;

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(2, 40vw);
        grid-template-rows: repeat(4, 15vh);
    }
`;

export const BronzeSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;

    @media screen and (max-width: 1200px) {
        zoom: 1.4;
        padding-bottom: 3vh;
    }

    @media screen and (max-width: 750px) {
        zoom: 2;
        padding-bottom: 3vh;
    }
`;

export const SupporterContainer = styled.div`
    border-top: 5px solid;
    border-color: #000000;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
`;

export const SupporterSponsorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 20vw);
    grid-template-rows: repeat(1, 25vh);
    align-items: center;

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(2, 40vw);
        grid-template-rows: repeat(1, 15vh);
    }
`;

export const SupporterSponsors = styled.img`
    margin: 0 auto; //Centering Image
    max-height: 10vw;
    max-width: 14vw;
    padding-bottom: 10vh;
    transition: 1s ease-in;

    @media screen and (max-width: 1200px) {
        zoom: 1.4;
        padding-bottom: 3vh;
    }

    @media screen and (max-width: 750px) {
        zoom: 2;
        padding-bottom: 3vh;
    }
`;