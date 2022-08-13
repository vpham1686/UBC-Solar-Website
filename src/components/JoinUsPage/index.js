import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
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
    RecruitmentFAQContainer,
    FAQContainer,
    FAQ,
} from './RecruitmentStyle';
import Footer from '../Footer';
import TeamPicture from '../../assets/RecruitmentImages/RecruitmentPageImage.png';

const RecruitmentPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [ FAQActive, setFAQActive ] = useState(true);
    function onFAQChange(isVisible) {
        if (isVisible) {
            setFAQActive(false);
        }
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

                <RecruitmentFAQContainer>
                    <h1 style={{ paddingLeft: '3vw', fontSize: '50px' }}>Recruitment FAQ</h1>
                    <VisibilitySensor onChange={onFAQChange} partialVisibility={true} active={FAQActive}>
                    {({isVisible}) =>
                    <FAQContainer>
                        <FAQ style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                            <h1 style={{ fontSize: '1.8vw', paddingLeft: '1vw', color: 'white', marginBottom: 'auto', marginTop: '10px' }}>When can I apply?</h1>
                            <p style={{ paddingLeft: '4px', paddingRight: '4px', fontSize: '1.1vw', paddingLeft: '1vw', color: 'white', marginTop: 'auto' }}>
                            Applications are open every year in September and ocassionally in January and May. Announcements are posted on our social medias, so follow us to stay updated!
                            </p>
                        </FAQ>

                        <FAQ style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                            <h1 style={{ fontSize: '1.8vw', paddingLeft: '1vw', color: 'white', marginBottom: 'auto', marginTop: '10px' }}>Do I need to be an engineering student?</h1>
                            <p style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.1vw', paddingLeft: '1vw', color: 'white', marginTop: 'auto' }}>
                            No, you do not need to be an engineering student to join the team. We welcome students from all programs at UBC to join our team. 
                            </p>
                        </FAQ>
                        <FAQ style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                            <h1 style={{ fontSize: '1.8vw', paddingLeft: '1vw', color: 'white', marginBottom: 'auto', marginTop: '10px' }}>What requirements are there to join?</h1>
                            <p style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.1vw', paddingLeft: '1vw', color: 'white', marginTop: 'auto' }}>
                            Having technical skills and knowledge for the subteam you would like to join is preferred, but work ethic and willingness to learn are the most important.
                            </p>
                        </FAQ>
                        <FAQ style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                            <h1 style={{ fontSize: '1.8vw', paddingLeft: '1vw', color: 'white', marginBottom: 'auto', marginTop: '10px' }}>Question</h1>
                            <p style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.1vw', paddingLeft: '1vw', color: 'white', marginTop: 'auto' }}>
                            Answer
                            </p>
                        </FAQ>
                        <FAQ style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                            <h1 style={{ fontSize: '1.8vw', paddingLeft: '1vw', color: 'white', marginBottom: 'auto', marginTop: '10px' }}>What is the time commitment?</h1>
                            <p style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.1vw', paddingLeft: '1vw', color: 'white', marginTop: 'auto' }}>
                            Depending on your subteam and what projects you work on, it can vary from 4 to 15 hours a week which includes weekly meetings. General team meetings are every Saturday at ~10AM and subteam meetings are arranged by the lead. 
                            </p>
                        </FAQ>
                        <FAQ style={{ opacity: `${isVisible ? '1' : '0'}` }}>
                            <h1 style={{ fontSize: '1.8vw', paddingLeft: '1vw', color: 'white', marginBottom: 'auto', marginTop: '10px' }}>How can I improve my odds of joining?</h1>
                            <p style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.1vw', paddingLeft: '1vw', color: 'white', marginTop: 'auto' }}>
                            Many candidates who have gotten and passed interviews displayed strong work ethic, passion, some understanding of the subteam work, and are critical thinkers and problem solvers.
                            </p>
                        </FAQ>
                    </FAQContainer>
                    }
                    </VisibilitySensor>
                </RecruitmentFAQContainer>

            </RecruitmentContainer>
            {/* <Footer /> */}
        </>
    );
};

export default RecruitmentPage