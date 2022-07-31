import styled from 'styled-components';
import ProjectMainImage from '../../assets/ProjectPageImages/ProjectPageMainImage.png';
export const ProjectMainImageContainer = styled.div`
    height: 690px;
    width: 100%;
    background-image: url(${ProjectMainImage});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProjectMainImageContentContainer = styled.div`
    height: auto;
    width: auto;
`;

export const ProjectMainImageContentText = styled.h1`
    margin: 0px 0px 100px 0px;
    color: white;
    text-shadow: 3px 3px #002145;
    font-size: 80px;
`;

export const ProjectImageContainer = styled.div`
    height: 700px;
    width: 100%;
    background-size: cover;
`;

export const ProjectImage = (props) => {
    return (
        <>
            <ProjectImageContainer style={{ backgroundImage: `url(${props.image})` }} />
        </>
    );
}

// export const ProjectImage = styled.img`
//     height: 90%;
//     width: 100%;
//     object-fit: cover;
//     display: block;
// `;

export const ProjectTextContainer = styled.div`
    text-align: center;
    padding: 10% 20%;
`;
