import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import Electrical from '../../assets/images/Electrical.jpg';
import Mechanical from '../../assets/images/Mechanical.jpg';
import Software from '../../assets/images/Software.jpg';

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
    MechanicalCounter,
    ElectricalCounter,
    SoftwareCounter,
    BusinessCounter
} from './AboutSubteamStyle';

const AboutSubteamSection = () => {
    return (
        <AboutSubteamContainer>
            <AboutMechanicalContainer>
                <MechanicalTitleText>
                    MECHANICAL TEAM
                    <MechanicalCounter>
                        Member Count:&nbsp;
                        
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 50 }}>
                                    {isVisible ? <CountUp end={70} duration={3} /> : null}
                                </div>
                                )}
                            </VisibilitySensor>
                        </MechanicalCounter>
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
            
            
            <AboutElectricalContainer>
                <ElectricalTitleText>
                    ELECTRICAL TEAM
                    <ElectricalCounter>
                        Member Count:&nbsp;
                        
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 50 }}>
                                    {isVisible ? <CountUp end={70} duration={3} /> : null}
                                </div>
                                )}
                            </VisibilitySensor>
                        </ElectricalCounter>
                </ElectricalTitleText>
                <ElectricalText>
                The electrical division consists of four sub-teams: 
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
            
            
            <AboutSoftwareContainer>
                <SoftwareTitleText>
                    SOFTWARE TEAM
                    <SoftwareCounter>
                        Member Count:&nbsp;
                        
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 50 }}>
                                    {isVisible ? <CountUp end={70} duration={3} /> : null}
                                </div>
                                )}
                            </VisibilitySensor>
                        </SoftwareCounter>
                </SoftwareTitleText>
                <SoftwareText>
                    The software division consists of categories ranging from:
                    <br></br>
                    Simulation, X, Y, and W.
                    <br></br>
                    <br></br>
                    They are in charge
                </SoftwareText>
                <SoftwareImage>
                <img height='75%' width='75%' style={{borderRadius: '10px'}}
                        src={Software}>
                </img>
                </SoftwareImage>
            </AboutSoftwareContainer>
            

            <AboutBusinessContainer>
                <BusinessTitleText>
                    BUSINESS TEAM
                    <BusinessCounter>
                        Member Count:&nbsp;
                        
                            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 50 }}>
                                    {isVisible ? <CountUp end={8} duration={0.5} /> : null}
                                </div>
                                )}
                            </VisibilitySensor>
                        </BusinessCounter>
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
                        src={Electrical}>
                </img>
                </BusinessImage>
            </AboutBusinessContainer>
        </AboutSubteamContainer>

        
    );
};

export default AboutSubteamSection