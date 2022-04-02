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
    height: 1500px;
    position: relative;
    z-index: 5;
    text-align: center;
    color: white;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        height: 2800px;
    }

    @media screen and (max-width: 420px) {
        height: 2400px;
    }
`;

export const AboutMechanicalContainer = styled.div`
    background: #002145;
    height: 700px;
    width: 45vw;
    border-radius: 10px;
    margin-left: 2.5vw;
    margin-top: 50px;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 25%;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 25%;
        width: 90vw;
        padding-bottom: 50px;
    }
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
    padding: 50px;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;

export const AboutElectricalContainer = styled.div`
    background: #002145;
    height: 700px;
    width: 45vw;
    border-radius: 10px;
    margin-top: 50px;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 25%;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 25%;
        width: 90vw;
        padding-bottom: 50px;
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
    padding: 50px;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;

export const AboutSoftwareContainer = styled.div`
    background: #002145;
    height: 700px;
    width: 45vw;
    border-radius: 10px;
    margin-left: 2.5vw;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 25%;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 25%;
        width: 90vw;
        padding-bottom: 50px;
        padding-top: 50px;
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
    padding: 50px;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;

export const AboutBusinessContainer = styled.div`
    background: #002145;
    height: 700px;
    width: 45vw;
    border-radius: 10px;
    display: grid;

    @media screen and (max-width: 1200px) {
        height: 25%;
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 420px) {
        height: 25%;
        width: 90vw;
        padding-top: 50px;
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
    padding: 50px;

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-bottom: auto;
    }
`;
