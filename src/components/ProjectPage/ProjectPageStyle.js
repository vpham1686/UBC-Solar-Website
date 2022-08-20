import styled from 'styled-components';
import ProjectMainImage from '../../assets/ProjectPageImages/ProjectPageMainImage.png';
import React from 'react';

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
    margin-bottom: 10vh;

    @media screen and (max-width: 600px) {
        background: #E5B13A;
        height: 100px;
        margin-bottom: 0;
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
    height: calc(100vh - 60px);
    width: 100%;
    background-size: contain;
    object-fit: contain;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    @media screen and (max-width: 1000px) {
        height: 70vw;
        background-size: contain;
        width: 90%;
        margin: auto;
    }
`;

export const ProjectImageSpecs = styled.img`
    margin: auto auto 100px auto;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    background-size: contain;
    transition: 1.5s;
    transition-timing-function: cubic-bezier(1,-0.12,.83,.67);

    @media screen and (max-width: 1900px) {
        height: 70vw;
        background-size: contain;
        width: 90%;
        margin: auto;
    }
`;

export const ProjectImage = (props) => {
    return (
        <>
            <ProjectImageContainer style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                <FadeInSection image={props.image}></FadeInSection>
            </ProjectImageContainer>
        </>
    );
}

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <ProjectImageSpecs className={`fade-in-section`} style={{ opacity: `${isVisible ? '1' : '0'}` }} ref={domRef} src={props.image} />
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