import React from 'react';
import {
    FooterContainer,
    TopFooterContainer,
    LogoContainer,
    LogoHeader,
    LogoSlogan,
    ButtonContainer,
    Button,
    ButtonText,
    FooterLine,
    BottomFooterContainer,
    BottomFooterEmail,
    BottomFooterCopyright
} from './FooterStyle';

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <TopFooterContainer>
                    <LogoContainer >
                        <LogoHeader >UBC SOLAR</LogoHeader>
                        <LogoSlogan ><span style={{ color: '#E5B13A' }}>Solar Powered.</span> Student Driven.</LogoSlogan>
                    </LogoContainer>
                    <ButtonContainer>
                        <Button>
                            <ButtonText>Subscribe</ButtonText>
                        </Button>
                    </ButtonContainer>
                </TopFooterContainer>
                <FooterLine/>
                <BottomFooterContainer>
                    <BottomFooterEmail>manager@ubcsolar.com</BottomFooterEmail>
                    <div>
                        <p style={{ display: 'inline' }}>icon1</p>
                        <p style={{ display: 'inline' }}>icon2</p>
                        <p style={{ display: 'inline' }}>icon3</p>
                        <p style={{ display: 'inline' }}>icon4</p>
                    </div>
                    <BottomFooterCopyright>@Copyright. All rights reserved.</BottomFooterCopyright>
                </BottomFooterContainer>
            </FooterContainer>
        </>
    );
};

export default Footer