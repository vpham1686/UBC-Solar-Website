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

//EXTEND THIS AREA "HEIGHT" WHEN ADDING IN THE STORY FOR DAYBREAK AND RAVEN.//
export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    background: #002145;
    height: 1800px;
    position: relative;
    z-index: 5;
    text-align: center;
    color: white;

    @media screen and (max-width: 1200px) {
        height: 3000px;
    }

    @media screen and (max-width: 420px) {
        height: 3500px;
    }
`;

export const DaybreakContainer = styled.div`
    background: #002145;
    height: 500px;
    display: flex;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: auto;
    }

    @media screen and (max-width: 420px) {

    }
`;

export const DaybreakTextContainer = styled.div`
    width: 30vw;
    margin-left: 10vw;

    @media screen and (max-width: 1200px) {
        width: 90vw;
        margin-left: auto;
    }

    @media screen and (max-width: 420px) {
        width: 90vw;
    }
`;

export const DaybreakImage = styled.div`
    display: grid;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    padding: 5vh;

    @media screen and (max-width: 1200px) {
        display: flex;
        width: 80vw;
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const DaybreakTitleText = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem;
`;

export const DaybreakBatteryText = styled.p`
    font-size: 1rem;
`;


export const DaybreakPowerText = styled.p`
    font-size: 1rem;
`;

export const DaybreakAeroshellText = styled.p`
    font-size: 1rem;
`;

export const RavenContainer = styled.div`
    background: #002145;
    height: 500px;
    display: flex;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const RavenTextContainer = styled.div`
    width: 30vw;
    margin-left: 10vw;

    @media screen and (max-width: 1200px) {
        width: 90vw;
        margin-left: auto;
    }

    @media screen and (max-width: 420px) {
        width: 90vw;
    }
`;

export const RavenImage = styled.div`
    display: grid;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    padding: 5vh;

    @media screen and (max-width: 1200px) {
        display: flex;
        width: 80vw;
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const RavenTitleText = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem;
`;

export const RavenBatteryText = styled.p`
    font-size: 1rem;
`;


export const RavenPowerText = styled.p`
    font-size: 1rem;
`;

export const RavenAeroshellText = styled.p`
    font-size: 1rem;
`;

export const DaybreakStoryContainer = styled.div`
    width: 90vw;
    justify-self: center;

    @media screen and (max-width: 1200px) {
        margin-top: auto;
        margin-bottom: auto;
    }

    @media screen and (max-width: 420px) {
        margin-top: auto;
        margin-bottom: auto;
    }
`;

export const DaybreakStoryText = styled.p`

`;

export const RavenStoryContainer = styled.div`
    width: 90vw;
    justify-self: center;

    @media screen and (max-width: 1200px) {
        margin-top: auto;
        margin-bottom: auto;
    }

    @media screen and (max-width: 420px) {
        margin-top: auto;
        margin-bottom: auto;
    }
`;

export const RavenStoryText = styled.p`

`;