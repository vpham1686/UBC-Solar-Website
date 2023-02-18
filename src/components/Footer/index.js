import React from 'react';
import {
    FooterContainer,
    TopFooterContainer,
    LogoContainer,
    LogoHeader,
    LogoSlogan,
    Button,
    FooterLine,
    BottomFooterContainer,
    BottomFooterEmail,
    BottomFooterCopyright,
    Icon,
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
                    <Button link="http://eepurl.com/gnnmoH" buttonText="Subscribe"/>
                </TopFooterContainer>
                <FooterLine />
                <BottomFooterContainer>
                    <BottomFooterEmail>manager@ubcsolar.com</BottomFooterEmail>
                    <Icon link="https://www.facebook.com/UbcSolar/" icon={FacebookLogo} ></Icon>
                    <Icon link="https://www.instagram.com/ubcsolar/" icon={InstagramLogo} ></Icon>
                    <Icon link="https://www.linkedin.com/company/ubc-solar/" icon={LinkedInLogo} ></Icon>
                    <Icon link="https://www.youtube.com/channel/UCgPR5tgh2dBeRPH7jfFDpyA" icon={YouTubeLogo} ></Icon>
                    <BottomFooterCopyright>@Copyright. All rights reserved.</BottomFooterCopyright>
                </BottomFooterContainer>
            </FooterContainer>
        </>
    );
};

export default Footer