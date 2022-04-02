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
                Our mechanical division works hard to design all of the structural and aerodynamic components of our vehicles. 
                Through use of softwares such as SolidWorks and Ansys, they design critical components of our vehicle such as the chassis, aeroshell, and suspension components. 
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
                Our electrical division works on anything that has power on the car which consists of the battery management systems, low voltage systems, and power electronics teams. 
                They work on projects from displaying important information to the driver using screens to building custom battery packs for the car. 
                They also build radio and cellular communication so that the ground team can review all the data from the car while it drives. 
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
                Our software division is broken down into simulating the characteristics of our solar car, telemetry, and writing embedded firmware for the various microcontrollers in the vehicle. 
                They play a crucial role in ensuring responsive driver control of the car, as well as determining the best race plan heading into competition.
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
                Our business team consists of outreach, events, and marketing components. 
                They are in charge of working closely with team leads, company representatives, and industry leaders to strengthen UBC Solar’s financial support, reputation, team branding, and maintaining the UBC Solar website.
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