import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: grid;
    background: #002145;
    height: 90vh;
    position: relative;
    z-index: 5;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const AboutContentBox = styled.div`
    display: flex;
    background: #E5B13A;
    width: 80vw;
    height: 80%;
    border-radius: 10px;
    padding: 1rem;

`;

export const AboutDescriptionContainer = styled.div`
    width: 20vw;
    border-radius: 25px;
    display: grid;
    height: 100%;
    padding: 0rem 2rem;
`;

export const AboutTitle = styled.p`
    color: #002145;
    font-weight: bold;
    font-size: 1.7rem;
    margin-right: auto;
    margin-bottom: auto;
`;

export const AboutDescription = styled.p`
    font-size: 1rem;
    color: #002145;
    display: flex;
    margin-bottom: auto;
    margin-top: -3rem;
    height: 200%;
    border-radius: 25px;
`;

export const AboutPhotoContainer = styled.div`
    background: #E5B13A;
    width: 75vmax;
    display: flex;
    border-radius: 25px;
    justify-content: center;
    margin-left: auto;
`;

export const AboutTeamPhoto = styled.div`
    border-radius: 10px;
`;