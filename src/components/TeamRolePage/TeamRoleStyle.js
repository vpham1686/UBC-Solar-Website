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
    height: 90%;
    width: 100%;
    object-fit: cover;
    display: block;
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

export const TeamLeadContainer = styled.div`

`;

export const LeadProfileContainer = styled.div`

`;

export const LeadImage = styled.img`

`;

export const LeadDescription = styled.p`

`;

export const LeadName = styled.p`

`;

export const LeadPosition = styled.p`

`;

