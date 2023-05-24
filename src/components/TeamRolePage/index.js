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

import Business1 from '../../assets/TeamRoleImages/BusinessTeamCoLead1.png';
import Business2 from '../../assets/TeamRoleImages/BusinessTeamCoLead2.png';
import Software from '../../assets/TeamRoleImages/SoftwareTeamLead.png';
import Simulation from '../../assets/TeamRoleImages/SimulationTeamLead.png';
import VehicleDynamics from '../../assets/TeamRoleImages/VehicleDynamicsTeamLead.png';
import VehicleDynamics2 from '../../assets/TeamRoleImages/VehicleDynamicsTeamLead2.png';
import PowerElectronics from '../../assets/TeamRoleImages/PowerElectronicsTeamLead.png';
import Chassis from '../../assets/TeamRoleImages/ChassisTeamLead.png';
import Chassis2 from '../../assets/TeamRoleImages/ChassisTeamLead2.png';
import BatteryElec from '../../assets/TeamRoleImages/BatteryElecTeamLead.png';
import BatteryMech1 from '../../assets/TeamRoleImages/BatteryMechTeamLead1.png';
import BatteryMech2 from '../../assets/TeamRoleImages/BatteryMechTeamLead2.png';
import LowVoltageSystems from '../../assets/TeamRoleImages/LowVoltageSystemsTeamLead2.png';
import Aeroshell from '../../assets/TeamRoleImages/AeroshellTeamLead.png';
import Aeroshell2 from '../../assets/TeamRoleImages/AeroshellTeamLead2.png';



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

    const [business1, setBusiness1] = useState(true);
    function business1Visible(isVisible) {
        if (isVisible) {
            setBusiness1(false);
        }
    };

    const [business2, setBusiness2] = useState(true);
    function business2Visible(isVisible) {
        if (isVisible) {
            setBusiness2(false);
        }
    };

    const [software, setSoftware] = useState(true);
    function softwareVisible(isVisible) {
        if (isVisible) {
            setSoftware(false);
        }
    };

    const [simulation, setSimulation] = useState(true);
    function simulationVisible(isVisible) {
        if (isVisible) {
            setSimulation(false);
        }
    };

    const [vehicleDynamics, setVehicleDynamics] = useState(true);
    function vehicleDynamicsVisible(isVisible) {
        if (isVisible) {
            setVehicleDynamics(false);
        }
    };

    const [vehicleDynamics2, setVehicleDynamics2] = useState(true);
    function vehicleDynamics2Visible(isVisible) {
        if (isVisible) {
            setVehicleDynamics2(false);
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

    const [chassis2, setChassis2] = useState(true);
    function chassis2Visible(isVisible) {
        if (isVisible) {
            setChassis2(false);
        }
    };

    const [batteryElec1, setBatteryElec1] = useState(true);
    function batteryElec1Visible(isVisible) {
        if (isVisible) {
            setBatteryElec1(false);
        }
    };

    const [batteryElec2, setBatteryElec2] = useState(true);
    function batteryElec2Visible(isVisible) {
        if (isVisible) {
            setBatteryElec2(false);
        }
    };

    const [batteryMech1, setBatteryMech1] = useState(true);
    function batteryMech1Visible(isVisible) {
        if (isVisible) {
            setBatteryMech1(false);
        }
    };

    const [batteryMech2, setBatteryMech2] = useState(true);
    function batteryMech2Visible(isVisible) {
        if (isVisible) {
            setBatteryMech2(false);
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

    const [aeroshell2, setAeroshell2] = useState(true);
    function aeroshell2Visible(isVisible) {
        if (isVisible) {
            setAeroshell2(false);
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
                                    Hey, I'm Serhii! 
                                    I'm an Engineering Physics student and I have been on the team since September of 2020. 
                                    During this time I have been able to work on mechanical and electrical projects which are crucial for my future career. 
                                    UBC Solar helps me solidify the knowldege I gain at the university and apply it in a fun and meaningful way.
                                    <br></br><br></br>
                                    Solar has very hardworking and dedicated members who together build a race solar car from scratch! 
                                    It is my pleasure and duty to make sure that the team has all the resources we need to succed. 
                                    As a captain, I oversee technical directive, timeline, and budget to ensure that our members are able to bring their amazing ideas to life.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Serhii Rubtsov</LeadName>
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
                                    I am a third year Engineering Physics student at UBC. I joined UBC Solar's Battery sub-team in my first year at university and have learned many technical and leadership skills in my journey from member to Electrical Lead!
                                    <br></br><br></br>
                                    I support UBC Solar's electrical teams with technical design advice and project managment, and work closley with the mechanical executive and team captain to ensure that core deadlines are set and met, ensuring our car meets key milstones leading up to competition. 
                                    <br></br><br></br>
                                    Overall, I am dedicated to building a friendly and motivating techincal environment at UBC Solar, working with everyone from our newest recruits to UBC Solar alumnus. 
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Mischa Johal</LeadName>
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

                    {/* <VisibilitySensor onChange={business1Visible} partialVisibility={true} active={business1} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Business1}></LeadImage>
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
                                    <LeadPosition>Business Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor> */}

                    <VisibilitySensor onChange={business2Visible} partialVisibility={true} active={business2} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Business2}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    I'm currently in my third year at UBC Sauder specializing in Marketing. 
                                    <br></br><br></br>
                                    I love being able to optimize and improve projects that allow me to use my creativity. 
                                    UBC Solar has been a great way for me to do that. 
                                    <br></br><br></br>
                                    I joined in my second year and am appreciative of how Solar has helped me grow my skills in terms of leadership, management, and as well as teamwork. 
                                    I now know the behind the scenes of how engineering and business integrates and balances together and am so excited for what the business team can accomplish together!
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Julia Zhou</LeadName>
                                    <LeadPosition>Business Team Co-lead</LeadPosition>
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
                                    I am a second year computer engineering student who has a focus on firmware and embedded systems. 
                                    <br></br><br></br>
                                    Joining UBC Solar transformed my career growth and personal development. 
                                    I can't express enough that you get out what you put in. 
                                    Taking initiative at UBC Solar has opened so many opportunities and taught me technical skills that I would never be able to learn from school.
                                    <br></br><br></br>
                                    The software subteam designs, implements, and tests the safety-critical control systems of our car. 
                                    We also work on a simulation and telemetry network that extracts runtime information from our car and builds data-driven strategies from it.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Matthew Chow</LeadName>
                                    <LeadPosition>Software Team Lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={simulationVisible} partialVisibility={true} active={simulation} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Simulation}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    Hi! I'm a fourth year Engineering Physics Student and the simulation team lead at UBC Solar. The ultimate goal of the team is to develop a real time race strategy software that the team can use for optimal driving to maximize success at competition.
                                    <br></br><br></br>
                                    Developing models of different sub-systems of the car for the simulation, I learnt a lot about the different electro-mechanical systems that form the car. I have also gained a lot of software development skills and best practices that I have applied at my work placements and will continue to use for the rest of my career.
                                    <br></br><br></br>
                                    There's is always an exciting new challenge at Solar and a group of passionate friends who are determined to build a great solar powered race car.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Renu Rajamagesh</LeadName>
                                    <LeadPosition>Simulation Team Lead</LeadPosition>
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
                                    <LeadPosition>Vehicle Dynamics Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={vehicleDynamics2Visible} partialVisibility={true} active={vehicleDynamics2} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={VehicleDynamics2}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    I am a fourth year Mechanical Engineering student in the general engineering stream and a co-lead of the Vehicle Dynamics sub-team.
                                    <br></br><br></br>
                                    At Vehicle Dynamics, our team works to optimize the behaviour and manufacturability of the suspension, steering, wheels, and braking apects of the car.
                                    <br></br><br></br>
                                    In my spare time, you can find me playing soccer, rock climbing, mountain biking, splitboarding, or most other outdoor activities.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Sam Bonnell</LeadName>
                                    <LeadPosition>Vehicle Dynamics Co-lead</LeadPosition>
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
                                    <LeadPosition>Aeroshell Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={aeroshell2Visible} partialVisibility={true} active={aeroshell2} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Aeroshell2}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    I am a third-year Mechanical Engineering student at UBC. I joined Solar in my second year, and it has been an incredibly fun and rewarding experience. Being on Solar teaches you so many technical skills that you wouldn't otherwise learn in class.
                                    <br></br><br></br>
                                    My favourite part of the aeroshell subteam is the hands-on work that we do. We build the entire carbon fibre exterior of the car using composite manufacturing processes. We also do a lot of SolidWorks modelling and analyze the aerodynamics of the aeroshell with CFD. It's a great mix of design and manufacturing work.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Claire Kylheku</LeadName>
                                    <LeadPosition>Aeroshell Team Co-lead</LeadPosition>
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
                                        If I'm not working on the car I'm probably designing robots or in the gym.
                                        <br></br><br></br>
                                        As the chassis subteam lead, I work on the core structure of the solar car, use FEA to ensure its structural integrity and produce a high factor of safety.
                                        I also understand other components of the car, such as the aeroshell and steering system, and seamlessly integrate these with the chassis.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Mikey Sy</LeadName>
                                    <LeadPosition>Chassis Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>
                    
                    <VisibilitySensor onChange={chassis2Visible} partialVisibility={true} active={chassis2} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={Chassis2}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    I'm a third year integrated engineering student, majoring in mechanical engineering and minoring in electrical engineering.
                                    <br></br><br></br>
                                    I love working on the UBC Solar team because it's a great way to take all the theoretical content you learn about in lectures, and apply it in a way that is fun, challenging and rewarding.
                                    <br></br><br></br>
                                    What I like about working on the chassis subteam is how often you get to collaborate with other subteams. Working to integrate their components into the solar car,  you gain a great understanding of how each individual part functions, and an appreciation for how they all work together. 
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Liam Andrew</LeadName>
                                    <LeadPosition>Chassis Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={batteryMech1Visible} partialVisibility={true} active={batteryMech1} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={BatteryMech1}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    I am a second year Mechanical Engineering student and a co-lead of the Battery Mechanical team (BATM).
                                    <br></br><br></br>
                                    As a part of the BATM team you will learn about battery pack design and manufacturing.
                                    You will gain experience designing with programs like SolidWorks and using different manufacturing processes such as composite formation, and 3D printing. BATM develops the pack so that the electrical components can be integrated seamlessly into the design.
                                    <br></br><br></br>
                                    My experience with UBC Solar has allowed me to apply concepts learned in class in hands-on ways!
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Julie Ibrahimova</LeadName>
                                    <LeadPosition>Battery Mechanical Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={batteryMech2Visible} partialVisibility={true} active={batteryMech2} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={BatteryMech2}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    I'm a second year Engineering Physics student and one of the co-leads on the Battery team. 
                                    <br></br><br></br>
                                    I joined Solar to experience engineering outside of the classroom and it has been an amazing experience so far. 
                                    Since joining the Battery team, I have learned much about both the mechanical and electrical engineering that goes into the battery. 
                                    The intersection between these two very different fields of engineering in which the Battery team operates is truly special and my time here at Solar has been nothing short of amazing.
                                    On the Battery team, members can expect to gain a wide variety of skills from using SolidWorks and Altium to design pieces of the battery to developing practical skills in manufacturing the battery like soldering and creating composite layups.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Justin Tandjung</LeadName>
                                    <LeadPosition>Battery Mechanical Team Co-lead</LeadPosition>
                                </LeadInfoContainer>
                            </LeadProfileContainer>
                        }
                    </VisibilitySensor>

                    <VisibilitySensor onChange={batteryElec1Visible} partialVisibility={true} active={batteryElec1} offset={{ bottom: 100 }}>
                        {({ isVisible }) =>
                            <LeadProfileContainer style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                                <LeadImage src={BatteryElec}></LeadImage>
                                <LeadDescriptionContainer>
                                    <LeadDescription>
                                    I am a third year Mechanical Engineering student at UBC and a lead on the Battery Electrical Team. I joined the chassis sub-team during my first year with UBC Solar and transitioned over to BMS to learn more about electrical and firmware design. My experience on the BMS team has been really valuable and I continue to learn more with every new project.
                                    <br></br><br></br>
                                    The Battery sub-team is responsible for the safe operation of the car's lithium-ion battery pack. We make sure that the battery can charge safely, and is at an optimal temperature, state of charge, and voltage to keep the rest of the car's electrical systems running smoothly. As a BMS team member, we get to work on various firmware and PCB design projects and also perform a lot of testing to make sure our code and circuit boards are functioning as intended.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Bhavita Jindal</LeadName>
                                    <LeadPosition>Battery Electrical Team Lead</LeadPosition>
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
                                    I'm a second year engineering physics student hoping to specialize in electrical engineering. I have been on the solar team for almost two years. 
                                    The thing I have loved most about being on UBC Solar has been the positive learning environment that is fostered on the team. 
                                    I have learned so much from my teammates and from the variety of projects that I have been a part of. 
                                    I cannot wait to see what future projects hold in store for me!
                                        <br></br><br></br>
                                        The low voltage subteam is in charge of all systems in the car that operate at a low voltage (typically between 3.3 - 12V). 
                                        Our projects usually center around driver interfaces and data acquisition (speed of the car, location via GPS etc…). 
                                        You will see the low voltage team members working on boards such as the main control board, the dashboard, the steering wheel and the telemetry board.
                                    </LeadDescription>
                                </LeadDescriptionContainer>
                                <LeadInfoContainer>
                                    <LeadName>Catherine Blouin</LeadName>
                                    <LeadPosition>Low Voltage Systems Team Lead</LeadPosition>
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