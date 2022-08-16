import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import './Recruitment.css'

import {
    RecruitmentContainer,
    RecruitmentContentContainer,
    RecruitmentImageContainer,
    RecruitmentImage,
    RecruitmentContentHeaderText,
    Button,
    RecruitmentContentChild,
    RecruitmentContentParagraph,
    RecruitmentFAQ,
} from './RecruitmentStyle';
import Footer from '../Footer';
import TeamPicture from '../../assets/RecruitmentImages/RecruitmentPageImage.png';

const RecruitmentPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    //FAQ Toggling
    const [selected, setSelected] = useState(null)

    const toggleFAQ = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    
    const data = [
        {
            question: 'When can I apply?',
            answer: 
            'Applications are open every year in September and ocassionally in January and May. Announcements are posted on our social medias, so follow us to stay updated!',
        },

        {
            question: 'Do I need to be an engineering student?',
            answer: 
            'No, you do not need to be an engineering student to join the team. We welcome students from all programs at UBC to join our team. ',
        },

        {
            question: 'What are the requirements to join?',
            answer: 
            'Having technical skills and knowledge for the subteam you would like to join is preferred, but work ethic and willingness to learn are the most important.',
        },

        {
            question: 'Question?',
            answer: 
            'Hehe.',
        },

        {
            question: 'What is the time commitment?',
            answer: 
            'Depending on your subteam and what projects you work on, it can vary from 4 to 15 hours a week which includes weekly meetings. General team meetings are every Saturday at ~10AM and subteam meetings are arranged by the lead.',
        },

        {
            question: 'How can I improve my odds of joining?',
            answer: 
            'Many candidates who have gotten and passed interviews displayed strong work ethic, passion, some understanding of the subteam work, and are critical thinkers and problem solvers.',
        }
    ]


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
                
                <RecruitmentFAQ>Recruitment FAQ</RecruitmentFAQ>
                <div className='wrapper'>
                    <div className='accordion'>
                        {data.map((item, i) => (
                            <div className='item'>
                                <div className='title' onClick={() => toggleFAQ(i)}>
                                    <h2>{item.question}</h2>
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div
                                    className={
                                        selected === i ? 'content show' : 'content'
                                    }
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            {/* <Footer /> */}
        </>
    );
};

export default RecruitmentPage