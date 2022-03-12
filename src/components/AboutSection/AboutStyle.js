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
    color: white;
`;

export const AboutContentBox = styled.div`
    display: flex;
    width: 80vw;
    height: 80%;
    border-radius: 10px;
    padding: 1rem;
    justify-content: center;
`;

export const AboutDescriptionContainer = styled.div`
    width: 30vw;
    border-radius: 25px;
    display: grid;
    height: 100%;
    padding: 0rem 1rem;
`;

export const AboutTitle = styled.p`
    font-weight: bold;
    font-size: 1.7vw;
    margin-top: -1rem;
`;

export const AboutDescription = styled.p`
    font-size: 1vw;
    display: flex;
    margin-top: -18vh;
    height: 100%;
    border-radius: 25px;
`;

export const AboutPhotoContainer = styled.div`
    width: 75vmax;
    display: flex;
    border-radius: 25px;
    justify-content: center;
    margin-left: auto;
`;

export const AboutTeamPhoto = styled.div`
    border-radius: 10px;
`;

export const AboutCounter = styled.p`
    font-weight: bold;
    font-size: 1.2vw;
    margin-left: auto;
    margin-right: auto;
`;