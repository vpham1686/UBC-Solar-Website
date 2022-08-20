import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import VisibilitySensor from 'react-visibility-sensor';

import TeamRoleHero from '../../assets/TeamRoleImages/TeamRoles.png';

import Footer from '../Footer';

//Team Leads
import Captain from '../../assets/TeamRoleImages/Captain.png';
import Mechanical from '../../assets/TeamRoleImages/MechanicalExecutive.png';
import Electrical from '../../assets/TeamRoleImages/ElectricalExecutive.png';

import Business from '../../assets/TeamRoleImages/BusinessTeamLead.png';
import Software from '../../assets/TeamRoleImages/SoftwareTeamLead.png';
import VehicleDynamics from '../../assets/TeamRoleImages/VehicleDynamicsTeamLead.png';
import PowerElectronics from '../../assets/TeamRoleImages/PowerElectronicsTeamLead.png';
import Chassis from '../../assets/TeamRoleImages/ChassisTeamLead.png';
import Battery1 from '../../assets/TeamRoleImages/BatteryTeamColead1.png';
import Battery2 from '../../assets/TeamRoleImages/BatteryTeamColead2.png';
import LowVoltageSystems from '../../assets/TeamRoleImages/LowVoltageSystemsTeamLead.png';
import Aeroshell from '../../assets/TeamRoleImages/AeroshellTeamLead.png';


import {
    TeamRoleContainer,
    HeroContainer,
    HeroPhoto,
    TeamLeadContainer,
    LeadProfileContainer,
    LeadImage,
    LeadDescriptionContainer,
    LeadDescription,
    LeadInfoContainer,
    LeadName,
    LeadPosition,
    TeamRolesMainImageContentContainer,
    TeamRolesMainImageContentText,
    TeamRolesMainImageContainer

} from './TeamRoleStyle';



const TeamRolePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    //Parallax
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //Animate In
    const [teamCaptain, setCap] = useState(true);
    function teamCaptainVisible(isVisible) {
        if (isVisible) {
            setCap(false);
        }
    };

    const [electrical, setElectrical] = useState(true);
    function electricalVisible(isVisible) {
        if (isVisible) {
            setElectrical(false);
        }
    };

    const [mechanical, setMechanical] = useState(true);
    function mechanicalVisible(isVisible) {
        if (isVisible) {
            setMechanical(false);
        }
    };

    const [business, setBusiness] = useState(true);
    function businessVisible(isVisible) {
        if (isVisible) {
            setBusiness(false);
        }
    };

    const [software, setSoftware] = useState(true);
    function softwareVisible(isVisible) {
        if (isVisible) {
            setSoftware(false);
        }
    };

    const [vehicleDynamics, setVehicleDynamics] = useState(true);
    function vehicleDynamicsVisible(isVisible) {
        if (isVisible) {
            setVehicleDynamics(false);
        }
    };

    const [powerElectronics, setPowerElectronics] = useState(true);
    function powerElectronicsVisible(isVisible) {
        if (isVisible) {
            setPowerElectronics(false);
        }
    };

    const [chassis, setChassis] = useState(true);
    function chassisVisible(isVisible) {
        if (isVisible) {
            setChassis(false);
        }
    };

    const [battery1, setBattery1] = useState(true);
    function battery1Visible(isVisible) {
        if (isVisible) {
            setBattery1(false);
        }
    };

    const [battery2, setBattery2] = useState(true);
    function battery2Visible(isVisible) {
        if (isVisible) {
            setBattery2(false);
        }
    };

    const [lowVoltageSystems, setLowVoltageSystems] = useState(true);
    function lowVoltageSystemsVisible(isVisible) {
        if (isVisible) {
            setLowVoltageSystems(false);
        }
    };

    const [aeroshell, setAeroshell] = useState(true);
    function aeroshellVisible(isVisible) {
        if (isVisible) {
            setAeroshell(false);
        }
    };


    return (
        <>
            <NavigationBar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <TeamRoleContainer>
                {/* <HeroContainer>
                        <HeroPhoto
                            src={ TeamRoleHero }>
                        </HeroPhoto>

                </HeroContainer> */}
                <TeamRolesMainImageContainer>
                    <TeamRolesMainImageContentContainer>
                        <TeamRolesMainImageContentText>Our Team</TeamRolesMainImageContentText>
                    </TeamRolesMainImageContentContainer>
                </TeamRolesMainImageContainer>
                <TeamLeadContainer>

                    <VisibilitySensor onChange={teamCaptainVisible} partialVisibility={true} active={teamCaptain} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Captain}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        Hi, I'm Blake! I'm in my fourth year of Engineering Physics and have been on UBC Solar since my second year of university.
                                        Being on the team has been the most valuable and fun part of my undergrad, and has been a true enrichment to my studies.
                                        <br></br><br></br>
                                        Solar is full of dedicated and hardworking members who dedicate massive amounts of time to build an awesome Solar Car!
                                        On the team, I'm in charge of making sure the team reaches its goals.
                                        I oversee technical directive, timeline, and budget to ensure the team has what it needs to succeed.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Blake Shular</LeadName>
                                    <LeadPosition>Captain</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={electricalVisible} partialVisibility={true} active={electrical} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Electrical}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I am a fourth-year ECE student who has a focus on firmware.
                                        I joined UBC Solar in my first year at UBC and have found it tremendously important for my career growth.
                                        <br></br><br></br>
                                        In my first year, I joined as a member of the software team.
                                        When I first joined, I worked on firmware projects including cruise control and regen braking for the car.
                                        I eventually started getting more involved with the electrical side of the team and worked on more general electrical projects.
                                        At the start of my second year, I became the electrical lead for the team.
                                        As the electrical lead, my role mainly focuses on supporting the electrical teams.
                                        I spend a lot of my time training new members and assisting in technical projects.
                                        Another aspect is working with sponsors to get the tools to build the car effectively.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Nic Ricci</LeadName>
                                    <LeadPosition>Electrical Executive</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={mechanicalVisible} partialVisibility={true} active={mechanical} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Mechanical}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I'm a fifth year Mechanical Engineering student specializing in Mechatronics.
                                        Solar has been a formative part of my university experience since I joined in 2019 and has taught me much about leadership, project management, and mechanical and automotive design.
                                        <br></br><br></br>
                                        The mechanical team consists of the aeroshell, chassis, battery, and vehicle dynamics teams.
                                        We work together to design and build all the physical components of the car so that it's safe, reliable, and performs well.
                                        The mechanical lead is mainly responsible for coordinating the efforts of the mechanical teams so that their systems integrate seamlessly and don't interfere with each other or any of the electrical teams.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Liam Foster</LeadName>
                                    <LeadPosition>Mechanical Executive</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={businessVisible} partialVisibility={true} active={business} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Business}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I am in my third year of engineering at UBC, specializing in environmental engineering.
                                        <br></br><br></br>
                                        I have always had a passion and saw value for integrating business and engineering together.
                                        Behind every great engineering team are the finances to back up the cutting edge innovation.
                                        The business team works on website software, team finances, sponsorship relations, social media management, and community engagement.
                                        The business team is vital to the team's success, as we need to finance solar electric cars costing ~$150,000!
                                        <br></br><br></br>
                                        As the business team lead, I handle some team logistics and manage the business team projects.
                                        UBC Solar has changed my life as I have learnt technical skills, management techniques, and made many lifelong friends on the design team.

                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Victor Pham</LeadName>
                                    <LeadPosition>Business Team Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={softwareVisible} partialVisibility={true} active={software} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Software}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        Ever since my first Javascript program back in 2015, I've loved the idea of using software to solve difficult problems.
                                        <br></br><br></br>
                                        Having been a member since 2019, I can tell you that being part of the software team here at Solar means working on projects that involve a vast breadth of engineering and computing concepts far outside what is taught in the classroom in an environment that strongly encourages creativity and innovation.
                                        Our work not only involves developing software that goes straight into the safety-critical control systems in our car but also software that extracts runtime information from our car and builds data-driven strategies from it.
                                        <br></br><br></br>
                                        Outside of Solar, you'll usually find me perfecting my jump-shot or losing skin at my local bouldering gym.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Mihir Nimgade</LeadName>
                                    <LeadPosition>Software Team Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={vehicleDynamicsVisible} partialVisibility={true} active={vehicleDynamics} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={VehicleDynamics}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I am a third year Mechanical Engineering student specializing in Mechatronics.
                                        I joined UBC Solar in my first year and has since found the experience to be invaluable not only in my studies but also at the workplace!
                                        <br></br><br></br>
                                        The Vehicle Dynamics sub-team is responsible for the handling performance of the car.
                                        Our members work hard to optimize the suspension, steering, wheels, and brake systems, ensuring the vehicle is safe to drive at speed!
                                        <br></br><br></br>
                                        In my spare time, you can find me biking and hiking the mountains in Coquitlam or working on developing my own DIY ebike.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Sina Allen</LeadName>
                                    <LeadPosition>Vehicle Dynamics Team Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={powerElectronicsVisible} partialVisibility={true} active={powerElectronics} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={PowerElectronics}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I am a fourth year electrical engineering student, and the power electronics co-lead.
                                        I have been in UBC Solar since my first year, starting out in Vehicle Dynamics (SSWAB).
                                        <br></br><br></br>
                                        Power electronics is primarily in charge of the motor and solar arrays of the car.
                                        This year, we will be working on implementing a new set of arrays and a new motor.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Ardavan Pourkeramati</LeadName>
                                    <LeadPosition>Power Electronics Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={chassisVisible} partialVisibility={true} active={chassis} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Chassis}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I can say that my knowledge with 3 years into mechanical engineering and joining the team in 2019 my engineering skills that the fewer moving parts, the better the chassis FEA.
                                        Our work does not only involve the structural integrity of the car but also the seamless integration of all the components of the car such as the aeroshell and steering system of the car.
                                        If I'm not working on the car I'm probably designing the next crackhead robot from my brain or in the gym trying to be a gorilla.
                                        <br></br><br></br>
                                        As the chassis subteam lead, I work on the core structure of the solar car, use FEA to ensure its structural integrity and produce a high factor of safety.
                                        I also understand other components of the car, such as the aeroshell and steering system, and seamlessly integrate these with the chassis.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Mikey Sy</LeadName>
                                    <LeadPosition>Chassis Team Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={battery1Visible} partialVisibility={true} active={battery1} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Battery1}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        Hey! I am Serhii.
                                        I am an engineering physics student and a mechanical co-lead of the Battery team.
                                        I have joined UBC Solar in 2020 as a chassis member.
                                        Since then I have transitioned to low voltage systems and in December of 2021 I became a battery co-lead.
                                        Throughout my journey I have learned a lot of technical and communication skills that are crucial for my engineering career.
                                        <br></br><br></br>
                                        On the Battery Mech subteam we design the most efficient battery pack for our solar race cars and ensure its safe and reliable.
                                        Our team members gain a lot of experience in computer aided design (CAD) and mechanical-electrical intregration.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Serhii Rubtsov</LeadName>
                                    <LeadPosition>Battery Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={battery2Visible} partialVisibility={true} active={battery2} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Battery2}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I am a third year Engineering Physics student at UBC.
                                        I joined UBC Solar's Battery sub-team in my first year at university and have learned many technical and leadership skills in my journey from member to co-lead!
                                        <br></br><br></br>
                                        The Battery sub-team is responsible for the safe operation of the car's lithium-ion battery pack.
                                        Our members ensure our battery can charge safely, and is at an optimal temperature, state of charge, and voltage to keep the rest of the car's electrical systems - from turn signals to main motor - running smoothly.
                                        Our team members come from diverse technical backgrounds, and tackle projects such as fault-detection firmware, current-sensing PCB design, and mechanical integration of the battery pack with the rest of the car.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Mischa Johal</LeadName>
                                    <LeadPosition>Battery Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={lowVoltageSystemsVisible} partialVisibility={true} active={lowVoltageSystems} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={LowVoltageSystems}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I am a second year engineering student specialising in computer engineering and have been a part of UBC Solar for about two years now.
                                        Throughout my time here, the experience has been both rewarding and enjoyable as I learn and discover new things.
                                        <br></br><br></br>
                                        As the name implies, the low voltage systems team is responsible for the development and application of low voltage systems for our solar car.
                                        Namely the driver interface, vehicle manoeuvring, lights, navigation, communication and data logging.
                                        Our team primarily designs, assembles and tests boards, as well as the wiring of these modules.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Anthony Vu</LeadName>
                                    <LeadPosition>Low Voltage Systems Team Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={aeroshellVisible} partialVisibility={true} active={aeroshell} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Aeroshell}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                        I am a fourth year Engineering Physics student at UBC.
                                        I joined UBC Solar in my first year and have learned more from it than I could have ever imagined.
                                        <br></br><br></br>
                                        The aeroshell sub-team is responsible for the entire exterior of the car, from the carbon fibre body to the custom 3D-printed light mounts.
                                        We ensure that the car is as aerodynamic as possible to increase efficiency and allow us to drive faster and farther.
                                        <br></br><br></br>
                                        In my spare time, I enjoy playing volleyball and soccer with my friends.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Noah Dolter</LeadName>
                                    <LeadPosition>Aeroshell Team Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>
                </TeamLeadContainer>
            </TeamRoleContainer>

            <Footer />
        </>
    );
};

export default TeamRolePage