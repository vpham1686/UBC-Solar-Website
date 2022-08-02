import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import { FaAngleDown } from 'react-icons/fa';

import TeamRoleHero from '../../assets/TeamRoleImages/TeamRoles.png';

import Footer from '../Footer';

//Team Leads
import Captain from '../../assets/TeamRoleImages/Captain.png';

import Mechanical from '../../assets/TeamRoleImages/MechanicalExecutive.png';
import Business from '../../assets/TeamRoleImages/BusinessTeamLead.png';
import VehicleDynamics from '../../assets/TeamRoleImages/VehicleDynamicsTeamLead.png';

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
                            <LeadImage src={ Business } style={{ opacity: '0' }} ></LeadImage>
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
                            <LeadImage src={ Business } style={{ opacity: '0' }}></LeadImage>
                            <LeadDescriptionContainer>
                                <LeadDescription>
                                I am in my third year of engineering at UBC, specializing in Environmental Engineering.
                                <br></br><br></br>
                                I have always had a passion for integrating business and engineering together.
                                Behind every great engineering team are the finances to back up the cutting edge innovation. The business team works on website management, sponsor outreach,  community engagement, social media management, and financial allocation. 
                                <br></br><br></br>
                                The business team is vital to the team's success, as we need to finance solar electric cars costing ~$150,000.
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