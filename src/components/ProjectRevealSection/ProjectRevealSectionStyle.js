import styled from 'styled-components';

export const ProjectRevealContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 85vh;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 768px) {
        font-size 42px;
        zoom: 0.5;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        zoom: 0.5;
    }
`;

export const ProjectRevealBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
        max-height: 900px;
    }

    @media screen and (max-width: 480px) {
        max-height: 900px;
    }
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;
