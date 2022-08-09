import styled from 'styled-components';
import ProjectMainImage from '../../assets/ProjectPageImages/ProjectPageMainImage.png';

// IMPORTANT!
// Create Reliable First Image container that stays consistent throughout the site.

export const ProjectMainImageContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    background-image: url(${ProjectMainImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        background: #E5B13A;
        height: 100px;
    }
`;

export const ProjectMainImageContentContainer = styled.div`
    height: auto;
    width: auto;
`;

export const ProjectMainImageContentText = styled.h1`
    margin: 0px 0px 175px 0px;
    color: white;
    font-size: 80px;

    @media screen and (max-width: 600px) {
        color: #002145;
        font-size: 50px;
        margin: 0;
    }
`;

export const ProjectImageContainer = styled.div`
    margin: 0px;
    height: 50vw;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 600px) {
        height: 70vw;
        background-size: contain;
        width: 90%;
        margin: 0px 5vw;
    }
`;

export const ProjectImage = (props) => {
    return (
        <>
            <ProjectImageContainer style={{ backgroundImage: `url(${props.image})` }} />
        </>
    );
}

export const ProjectTextContainer = styled.div`
    text-align: center;
    padding: 2% 10%;
`;

export const LastProjectTextContainer = styled.div`
    text-align: center;
    padding: 2% 10%;

    @media screen and (max-width: 600px) {
        marginBottom: '10vw'
    }
`;

export const ProjectTextName = styled.h1`
    margin: 0;
`;

export const ProjectTextYear = styled.h1`
    margin: 0px 0px 30px 0px;
    font-size: 20px;
`;