import React from 'react';
import Instagram from '../../assets/images/Instagram.png';
import Facebook from '../../assets/images/Facebook.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import YouTube from '../../assets/images/YouTube.png';
import {
    FooterContainer,
    FooterTitle,
    FooterSubtitle,
    FooterSocialsWrapper,
    FooterSocials,
    FooterInstagram,
    FooterFacebook,
    FooterLinkedIn,
    FooterYouTube,
    FooterContactWrapper,
    FooterContactUs,
    FooterContactEmail,
} from './FooterSectionStyle';

const FooterSection = () => {
    return (
        <FooterContainer>
            <FooterSocialsWrapper>
                <FooterTitle>
                    UBC SOLAR
                </FooterTitle>
                <FooterSubtitle>
                    Solar Powered. Student Driven.
                </FooterSubtitle>
                <FooterSocials>
                <FooterInstagram>
                    <a href='https://www.instagram.com/ubcsolar/' target="_blank" rel="noopener noreferrer">
                    <img height='40px' width='40px'
                        src={Instagram} >
                    </img>
                    </a>
                </FooterInstagram>
                <FooterFacebook>
                    <a href='https://www.facebook.com/UbcSolar/' target="_blank" rel="noopener noreferrer">
                    <img height='40px' width='40px'
                        src={Facebook} >
                    </img>
                    </a>
                </FooterFacebook>
                <FooterLinkedIn>
                    <a href='https://www.linkedin.com/company/ubc-solar/' target="_blank" rel="noopener noreferrer">
                    <img height='40px' width='40px'
                        src={LinkedIn} >
                    </img>
                    </a>
                </FooterLinkedIn>
                <FooterYouTube>
                    <a href='https://www.youtube.com/channel/UCgPR5tgh2dBeRPH7jfFDpyA' target="_blank" rel="noopener noreferrer">
                    <img height='40px' width='40px'
                        src={YouTube} >
                    </img>
                    </a>
                </FooterYouTube>
                </FooterSocials>
            </FooterSocialsWrapper>

            <FooterContactWrapper>
                <FooterContactUs>
                    Contact Us
                </FooterContactUs>
                <FooterContactEmail>
                    manager@ubcsolar.com
                </FooterContactEmail>
            </FooterContactWrapper>
        </FooterContainer>
    );
};

export default FooterSection
