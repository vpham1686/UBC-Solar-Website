import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    background: #000;
    height: 20vh;
    width: 100%;
    position: relative;
    z-index: 3;
    justify-content: right;

    @media screen and (max-width: 768px) {
        zoom: 0.9;
    }

    @media screen and (max-width: 480px) {
        zoom: 0.65;
    }
`;

export const FooterSocialsWrapper = styled.div`
    background: #000;
    width: 50%;
`;

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
`;

export const FooterTitle = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 2.5rem;
    margin-top: auto;
    margin-bottom: 0rem;
    font-weight: bold;
`;

export const FooterSubtitle = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 0.77rem;
    margin-top: -0.5rem;
`;

export const FooterContactWrapper = styled.div`
    background: #000;
    width: 25%;
    display: grid;
`;

export const FooterContactUs = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2.5rem;
    margin-bottom: -1rem;
`;

export const FooterContactEmail = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 0.77rem;
    margin-top: -1.4rem;
`;

export const FooterInstagram = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;

    @media screen and (max-width: 768px) {
        padding: 0.4rem 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0.2rem 1rem;
    }
`;

export const FooterFacebook = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;

    @media screen and (max-width: 768px) {
        padding: 0.4rem 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0.2rem 1rem;
    }
`;

export const FooterLinkedIn = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;

    @media screen and (max-width: 768px) {
        padding: 0.4rem 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0.2rem 1rem;
    }
`;

export const FooterYouTube = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;
    
    @media screen and (max-width: 768px) {
        padding: 0.4rem 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0.2rem 1rem;
    }
`;