import React from 'react';
import {
    FooterContainer,
} from './FooterStyle';

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <div style={{ width: '95%', margin: '0px auto 25px auto', display: 'grid', gridTemplateAreas: '"logo button"', gridTemplateColumns: '50% 50%' }}>
                    <div style={{ gridArea: 'logo' }}>
                        <h1 style={{ margin: '0', fontSize: '50px'}}>UBC SOLAR</h1>
                        <p style={{ margin: '0', letterSpacing: '1.3px' }}><span style={{ color: '#E5B13A' }}>Solar Powered.</span> Student Driven.</p>
                    </div>
                    <div style={{ gridArea: 'button', position: 'relative' }}>
                        <div style={{border: '1px solid white', width: '160px', textAlign: 'center', position: 'absolute', bottom: '0px', right: '0px', backgroundColor: 'white'}}>
                        <h1 style={{ margin: '0', fontSize: '20px', color: '#002145', padding: '5px'}}>Subscribe</h1>
                        </div>
                    </div>
                </div>
                <hr style={{ border: '1px solid white', width: '95%' }} />
                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '1em 0px 0.5em 0px' }}>manager@ubcsolar.com</p>
                    <div>
                        <p style={{ display: 'inline' }}>icon1</p>
                        <p style={{ display: 'inline' }}>icon2</p>
                        <p style={{ display: 'inline' }}>icon3</p>
                        <p style={{ display: 'inline' }}>icon4</p>
                    </div>
                    <p style={{ fontSize: '10px', margin: '0' }}>@Copyright. All rights reserved.</p>
                </div>
            </FooterContainer>
        </>
    );
};

export default Footer