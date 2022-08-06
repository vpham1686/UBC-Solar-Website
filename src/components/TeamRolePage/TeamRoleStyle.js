import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const TeamRoleContainer = styled.div`
    
`;

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroPhoto = styled.img`
    //Height is exact for fitting one section
    height: 46vw;
    width: 100%;
    object-fit: cover;
    overflow: auto;
`;

export const ArrowLevitate = styled(LinkScroll)`
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

export const Anchor = styled.div`

`;

export const TeamLeadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33.333vw);
    grid-template-rows: repeat(6, 90vh);
    justify-items: center;
    padding-top: 50px;
`;

export const LeadProfileContainer = styled.div`
    position: relative;
    height: 33vw;
`;

export const LeadImage = styled.img`
    height: 100%;
`;

export const LeadDescriptionContainer = styled.div`
    z-index: 0;
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background: #002245;
    opacity: 0;
    
    &:hover {
        opacity: 0.8;
    }
`;


export const LeadDescription = styled.p`
    width: 22vw;
    text-align: center;
    font-size: 1vw;
    color: #ffffff;
`;

export const LeadInfoContainer = styled.div`
    display: grid;
`;

export const LeadName = styled.p`
    text-align: center;
    margin-bottom: auto;
    margin-top: auto;
    font-weight: bold;
    font-size: 23px;
`;

export const LeadPosition = styled.p`
    text-align: center;
    margin-top: auto;
    font-size: 14px;
`;

