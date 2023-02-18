import styled from 'styled-components';

export const FooterContainer = styled.div`
    padding-top: 20px;
    color: white;
    height: 255px;
    width: 100%;
    background-color: #002145;

    @media screen and (max-width: 600px) {
        height: 340px;
        padding: 0px;
        overflow-y: hidden;
        width: auto;
    }
`;

export const TopFooterContainer = styled.div`
    width: 95%;
    margin: 0px auto 25px auto;
    display: grid;
    grid-template-areas: "logo button";
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 600px) {
        grid-template-areas: 
        "logo"
        "button";
        grid-template-rows: 100px 60px;
        grid-template-columns: none;
    }
`;

export const LogoContainer = styled.div`
    grid-area: logo;
    
    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const LogoHeader = styled.h1`
    margin: 0;
    font-size: 50px;
`;

export const LogoSlogan = styled.p`
    margin: 0;
    letter-spacing: 1px;
`;

export const ButtonContainer = styled.div`
    grid-area: button;
    position: relative;

    @media screen and (max-width: 600px) {
        margin-top: 15px;
    }
`;

export const ButtonChild = styled.div`
    border: 1px solid white;
    width: 160px;
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: white;

    @media screen and (max-width: 600px) {
        bottom: auto;
        right: auto;
        position: static;
        margin: auto;
    }
`;

export const Button = (props) => {
    return (
        <ButtonContainer>
            <Link href={props.link} target="blank">
                <ButtonChild>
                    <ButtonText>{props.buttonText}</ButtonText>
                </ButtonChild>
            </Link>
        </ButtonContainer>
    );
}

export const ButtonText = styled.h1`
    margin: 0;
    font-size: 20px;
    color: #002145;
    padding: 5px;
`;

export const FooterLine = styled.hr`
    border: 0.5px solid white;
    width: 95%;
`;

export const BottomFooterContainer = styled.div`
    text-align: center;
`;

export const BottomFooterEmail = styled.p`
    margin: 1em 0px 0.5em 0px;
`;

export const IconImage = styled.img`
    height: 35px;
    margin: 0px 5px 0px 5px;
`;

export const BottomFooterCopyright = styled.p`
    margin: 0;
    font-size: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const Icon = (props) => {
    return (
        <Link href={props.link} target="blank">
            <IconImage src={props.icon} />
        </Link>
    );
}








