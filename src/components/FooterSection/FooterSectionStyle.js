import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    background: #000;
    height: 25vh;
    width: 100%;
    position: relative;
    z-index: 3;
    justify-content: right;

    @media screen and (max-width: 1200px) {
        height: 15vh;
    }
        
    @media screen and (max-width: 420px) {
        height: 30vh;
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterSocialsWrapper = styled.div`
    background: #000;
    width: 50%;
`;

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        
    }
        
    @media screen and (max-width: 420px) {
        justify-content: flex-start;
    }
`;

export const FooterTitle = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 2.5rem;
    margin-top: auto;
    margin-bottom: 0rem;
    font-weight: bold;

    @media screen and (max-width: 1200px) {
        
    }
        
    @media screen and (max-width: 420px) {
        font-size: 1.5rem;
    }
`;

export const FooterSubtitle = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 0.77rem;
    margin-top: -0.5rem;

    @media screen and (max-width: 1200px) {
        
    }
        
    @media screen and (max-width: 420px) {
        font-size: 0.8rem;
        padding-top: 8px;
    }
`;

export const FooterContactWrapper = styled.div`
    background: #000;
    width: 25%;
    display: grid;

    @media screen and (max-width: 1200px) {
        
    }
        
    @media screen and (max-width: 420px) {
        width: 50%;
        justify-content: center;
    }
`;

export const FooterContactUs = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2.5rem;
    margin-bottom: -1rem;

    @media screen and (max-width: 1200px) {
        
    }
        
    @media screen and (max-width: 420px) {
        justify-content: center;
        margin-top: 4vh;
        margin-bottom: auto;
    }
`;

export const FooterContactEmail = styled.p`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 0.77rem;
    margin-top: -1.4rem;

    @media screen and (max-width: 1200px) {
        
    }
        
    @media screen and (max-width: 420px) {
        justify-content: flex-start;
        margin-top: auto;
        margin-bottom: auto;
    }
`;

export const FooterInstagram = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;

    @media screen and (max-width: 1200px) {
        padding: 0 1rem;
    }
        
    @media screen and (max-width: 420px) {
        
    }
`;

export const FooterFacebook = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;

    @media screen and (max-width: 1200px) {
        padding: 0 1rem;
    }
        
    @media screen and (max-width: 420px) {
        
    }
`;

export const FooterLinkedIn = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;

    @media screen and (max-width: 1200px) {
        padding: 0 1rem;
    }
        
    @media screen and (max-width: 420px) {
        
    }
`;

export const FooterYouTube = styled.div`
    cursor: pointer;
    max-width: 5%;
    padding: 0.4rem 0.2rem;
    
    @media screen and (max-width: 1200px) {
        padding: 0 1rem;
    }
        
    @media screen and (max-width: 420px) {
        
    }
`;