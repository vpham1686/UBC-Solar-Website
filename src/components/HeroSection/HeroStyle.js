import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 84.4vh;
    position: relative;
    z-index: 3;
    
    @media screen and (max-width: 768px) {
        zoom: 0.5;
    }

    @media screen and (max-width: 480px) {
        zoom: 0.5;
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
    pointer-events: none;
    cursor: default;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;
