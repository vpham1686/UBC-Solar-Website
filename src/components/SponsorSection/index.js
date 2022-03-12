import React from 'react';

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

} from './SponsorSectionStyle';

const SponsorSection = () => {
    return (
        <SponsorContainer className='sponsors'>
            <SponsorTitle>
                Sponsors
            </SponsorTitle>
            <SponsorAppreciation>
                UBC Solar would like to thank all of our sponsors for helping our team achieve blah blah.
            </SponsorAppreciation>

            <TierContainer>


                <Diamond>
                    <DiamondText>
                        Diamond
                    </DiamondText>
                    <DiamondContainer>
                        <img height='50%'
                            src={Daniel_Family_Foundation}>
                        </img>
                    </DiamondContainer>

                </Diamond>
                
                <Gold>
                    <GoldText>
                        Gold
                    </GoldText>

                    <GoldContainer>
                        <img width='75%'
                            src={Siemens}>
                        </img>
                        <img width='75%'
                            src={PSIM}>
                        </img>
                        <img width='75%'
                            src={UBC_AMS}>
                        </img>
                        <img width='75%'
                            src={Composites_One}>
                        </img>
                        <img width='75%'
                            src={Tektronix}>
                        </img>
                        <img width='75%'
                            src={Reimer_Hardwoods}>
                        </img>
                        <img width='75%'
                            src={MathWorks}>
                        </img>
                    </GoldContainer>
                </Gold>

                <Silver>
                    <SilverText>
                        Silver
                    </SilverText>
                    <SilverContainer>
                        <img width='75%'
                            src={Silver_3M}>
                        </img>
                        <img width='75%'
                            src={Airtech}>
                        </img>
                        <img width='75%'
                            src={Altium}>
                        </img>
                        <img width='75%'
                            src={Elithion}>
                        </img>
                        <img width='75%'
                            src={Pillion_Holdings}>
                        </img>
                        <img width='75%'
                            src={Shell}>
                        </img>
                        <img width='75%'
                            src={Swell_Composites}>
                        </img>
                    </SilverContainer>
                </Silver>

                <Bronze>
                    <BronzeText>
                        Bronze
                    </BronzeText>
                    <BronzeContainer>
                        <img width='75%'
                            src={AFFINITY}>
                        </img>
                        <img width='75%'
                            src={FLUOR}>
                        </img>
                        <img width='75%'
                            src={Gigavac}>
                        </img>
                        <img width='75%'
                            src={JLCPCB}>
                        </img>
                        <img width='75%'
                            src={METAL_PROS}>
                        </img>
                        <img width='75%'
                            src={OMRON}>
                        </img>
                        <img width='75%'
                            src={Shop3D}>
                        </img>
                        <img width='75%'
                            src={UBC_Physics_Astronomy}>
                        </img>
                        <img width='75%'
                            src={West_Mountain_Radio}>
                        </img>
                    </BronzeContainer>
                </Bronze>

                <Friend>
                    <FriendText>
                        Friend
                    </FriendText>
                    <FriendContainer>
                        <img width='75%'
                            src={Bluewater}>
                        </img>
                        <img width='75%'
                            src={Canada_Bicycle_Parts}>
                        </img>
                        <img width='75%'
                            src={COE}>
                        </img>
                        <img width='75%'
                            src={Composites_Research_Network}>
                        </img>
                        <img width='75%'
                            src={DIGI}>
                        </img>
                        <img width='75%'
                            src={IEEE}>
                        </img>
                        <img width='75%'
                            src={Industrial_Plastics_Paints}>
                        </img>
                        <img width='75%'
                            src={NOVA}>
                        </img>
                        <img width='75%'
                            src={SW}>
                        </img>
                        <img width='75%'
                            src={TCI}>
                        </img>
                        <img width='75%'
                            src={NOVA}>
                        </img>
                        <img width='75%'
                            src={SW}>
                        </img>
                        <img width='75%'
                            src={UBC_ECE}>
                        </img>
                        <img width='75%'
                            src={Vicor}>
                        </img>
                        <img width='75%'
                            src={VR3}>
                        </img>
                    </FriendContainer>
                </Friend>

            </TierContainer>
        </SponsorContainer>
    );
};

export default SponsorSection
