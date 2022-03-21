import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

//Diamond//
import Daniel_Family_Foundation from '../../assets/sponsorImages/Daniel_Family_Foundation.png';

//Gold//
import Siemens from '../../assets/sponsorImages/Siemens.png';
import PSIM from '../../assets/sponsorImages/PSIM.png';
import UBC_AMS from '../../assets/sponsorImages/UBC_AMS.png';
import Composites_One from '../../assets/sponsorImages/Composites_One.jpg';
import Tektronix from '../../assets/sponsorImages/Tektronix.png';
import Reimer_Hardwoods from '../../assets/sponsorImages/Reimer_Hardwoods.png';
import MathWorks from '../../assets/sponsorImages/MathWorks.png';

//Silver//
import Silver_3M from '../../assets/sponsorImages/Silver_3M.jpg';
import Airtech from '../../assets/sponsorImages/Airtech.jpg';
import Altium from '../../assets/sponsorImages/Altium.jpg';
import Elithion from '../../assets/sponsorImages/Elithion.png';
import Pillion_Holdings from '../../assets/sponsorImages/Pillion_Holdings.jpg';
import Shell from '../../assets/sponsorImages/Shell.png';
import Swell_Composites from '../../assets/sponsorImages/Swell_Composites.jpg';

//Bronze//
import AFFINITY from '../../assets/sponsorImages/AFFINITY.jpg';
import FLUOR from '../../assets/sponsorImages/FLUOR.jpg';
import Gigavac from '../../assets/sponsorImages/Gigavac.jpg';
import JLCPCB from '../../assets/sponsorImages/JLCPCB.png';
import METAL_PROS from '../../assets/sponsorImages/METAL_PROS.png';
import OMRON from '../../assets/sponsorImages/OMRON.jpg';
import Shop3D from '../../assets/sponsorImages/Shop3D.png';
import UBC_Physics_Astronomy from '../../assets/sponsorImages/UBC_Physics_Astronomy.jpg';
import West_Mountain_Radio from '../../assets/sponsorImages/West_Mountain_Radio.jpg';

//Friend//
import Bluewater from '../../assets/sponsorImages/Bluewater.jpg';
import Canada_Bicycle_Parts from '../../assets/sponsorImages/Canada_Bicycle_Parts.jpg';
import COE from '../../assets/sponsorImages/COE.jpg';
import Composites_Research_Network from '../../assets/sponsorImages/Composites_Research_Network.jpg';
import DIGI from '../../assets/sponsorImages/DIGI.jpg';
import IEEE from '../../assets/sponsorImages/IEEE.png';
import Industrial_Plastics_Paints from '../../assets/sponsorImages/Industrial_Plastics_Paints.jpg';
import NOVA from '../../assets/sponsorImages/NOVA.png';
import SW from '../../assets/sponsorImages/SW.bmp';
import TCI from '../../assets/sponsorImages/TCI.jpg';
import UBC_ECE from '../../assets/sponsorImages/UBC_ECE.jpg';
import Vicor from '../../assets/sponsorImages/Vicor.jpg';
import VR3 from '../../assets/sponsorImages/VR3.png';

import {
    SponsorContainer,
    SponsorTitle,
    SponsorAppreciation,
    Diamond,
    DiamondText,
    Gold,
    GoldText,
    Silver,
    SilverText,
    Bronze,
    BronzeText,
    Friend,
    FriendText,
    TierContainer,
    DiamondContainer,
    GoldContainer,
    SilverContainer,
    BronzeContainer,
    FriendContainer,
    FadeInLeftDiv,
    FadeInRightDiv

} from './SponsorSectionStyle';

const SponsorSection = () => {
    return (
        <SponsorContainer className='sponsors'>
            <SponsorTitle>
                Sponsors
            </SponsorTitle>
            <SponsorAppreciation>
                UBC Solar would like to thank all of our sponsors for helping the team achieve our goals and enabling us to participate in competitions.
            </SponsorAppreciation>

            <TierContainer>


                <Diamond>
                    <DiamondText>
                        Diamond
                    </DiamondText>
                    <DiamondContainer>
                        <FadeInLeftDiv>
                        <img width='150'
                             src={Daniel_Family_Foundation}>
                        </img>
                        </FadeInLeftDiv>
                    </DiamondContainer>
                </Diamond>
                
                <Gold>
                    <GoldText>
                        Gold
                    </GoldText>

                    <GoldContainer>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={Siemens}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={PSIM}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='50%'
                            src={UBC_AMS}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={Composites_One}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={Tektronix}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={Reimer_Hardwoods}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={MathWorks}>
                        </img>
                        </FadeInRightDiv>
                    </GoldContainer>
                </Gold>

                <Silver>
                    <SilverText>
                        Silver
                    </SilverText>
                    <SilverContainer>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Silver_3M}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Airtech}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Altium}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Elithion}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Pillion_Holdings}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Shell}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Swell_Composites}>
                        </img>
                        </FadeInLeftDiv>
                    </SilverContainer>
                </Silver>

                <Bronze>
                    <BronzeText>
                        Bronze
                    </BronzeText>
                    <BronzeContainer>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={AFFINITY}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={FLUOR}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={Gigavac}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={JLCPCB}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={METAL_PROS}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={OMRON}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={Shop3D}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='60%'
                            src={UBC_Physics_Astronomy}>
                        </img>
                        </FadeInRightDiv>
                        <FadeInRightDiv>
                        <img width='75%'
                            src={West_Mountain_Radio}>
                        </img>
                        </FadeInRightDiv>
                    </BronzeContainer>
                </Bronze>

                <Friend>
                    <FriendText>
                        Friend
                    </FriendText>
                    <FriendContainer>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Bluewater}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Canada_Bicycle_Parts}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={COE}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Composites_Research_Network}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={DIGI}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={IEEE}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Industrial_Plastics_Paints}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={NOVA}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={SW}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={TCI}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={UBC_ECE}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={Vicor}>
                        </img>
                        </FadeInLeftDiv>
                        <FadeInLeftDiv>
                        <img width='75%'
                            src={VR3}>
                        </img>
                        </FadeInLeftDiv>
                    </FriendContainer>
                </Friend>

            </TierContainer>
        </SponsorContainer>
    );
};

export default SponsorSection
