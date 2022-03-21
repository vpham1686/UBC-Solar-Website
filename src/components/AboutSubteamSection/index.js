import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import Electrical from '../../assets/images/Electrical.jpg';
import Mechanical from '../../assets/images/Mechanical.jpg';
import Software from '../../assets/images/Software.jpg';
import Business from '../../assets/images/Business.jpg';

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
    FadeInLeftDiv,
    FadeInRightDiv,
} from './AboutSubteamStyle';

const AboutSubteamSection = () => {
    return (
        <AboutSubteamContainer>
            <FadeInLeftDiv>
            <AboutMechanicalContainer>
                <MechanicalTitleText>
                    MECHANICAL TEAM
                </MechanicalTitleText>
                <MechanicalText>
                The mechanical division consists of four sub-teams:
                <br></br>
                Aeroshell, chassis, battery mechanics, and SSWAB (Suspension, Steering, Wheels & Braking)
                <br></br>
                <br></br>
                They are responsible for designing the structural and aerodynamic components of the car, from first sketches to fabrication.
                </MechanicalText>
                <MechanicalImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Mechanical}> 
                </img>
                </MechanicalImage>
            </AboutMechanicalContainer>
            </FadeInLeftDiv>
            
            
            <FadeInRightDiv>
            <AboutElectricalContainer>
                <ElectricalTitleText>
                    ELECTRICAL TEAM
                </ElectricalTitleText>
                <ElectricalText>
                The electrical division consists of three sub-teams: 
                <br></br>
                Battery management systems, low voltage systems, and power electronics. 
                <br></br>
                <br></br>
                They focus on the design of the car's battery systems and solar panel installation.

                </ElectricalText>
                <ElectricalImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Electrical}>
                </img>
                </ElectricalImage>
            </AboutElectricalContainer>
            </FadeInRightDiv>

            
            <FadeInLeftDiv>
            <AboutSoftwareContainer>
                <SoftwareTitleText>
                    SOFTWARE TEAM
                </SoftwareTitleText>
                <SoftwareText>
                    The software division consists of categories ranging from:
                    <br></br>
                    Embedded, simulation, and telemetry.
                    <br></br>
                    <br></br>
                    They are in charge of calculating the car's performance in certain conditions and integrating the systems with mechanical components.
                </SoftwareText>
                <SoftwareImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Software}>
                </img>
                </SoftwareImage>
            </AboutSoftwareContainer>
            </FadeInLeftDiv>


            <FadeInRightDiv>
            <AboutBusinessContainer>
                <BusinessTitleText>
                    BUSINESS TEAM
                </BusinessTitleText>
                <BusinessText>
                    The business division consists of categories such as:
                    <br></br>
                    Outreach, events, and marketing.
                    <br></br>
                    <br></br>
                    They are in charge of working closely with team leads and company representatives to strengthen UBC Solar's financial stability and team branding.
                </BusinessText>
                <BusinessImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Business}>
                </img>
                </BusinessImage>
            </AboutBusinessContainer>
            </FadeInRightDiv>
        </AboutSubteamContainer>


        
    );
};

export default AboutSubteamSection