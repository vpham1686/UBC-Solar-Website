import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    height: 90vh;
    position: relative;
    z-index: 3;

    @media screen and (max-width: 1200px) {
        height: 65vh;
    }
        
    @media screen and (max-width: 420px) {
        height: 40vh;
    }
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    padding-bottom: 56.25%;

    @media screen and (max-width: 1200px) {
        
    
    }
        
    @media screen and (max-width: 420px) {
        
    }
    
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;
