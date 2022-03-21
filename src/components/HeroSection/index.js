import React from 'react';
import Video from '../../videos/SolarClip.mp4';
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
} from './HeroStyle';

const HeroSection = () => {
    return (

        <HeroContainer className='hero'>
            <HeroBackground>
                <iframe id="player" 
                        allowfullscreen="1" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        title="YouTube video player" 
                        src="https://www.youtube.com/embed/oXTAcGbXSfc?autohide=1&autoplay=1&loop=1&playlist=oXTAcGbXSfc&controls=0&mute=1&enablejsapi=1&iv_load_policy=3&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&wmode=opaque&origin=https%3A%2F%2Fwww.ubcsolar.com&widgetid=1" 
                        className="background-video ready" 
                        width="100%" 
                        height="850" 
                        frameborder="0">
                </iframe>
            </HeroBackground>
        </HeroContainer>
    );
};

export default HeroSection