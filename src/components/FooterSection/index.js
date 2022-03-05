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
                    <img height='40px' width='40px'
                        src={Instagram} >
                    </img>
                </FooterInstagram>
                <FooterFacebook>
                    <img height='40px' width='40px'
                        src={Facebook} >
                    </img>
                </FooterFacebook>
                <FooterLinkedIn>
                    <img height='40px' width='40px'
                        src={LinkedIn} >
                    </img>
                </FooterLinkedIn>
                <FooterYouTube>
                    <img height='40px' width='40px'
                        src={YouTube} >
                    </img>
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
