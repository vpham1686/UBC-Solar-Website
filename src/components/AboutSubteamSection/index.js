import React from 'react';
import Electrical from '../../assets/images/Electrical.JPG';

import {
    AboutSubteamContainer,
    AboutMechanicalContainer,
    AboutElectricalContainer,
    AboutSoftwareContainer,
    AboutBusinessContainer,
    MechanicalTitleText,
    MechanicalText,
    MechanicalImage,
    ElectricalTitleText,
    ElectricalText,
    ElectricalImage,
    SoftwareTitleText,
    SoftwareText,
    SoftwareImage,
    BusinessTitleText,
    BusinessText,
    BusinessImage,
} from './AboutSubteamStyle';

const AboutSubteamSection = () => {
    return (
        <AboutSubteamContainer>
            <AboutMechanicalContainer>
                <MechanicalTitleText>
                    MECHANICAL TEAM
                </MechanicalTitleText>
                <MechanicalText>
                    THE SANDPAPER BROS
                </MechanicalText>
                <MechanicalImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Electrical}> 
                </img>
                </MechanicalImage>
            </AboutMechanicalContainer>
            
            
            <AboutElectricalContainer>
                <ElectricalTitleText>
                    ELECTRICAL TEAM
                </ElectricalTitleText>
                <ElectricalText>
                    THE BATTERY BROS
                </ElectricalText>
                <ElectricalImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Electrical}>
                </img>
                </ElectricalImage>
            </AboutElectricalContainer>
            
            
            <AboutSoftwareContainer>
                <SoftwareTitleText>
                    SOFTWARE TEAM
                </SoftwareTitleText>
                <SoftwareText>
                    THE TECH BROS
                </SoftwareText>
                <SoftwareImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Electrical}>
                </img>
                </SoftwareImage>
            </AboutSoftwareContainer>
            

            <AboutBusinessContainer>
                <BusinessTitleText>
                    BUSINESS TEAM
                </BusinessTitleText>
                <BusinessText>
                    THE NFT BROS
                </BusinessText>
                <BusinessImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Electrical}>
                </img>
                </BusinessImage>
            </AboutBusinessContainer>
        </AboutSubteamContainer>

        
    );
};

export default AboutSubteamSection