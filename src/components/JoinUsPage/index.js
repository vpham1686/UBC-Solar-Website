import React, { useState, useRef, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import './Recruitment.css';

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
    ButtonContainer,
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

    //Warning countdown
    const [timerDaysW, setTimerDays] = useState('00');
    const [timerHoursW, setTimerHours] = useState('00');
    const [timerMinutesW, setTimerMinutes] = useState('00');
    const [timerSecondsW, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startWarningTimer = () => {
        const countdownDate = new Date(Date.UTC(2023, 0, 1, 7, 0, 0)).getTime();
        // Timing System: 
        // Date.UTC(Year, Month, Day, Hour, Minute, Second)
        // Year: Simple Year
        // Month: Integer 0 - 11, 0 for January, 11 for December
        // Day: Integer 1 - 31
        // Hour: Integer 0 - 23
        // Minute: Integer 0 - 59
        // Second: Integer 0 - 59
        // UTC = PST + 7 (~Mid March - Early November)
        // UTC = PST + 8 (~Early November - Mid March)

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const daysW = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursW = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutesW = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsW = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //Stop timer after reaching point
                clearInterval(interval.current);
                //Timer switches to recruitment period
                startRecruitmentTimer();
            } else {
                //Update timer
                setTimerDays(daysW);
                setTimerHours(hoursW);
                setTimerMinutes(minutesW);
                setTimerSeconds(secondsW);
            }
        
        }, 1000);
    };

    useEffect(() => {
        startWarningTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    //Recruitment countdown
    const [timerDaysR, setTimerDaysR] = useState('00');
    const [timerHoursR, setTimerHoursR] = useState('00');
    const [timerMinutesR, setTimerMinutesR] = useState('00');
    const [timerSecondsR, setTimerSecondsR] = useState('00');
    
    let intervalR = useRef();

    const startRecruitmentTimer = () => {
        const countdownDate = new Date(Date.UTC(2023, 0, 21, 23, 59, 59)).getTime();
        // Timing System: 
        // Date.UTC(Year, Month, Day, Hour, Minute, Second)
        // Year: Simple Year
        // Month: Integer 0 - 11, 0 for January, 11 for December
        // Day: Integer 1 - 31
        // Hour: Integer 0 - 23
        // Minute: Integer 0 - 59
        // Second: Integer 0 - 59
        // UTC = PST + 7 (~Mid March - Early November)
        // UTC = PST + 8 (~Early November - Mid March)

        intervalR = setInterval(() => {
            const nowR = new Date().getTime();
            const distanceR = countdownDate - nowR;

            const daysR = Math.floor(distanceR / (1000 * 60 * 60 * 24));
            const hoursR = Math.floor((distanceR % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutesR = Math.floor((distanceR % (1000 * 60 * 60)) / (1000 * 60));
            const secondsR = Math.floor((distanceR % (1000 * 60)) / 1000);

            if (distanceR < 0) {
                //Stop timer after reaching point
                clearInterval(intervalR.current);
            } else {
                //Update timer
                setTimerDaysR(daysR);
                setTimerHoursR(hoursR);
                setTimerMinutesR(minutesR);
                setTimerSecondsR(secondsR);
            }
        
        }, 1000);
    };

    // useEffect(() => {
    //     startRecruitmentTimer();
    //     return () => {
    //         clearInterval(intervalR.current);
    //     };
    // });
        
    const data = [
        {
            question: 'When can I apply?',
            answer: 
            'Applications are open every year in September and occasionally in January and May. Announcements are posted on our social media, so follow us to stay updated!',
        },

        {
            question: 'Do I need to be an engineering student?',
            answer: 
            'No, you do not need to be an engineering student to join the team. We welcome students from all backgrounds and programs at UBC to join our team.',
        },

        {
            question: 'What are the requirements to join?',
            answer: 
            'Work ethic and a willingness to learn are the most important attributes that UBC Solar looks for. Technical skills and knowledge for subteams can vary. Mechanical subteams would prefer SolidWorks and hands-on experiences whereas a software subteam prefers candidates who understand programming language(s) like Python, C, Rust, or JavaScript.',
        },

        {
            question: 'What if I have no experience?',
            answer: 
            'Our team looks for members who are dedicated to the team and passionate. Here on UBC Solar, we welcome people to apply regardless of experience. We believe that the technical skills can be taught while being part of the team.',
        },

        {
            question: 'What is the time commitment?',
            answer: 
            'Depending on your subteam and what projects you work on, it can vary from 4 to 15 hours a week which includes weekly meetings. General team meetings are every Saturday at ~10AM and subteam meetings are arranged by the lead.',
        },

        {
            question: 'How can I improve my odds of joining?',
            answer: 
            'Many candidates who have gotten and passed interviews displayed strong work ethic, passion, some understanding of the subteam work, and are critical thinkers and problem solvers. Having a strong written application that clearly demonstrates your problem solving abilities and being able to do well on the interviews can increase your odds of joining the team.',
        },

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
                            UBC Solar offers great opportunities for students of all backgrounds and specializations. 
                            Join our journey to push the limits of sustainable technology together.
                        </RecruitmentContentParagraph>

                        <a href='https://linktr.ee/ubcsolar' target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'none'}}>
                        <ButtonContainer>
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Join Now</p>
                        </ButtonContainer>
                        </a>
                        
                        {/* Displaying only one timer */}
                        <div classname='warning'>
                            <div className={timerSecondsW === 0 && timerMinutesW === 0 && timerHoursW === 0 && timerDaysW === 0
                                ? 'visible' : 'hidden'}>
                                    <p style={{ fontWeight: 'bold', marginBottom: 'auto', marginTop: '1vw' }}>Applications Open In:</p>
                                    <p style={{ fontWeight: 'bold', color: 'red', fontSize: '14px', marginBottom: 'auto', marginTop: 'auto'}}>
                                        {timerDaysW} day(s), {timerHoursW} hour(s), {timerMinutesW} minute(s), {timerSecondsW} second(s)</p>
                            </div>
                        </div>
                        <div classname='recruitment'>
                            <div className={timerSecondsW === 0 && timerMinutesW === 0 && timerHoursW === 0 && timerDaysW === 0
                                ? 'hidden' : 'visible'}>
                                    <p style={{ fontWeight: 'bold', marginBottom: 'auto', marginTop: '-3.5vw'}}>Applications Closes In:</p>
                                    <p style={{ fontWeight: 'bold', color: 'red', fontSize: '14px', marginBottom: 'auto', marginTop: 'auto'}}>
                                        {timerDaysR} day(s), {timerHoursR} hour(s), {timerMinutesR} minute(s), {timerSecondsR} second(s)</p>
                            </div>

                            <div className={timerSecondsR === 0 && timerMinutesR === 0 && timerHoursR === 0 && timerDaysR === 0
                                ? 'visible' : 'hidden'}>
                            <p style={{ fontWeight: 'bold', color: 'red', marginBottom: 'auto' }}>Applications have closed!</p>
                            </div>
                        </div>

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

            <Footer />
        </>
    );
};

export default RecruitmentPage