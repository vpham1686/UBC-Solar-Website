import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    
`;

export const HomeHeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroPhoto = styled.img`
    height: 90%;
    width: 100%;
    object-fit: cover;
    display: block;
`;

export const ArrowLevitate = styled.div`
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

export const HomeMeetContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 50px;
`;

export const MeetImageContainer = styled.img`
    height: 45%;
    width: 75%;
    object-fit: cover;
    display: block;
    padding: 50px;
    padding-left: 25px;
`;

export const MeetDescriptionContainer = styled.div`
    background: rgba(0, 33, 69, 0.75);
    padding: 50px;
    width: 25%;
`;

export const HomeNewsfeedContainer = styled.div`

`;

export const HomeSponsorsContainer = styled.div`
    height: 5000px;
`;

export const DiamondContainer = styled.div`
    border-top: 5px solid;
    border-color: #70D1F4;
    display: grid;
`;

export const GoldContainer = styled.div`

`;

export const SilverContainer = styled.div`

`;

export const BronzeContainer = styled.div`

`;

export const FriendContainer = styled.div`

`;

// export const AboutContainer = styled.div`
//     display: flex;
//     background: #002145;
//     height: 800px;
//     position: relative;
//     z-index: 5;
//     justify-content: center;
//     align-items: center;
//     padding: 1rem;
//     color: white;

//     @media screen and (max-width: 1200px) {
//         height: 1100px;
//     }

//     @media screen and (max-width: 420px) {
//         height: 1000px;
//     }
// `;
