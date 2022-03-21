import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const FadeInLeftDiv = styled.div`
  animation: 5s ${fadeInLeftAnimation};
`;

export const FadeInRightDiv = styled.div`
    animation: 5s ${fadeInRightAnimation};
`;

export const AboutSubteamContainer = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    background: #002145;
    height: 180vh;
    position: relative;
    z-index: 5;
    text-align: center;
    color: white;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        height: 250vh;
    }

    @media screen and (max-width: 420px) {
        height: 330vh;
    }
`;

export const AboutMechanicalContainer = styled.div`
    background: #002145;
    height: 80vh;
    width: 45vw;
    border-radius: 10px;
    margin-left: 2.5vw;
    margin-top: 5vh;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 60vh;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 80vh;
        width: 90vw;
        grid-template-rows: 10vh 10vh;
0   }
`;

export const MechanicalTitleText = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
    margin-bottom: auto;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const MechanicalText = styled.p`
    font-size: 1rem;
    width: 33.75vw;
    justify-self: center;

    @media screen and (max-width: 1200px) {
        width: 50vw;
    }

    @media screen and (max-width: 420px) {
        width: 90vw;
    }
`;

export const MechanicalImage = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding: 5vh;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;

export const AboutElectricalContainer = styled.div`
    background: #002145;
    height: 80vh;
    width: 45vw;
    border-radius: 10px;
    margin-top: 5vh;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 60vh;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 80vh;
        width: 90vw;
        grid-template-rows: 10vh 10vh;
    }
`;

export const ElectricalTitleText = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
    margin-bottom: auto;
`;

export const ElectricalText = styled.p`
    font-size: 1rem;
    width: 33.75vw;
    justify-self: center;

    @media screen and (max-width: 1200px) {
        width: 50vw;
    }

    @media screen and (max-width: 420px) {
        width: 80vw;
    }
`;

export const ElectricalImage = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding: 5vh;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;

export const AboutSoftwareContainer = styled.div`
    background: #002145;
    height: 80vh;
    width: 45vw;
    border-radius: 10px;
    margin-left: 2.5vw;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 60vh;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 80vh;
        width: 90vw;
        grid-template-rows: 10vh 10vh;
    }
`;

export const SoftwareTitleText = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
    margin-bottom: auto;
`;

export const SoftwareText = styled.p`
    font-size: 1rem;
    width: 33.75vw;
    justify-self: center;

    @media screen and (max-width: 1200px) {
        width: 50vw;
    }

    @media screen and (max-width: 420px) {
        width: 80vw;
    }
`;

export const SoftwareImage = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding: 5vh;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;

export const AboutBusinessContainer = styled.div`
    background: #002145;
    height: 80vh;
    width: 45vw;
    border-radius: 10px;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 60vh;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 80vh;
        width: 90vw;
        grid-template-rows: 10vh 10vh;
    }
`;

export const BusinessTitleText = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
    margin-bottom: auto;
`;

export const BusinessText = styled.p`
    font-size: 1rem;
    width: 33.75vw;
    justify-self: center;

    @media screen and (max-width: 1200px) {
        width: 50vw;
    }

    @media screen and (max-width: 420px) {
        width: 80vw;
    }
`;

export const BusinessImage = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding: 5vh;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;
