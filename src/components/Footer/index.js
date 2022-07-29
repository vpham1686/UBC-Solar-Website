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
    BottomFooterCopyright,
    Icon
} from './FooterStyle';

import FacebookLogo from '../../assets/FooterIcons/Facebook.svg';
import InstagramLogo from '../../assets/FooterIcons/Instagram.svg';
import LinkedInLogo from '../../assets/FooterIcons/LinkedIn.svg';
import YouTubeLogo from '../../assets/FooterIcons/YouTube.svg';

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
                <FooterLine />
                <BottomFooterContainer>
                    <BottomFooterEmail>manager@ubcsolar.com</BottomFooterEmail>
                    <Icon src={FacebookLogo} />
                    <Icon src={InstagramLogo} />
                    <Icon src={LinkedInLogo} />
                    <Icon src={YouTubeLogo} />
                    <BottomFooterCopyright>@Copyright. All rights reserved.</BottomFooterCopyright>
                </BottomFooterContainer>
            </FooterContainer>
        </>
    );
};

export default Footer