import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import TeamRolesMainImage from '../../assets/TeamRoleImages/TeamRolesMainImage.png';

export const TeamRoleContainer = styled.div`
    overflow: hidden;
`;

export const TeamRolesMainImageContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    background-image: url(${TeamRolesMainImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    @media screen and (max-width: 600px) {
        background: #E5B13A;
        height: 100px;
        margin-bottom: 0;
    }
`;

export const TeamRolesMainImageContentContainer = styled.div`
    height: auto;
    width: auto;
`;

export const TeamRolesMainImageContentText = styled.h1`
    margin: 0px 0px 175px 0px;
    color: white;
    font-size: 80px;
    @media screen and (max-width: 600px) {
        color: #002145;
        font-size: 50px;
        margin: 0;
    }
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
// 90vh 90vh 70vh
export const TeamLeadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33.333vw);
    grid-template-rows: repeat(6, 90vh);
    justify-items: center;
    padding-top: 50px;
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(1, 100vw);
        grid-template-rows: repeat(12, 120vw);
    }
    @media screen and (max-width: 750px) {
        grid-template-rows: repeat(12, 150vw);
    }
`;

export const LeadProfileContainer = styled.div`
    position: relative;
    height: 33vw;
    transition: 1s ease-in;
    @media screen and (max-width: 1200px) {
        height: 100vw;
    }
    @media screen and (max-width: 750px) {
        height: 120vw;
    }
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
    @media screen and (max-width: 1200px) {
        font-size: 22px;
        width: 65vw;
    }
    
    @media screen and (max-width: 750px) {
        font-size: 13px;
        width: 80vw;
    }
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
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width: 750px) {
        font-size: 23px;
    }
`;

export const LeadPosition = styled.p`
    text-align: center;
    margin-top: auto;
    font-size: 14px;
    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
    @media screen and (max-width: 750px) {
        font-size: 16px;
    }
`;