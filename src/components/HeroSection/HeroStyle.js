import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83.7vh;
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

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    cursor: default;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;
