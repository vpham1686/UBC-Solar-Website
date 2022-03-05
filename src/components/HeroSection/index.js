import React from 'react';
import Video from '../../videos/SolarClip.mp4';
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
} from './HeroStyle';

const HeroSection = () => {
    return (

        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBackground>
        </HeroContainer>
    );
};

export default HeroSection