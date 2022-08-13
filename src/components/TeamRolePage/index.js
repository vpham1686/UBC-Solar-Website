import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import { FaAngleDown } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from "react-scroll-parallax";

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


import {
    TeamRoleContainer,
    HeroContainer,
    HeroPhoto,
    ArrowLevitate,
    Anchor,
    TeamLeadContainer,
    LeadProfileContainer,
    LeadImage,
    LeadDescriptionContainer,
    LeadDescription,
    LeadInfoContainer,
    LeadName,
    LeadPosition,

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

    return (
        <>
        <NavigationBar isOpen={isOpen }toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />


            <TeamRoleContainer>
                <HeroContainer>
                        <HeroPhoto
                            src={ TeamRoleHero }>
                        </HeroPhoto>
                        <ArrowLevitate to='team'>
                        <FaAngleDown size="80px" cursor="pointer" ></FaAngleDown>
                        </ArrowLevitate>
                </HeroContainer>

                <Anchor className='team'></Anchor>
                <TeamLeadContainer>

                    <LeadProfileContainer>
                            <LeadImage src={ Captain }></LeadImage>
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

                    <LeadProfileContainer>
                            <LeadImage src={ Electrical }></LeadImage>
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

                    <LeadProfileContainer>
                            <LeadImage src={ Mechanical }></LeadImage>
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

                    <LeadProfileContainer>
                            <LeadImage src={ Business }></LeadImage>
                            <LeadDescriptionContainer>
                                <LeadDescription>
                                I am in my third year of engineering at UBC, specializing in environmental engineering.
                                <br></br><br></br>
                                I have always had a passion for integrating business and engineering together.
                                Behind every great engineering team are the finances to back up the cutting edge innovation.
                                The business team works on website software, team finances, sponsorship relations,  community engagement, and social media management. 
                                <br></br><br></br>
                                The business team is vital to the team's success, as we need to finance solar electric cars costing ~$150,000!
                                </LeadDescription>
                            </LeadDescriptionContainer>
                            <LeadInfoContainer>
                                <LeadName>Victor Pham</LeadName>
                                <LeadPosition>Business Team Lead</LeadPosition>
                            </LeadInfoContainer>
                    </LeadProfileContainer>

                    <LeadProfileContainer>
                            <LeadImage src={ Software }></LeadImage>
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

                    <LeadProfileContainer>
                            <LeadImage src={ VehicleDynamics }></LeadImage>
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

                    <LeadProfileContainer>
                            <LeadImage src={ PowerElectronics }></LeadImage>
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

                    <LeadProfileContainer>
                            <LeadImage src={ Chassis }></LeadImage>
                            <LeadDescriptionContainer>
                                <LeadDescription>
                                As the chassis subteam lead, I work on the core structure of the solar car, use FEA to ensure its structural integrity and produce a high factor of safety. 
                                <br></br><br></br>
                                I also understand other components of the car, such as the aeroshell and steering system, and seamlessly integrate these with the chassis.
                                </LeadDescription>
                            </LeadDescriptionContainer>
                            <LeadInfoContainer>
                                <LeadName>Mikey Sy</LeadName>
                                <LeadPosition>Chassis Team Lead</LeadPosition>
                            </LeadInfoContainer>
                    </LeadProfileContainer>

                    <LeadProfileContainer>
                            <LeadImage src={ Battery1 }></LeadImage>
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
                                <LeadName>Mischa Jonal</LeadName>
                                <LeadPosition>Battery Team Co-lead</LeadPosition>
                            </LeadInfoContainer>
                    </LeadProfileContainer>

                    <LeadProfileContainer>
                            <LeadImage src={ Business }></LeadImage>
                            <LeadDescriptionContainer>
                                <LeadDescription>
                                I am in my third year of engineering at UBC, specializing in environmental engineering.
                                <br></br><br></br>
                                I have always had a passion for integrating business and engineering together.
                                Behind every great engineering team are the finances to back up the cutting edge innovation. The business team works on website management, sponsor outreach,  community engagement, social media management, and financial allocation. 
                                <br></br><br></br>
                                The business team is vital to the team's success, as we need to finance solar electric cars costing ~$150,000.
                                </LeadDescription>
                            </LeadDescriptionContainer>
                            <LeadInfoContainer>
                                <LeadName>Serhii Rubtsov</LeadName>
                                <LeadPosition>Battery Team Co-lead</LeadPosition>
                            </LeadInfoContainer>
                    </LeadProfileContainer>

                    <LeadProfileContainer>
                            <LeadImage src={ Business }></LeadImage>
                            <LeadDescriptionContainer>
                                <LeadDescription>
                                I am in my third year of engineering at UBC, specializing in environmental engineering.
                                <br></br><br></br>
                                I have always had a passion for integrating business and engineering together.
                                Behind every great engineering team are the finances to back up the cutting edge innovation. The business team works on website management, sponsor outreach,  community engagement, social media management, and financial allocation. 
                                <br></br><br></br>
                                The business team is vital to the team's success, as we need to finance solar electric cars costing ~$150,000.
                                </LeadDescription>
                            </LeadDescriptionContainer>
                            <LeadInfoContainer>
                                <LeadName>Victor Pham</LeadName>
                                <LeadPosition>Business Team Lead</LeadPosition>
                            </LeadInfoContainer>
                    </LeadProfileContainer>

                    <LeadProfileContainer>
                            <LeadImage src={ Business }></LeadImage>
                            <LeadDescriptionContainer>
                                <LeadDescription>
                                I am in my third year of engineering at UBC, specializing in environmental engineering.
                                <br></br><br></br>
                                I have always had a passion for integrating business and engineering together.
                                Behind every great engineering team are the finances to back up the cutting edge innovation. The business team works on website management, sponsor outreach,  community engagement, social media management, and financial allocation. 
                                <br></br><br></br>
                                The business team is vital to the team's success, as we need to finance solar electric cars costing ~$150,000.
                                </LeadDescription>
                            </LeadDescriptionContainer>
                            <LeadInfoContainer>
                                <LeadName>Victor Pham</LeadName>
                                <LeadPosition>Business Team Lead</LeadPosition>
                            </LeadInfoContainer>
                    </LeadProfileContainer>
                </TeamLeadContainer>

            </TeamRoleContainer>

            <Footer/>
        </>
    );
};

export default TeamRolePage