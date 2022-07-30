import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import {
    RecruitmentContainer,
    RecruitmentContentContainer,
    RecruitmentImageContainer,
    RecruitmentImage,
    RecruitmentContentHeaderText,
    Button,
    RecruitmentContentChild,
    RecruitmentContentParagraph,
} from './RecruitmentStyle';
import Footer from '../Footer';
import TeamPicture from '../../assets/RecruitmentImages/Team.svg';

const RecruitmentPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavigationBar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <RecruitmentContainer>

                {/* Content */}
                <RecruitmentContentContainer>
                    <RecruitmentContentChild>   
                        <RecruitmentContentHeaderText font='15px' text='Positions Available' />
                        <RecruitmentContentHeaderText font='40px' text='Work with us' />
                        <RecruitmentContentParagraph>
                            There are many great reasons for joining us, I'm currently too lazy to type them all out so you just
                            gotta trust me on this one.
                        </RecruitmentContentParagraph>
                        <Button link='#' buttonText='Join Now'/>
                    </RecruitmentContentChild>

                </RecruitmentContentContainer>

                {/* Image */}
                <RecruitmentImageContainer>
                    <RecruitmentImage src={TeamPicture}></RecruitmentImage>
                </RecruitmentImageContainer>

            </RecruitmentContainer>
            <Footer />
        </>
    );
};

export default RecruitmentPage