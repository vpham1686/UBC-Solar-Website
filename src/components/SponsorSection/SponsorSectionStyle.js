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

export const SponsorContainer = styled.div`
    display: grid;
    background: white;
    height: 375vh;
    position: relative;
    z-index: 3;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        height: 250vh;
    }
        
    @media screen and (max-width: 420px) {
        height: 460vh;
    }
    
`;

export const SponsorTitle = styled.p`
    font-size: 3rem;
    font-weight: bold;
    z-index: 2;
    margin-top: 7vh;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
`;

export const SponsorAppreciation = styled.p`
    font-size: 1rem;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5vh;
    width: 60%;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 1.3rem;
    }
    
    @media screen and (max-width: 420px) {

    }
`;

export const TierContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-rows: 40vh 60vh 65vh 60vh 120vh;

    @media screen and (max-width: 1200px) {
        grid-template-rows: 25vh 35vh 37.5vh 55vh 65vh;
    }
    
    @media screen and (max-width: 420px) {
        grid-template-rows: 30vh 75vh 80vh 90vh 120vh;
    }
`;

export const DiamondContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const GoldContainer = styled.div`
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw;
    grid-template-rows: 25vh 25vh 25vh 25vh;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 1200px) {
    grid-template-columns: 20vw 20vw 20vw 20vw;
    grid-template-rows: 15vh 15vh 15vh 15vh;
    }

    @media screen and (max-width: 420px) {
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 25vh 25vh 25vh 25vh;
    }
`;

export const SilverContainer = styled.div`
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw;
    grid-template-rows: 25vh 25vh 25vh 25vh;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px) {
    grid-template-columns: 20vw 20vw 20vw 20vw;
    grid-template-rows: 15vh 15vh 15vh 15vh;
    }
    
    @media screen and (max-width: 420px) {
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 25vh 25vh 25vh 25vh;
    }
`;

export const BronzeContainer = styled.div`
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw;
    grid-template-rows: 15vh 15vh 15vh 15vh;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px) {
    grid-template-columns: 20vw 20vw 20vw 20vw;
    grid-template-rows: 15vh 15vh 15vh 15vh;
    }
    
    @media screen and (max-width: 420px) {
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 25vh 25vh 25vh 25vh;
    }
`;

export const FriendContainer = styled.div`
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw;
    grid-template-rows: 25vh 25vh 25vh 25vh;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px) {
    grid-template-columns: 20vw 20vw 20vw 20vw;
    grid-template-rows: 15vh 15vh 15vh 15vh 15vh;
    }
    
    @media screen and (max-width: 420px) {
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 25vh 25vh 25vh 25vh 25vh;
    }
`;


export const Diamond = styled.div`
    border-top: 5px solid;
    border-color: #70D1F4;
    display: grid;
`;

export const DiamondText = styled.p`
    color: #70D1F4;
    font-weight: bold;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: auto;
    background: white;
`;

export const Gold = styled.div`
    background: white;
    border-top: 5px solid;
    border-color: #FFD700;
    display: grid;
`;

export const GoldText = styled.p`
    color: #FFD700;
    font-weight: bold;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: auto;
    background: white;
`;

export const Silver = styled.div`
    background: white;
    border-top: 5px solid;
    border-color: #A9A9A9;
    display: grid;
`;

export const SilverText = styled.p`
    font-weight: bold;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background: white;
    color: #A9A9A9;
`;

export const Bronze = styled.div`
    background: white;
    border-top: 5px solid;
    border-color: #CD7F32;
    display: grid;
`;

export const BronzeText = styled.p`
    font-weight: bold;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background: white;
    color: #CD7F32;
`;

export const Friend = styled.div`
    background: white;
    border-top: 5px solid;
    border-color: black;
    margin-top: -5vh;
    display: grid;
`;

export const FriendText = styled.p`
    font-weight: bold;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background: white;
`;