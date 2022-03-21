import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const FadeInLeftDiv = styled.div`
  animation: 3s ${fadeInLeftAnimation};
`;

export const FadeInRightDiv = styled.div`
    animation: 3s ${fadeInRightAnimation};
`;

export const AboutContainer = styled.div`
    display: flex;
    background: #002145;
    height: 90vh;
    position: relative;
    z-index: 5;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: white;

    @media screen and (max-width: 1200px) {
        height: 120vh;
    }

    @media screen and (max-width: 420px) {
        height: 140vh;
    }
`;

export const AboutContentBox = styled.div`
    display: flex;
    height: 80%;
    border-radius: 10px;
    padding: 1rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const AboutDescriptionContainer = styled.div`
    width: 30vw;
    border-radius: 25px;
    display: grid;
    height: 100%;
    padding: 0rem 1rem;
    flex: 1;

    @media screen and (max-width: 1200px) {
        order: 2;
        width: 90vw;
        padding: 15px;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const AboutPhotoContainer = styled.div`
    display: flex;
    border-radius: 25px;
    flex: 2;

    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 420px) {
        
    }
`;

export const AboutTitle = styled.p`
    font-weight: bold;
    font-size: 2rem;
    margin-top: -1rem;
`;

export const AboutDescription = styled.p`
    font-size: 1rem;
    display: flex;
    margin-top: -18vh;
    height: 100%;
    border-radius: 25px;

    @media screen and (max-width: 1200px) {
        padding: 125px 5px;
    }

    @media screen and (max-width: 420px) {
        margin-top: -250px;
    }
`;



export const AboutTeamPhoto = styled.div`
    border-radius: 10px;
`;

export const AboutCounter = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
`;