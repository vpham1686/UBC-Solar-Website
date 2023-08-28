import React, { useState, useRef, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import NavigationBar from "../../components/NavigationBar";
import Sidebar from "../../components/Sidebar";
import "./Recruitment.css";

import {
  RecruitmentContainer,
  RecruitmentContentContainer,
  RecruitmentImageContainer,
  RecruitmentImage,
  RecruitmentContentHeaderText,
  Button,
  HorizontalLine,
  RecruitmentContentChild,
  RecruitmentContentParagraph,
  RecruitmentFAQ,
  ButtonContainer,
} from "./RecruitmentStyle";

import Footer from "../Footer";
import TeamPicture from "../../assets/RecruitmentImages/TeamPhoto23.jpg";

const RecruitmentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //FAQ Toggling
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  //Warning countdown
  const [timerDaysW, setTimerDays] = useState("00");
  const [timerHoursW, setTimerHours] = useState("00");
  const [timerMinutesW, setTimerMinutes] = useState("00");
  const [timerSecondsW, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startWarningTimer = () => {
    const countdownDate = new Date(Date.UTC(2023, 7, 26, 7, 0, 0)).getTime();
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
      const hoursW = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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
  const [timerDaysR, setTimerDaysR] = useState("00");
  const [timerHoursR, setTimerHoursR] = useState("00");
  const [timerMinutesR, setTimerMinutesR] = useState("00");
  const [timerSecondsR, setTimerSecondsR] = useState("00");

  let intervalR = useRef();

  const startRecruitmentTimer = () => {
    const countdownDate = new Date(Date.UTC(2023, 8, 17, 23, 59, 59)).getTime();
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
      const hoursR = Math.floor(
        (distanceR % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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

  useEffect(() => {
      startRecruitmentTimer();
      return () => {
          clearInterval(intervalR.current);
      };
  });

  const businessPositions = [
    {
      question: "Marketing and Videography",
      answer: `To administrate UBC Solar's social media platforms and create videos promoting our work and informing our audience about green tech in transportation`,
    },
    {
      question: "Website Management and Outreach",
      answer: `To support continious improvements to our website as well as aiding with general outreach to industries and potential sponsors`,
    },
    {
      question: "Team Logistics and Technical Outreach",
      answer: `to assist with outreach for technical projects and aid with team logistics including internal events, communications with UBC and other exisitng partners`,
    },
  ];

  const mechanicalPositions = [
    {
      question: "Aeroshell - 3 positions",
      winterGoals: "Winter Term Goals: Manufacture Brightside Aeroshell.",
      futureWork:
        "Future Work: Monocoque solar cars research, aeroshell design for the next car.",
      skills:
        "Skills that you will learn: Composite parts manufacturing, composite material testing, surfacing design, CFD simulations, aerodynamics, systems integration, waterjetting, thermoforming.",
    },
    {
      question: "Battery Mechanical - 2 positions",
      winterGoals:
        "Winter Term Goals: Manufacture and test Brightside battery.",
      futureWork:
        "Future Work: Research and design for the next generation battery.",
      skills:
        "Skills that you will learn: Battery structures, battery cells, battery pack manufacturing, mechanical-electrical integration, composite parts manufacturing, thermal analysis, battery testing.",
    },
    {
      question: "Chassis - 3 positions",
      winterGoals:
        "Winter Term Goals: Assemble chassis and manufacture auxiliary integration components.",
      futureWork:
        "Future Work: Monocoque chassis research, weight reduction, chassis design for the next generation car, FEA simulation improvements.",
      skills:
        "Skills that you will learn: Static structural design, systems integration, systems safety analysis, vehicle skeleton design, FEA simulations, waterjetting, welding basics.",
    },
    {
      question: "Vehicle Dynamics - 2 positions",
      winterGoals:
        "Winter Term Goals: Manufacture, test, and tune Brightside suspension systems.",
      futureWork:
        "Future Work: Composite suspension parts, 3-wheel solar cars research, material testing, FEA simulation improvements, weight reduction, suspension design for the next car.",
      skills:
        "Skills that you will learn: Suspension and steering systems, braking and wheels, FEA simulations, suspension optimization, physical analysis of vehicle dynamics systems, machine shop manufacturing.",
    },
  ];

  const electricalPositions = [
    {
      question: "Battery Management Systems - 2 positions",
      winterGoals:
        "Winter Term Goals: Bring up and test custom BMS systems and integrate with the battery.",
      futureWork:
        "Future Work: BMS improvements, battery cells research, battery safety and characterization, BMS systems design for the next car.",
      skills:
        "Skills that you will learn: Power distribution systems, battery cells, battery safety, MCU firmware, state machines, PCB design, bring-up, and debugging.",
    },
    {
      question: "Power and Signals - 3 positions",
      winterGoals:
        "Winter Term Goals: Bring up and test low voltage signal and communication boards, assemble the solar arrays, test and integrate the motor, complete wiring of all electrical systems.",
      futureWork:
        "Future Work: Solar cells research, motor testing dyno, advanced sensory data collection.",
      skills:
        "Skills that you will learn: Sensor control, RF signaling, driver interface, solar arrays, PCB design, bring-up, and debugging.",
    },
    {
      question: "Embedded - 4 positions",
      winterGoals:
        "Winter Term Goals: Integrate all firmware for data collection, driver interface, and communications with Brightside.",
      futureWork:
        "Future Work: Over-air firmware updates, improved communications and data collection algorithms.",
      skills:
        "Skills that you will learn: MCU firmware, telemetry systems, data logging, front-end development, microcontrollers, and dev-boards, firmware debugging.",
    },
    {
      question: "Simulation - 2 positions",
      winterGoals:
        "Winter Term Goals: Completion of modeling and optimization algorithms, integration with embedded firmware.",
      futureWork:
        "Future Work: Improved model accuracy and predictions, increased number of simulation inputs and modeled systems.",
      skills:
        "Skills that you will learn: Systems simulation, front-end development, race strategy, firmware integration, prediction algorithms.",
    },
  ];

  const data = [
    {
      question: "When can I apply?",
      answer:
        "Applications are open every year in September and occasionally in January and May. Announcements are posted on our social media, so follow us to stay updated!",
    },

    {
      question: "Do I need to be an engineering student?",
      answer:
        "No, you do not need to be an engineering student to join the team. We welcome students from all backgrounds and programs at UBC to join our team.",
    },

    {
      question: "What are the requirements to join?",
      answer:
        "Work ethic and a willingness to learn are the most important attributes that UBC Solar looks for. Technical skills and knowledge for subteams can vary. Mechanical subteams would prefer SolidWorks and hands-on experiences whereas a software subteam prefers candidates who understand programming language(s) like Python, C, Rust, or JavaScript.",
    },

    {
      question: "What if I have no experience?",
      answer:
        "Our team looks for members who are dedicated to the team and passionate. Here on UBC Solar, we welcome people to apply regardless of experience. We believe that the technical skills can be taught while being part of the team.",
    },

    {
      question: "What is the time commitment?",
      answer:
        "Depending on your subteam and what projects you work on, expect to spend a minimum of 7 hours a week on UBC Solar Projects. General team meetings are every Saturday at ~10AM. In addition, MECH/ELEC/GENERAL work sessions occur every week from 6-9 pm from Monday to Thursday. Attendence to all sessions is not required, however Members are expected to attend a minimum of 2 hours per week at Work Sessions. Leads will work alongside members to organise sessions.",
    },

    {
      question: "How can I improve my odds of joining?",
      answer:
        "Many candidates who have gotten and passed interviews displayed strong work ethic, passion, some understanding of the subteam work, and are critical thinkers and problem solvers. Having a strong written application that clearly demonstrates your problem solving abilities and being able to do well on the interviews can increase your odds of joining the team.",
    },
  ];

  return (
    <>
      <NavigationBar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <RecruitmentContainer>
        {/* Content */}
        <RecruitmentContentContainer>
          <RecruitmentContentChild>
            <RecruitmentContentHeaderText
              font='15px'
              text='Positions Available'
            />
            <RecruitmentContentHeaderText font='40px' text='Work with us' />
            <RecruitmentContentParagraph>
              UBC Solar offers great opportunities for students of all
              backgrounds and specializations. Join our journey to push the
              limits of sustainable technology together.
            </RecruitmentContentParagraph>

            <a
              href='https://forms.gle/pLXxU2P4KSWpDhyD6'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: "white", textDecoration: "none" }}
            >
              <ButtonContainer>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Join Now</p>
              </ButtonContainer>
            </a>

            {/* Displaying only one timer */}
            <div classname='warning'>
              <div
                className={
                  timerSecondsW === 0 &&
                  timerMinutesW === 0 &&
                  timerHoursW === 0 &&
                  timerDaysW === 0
                    ? "visible"
                    : "hidden"
                }
              >
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "auto",
                    marginTop: "1vw",
                  }}
                >
                  Applications Open In:
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "auto",
                    marginTop: "auto",
                  }}
                >
                  {timerDaysW} day(s), {timerHoursW} hour(s), {timerMinutesW}{" "}
                  minute(s), {timerSecondsW} second(s)
                </p>
              </div>
            </div>
            <div classname='recruitment'>
              <div
                className={
                  timerSecondsW === 0 &&
                  timerMinutesW === 0 &&
                  timerHoursW === 0 &&
                  timerDaysW === 0
                    ? "hidden"
                    : "visible"
                }
              >
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "auto",
                    marginTop: "-3.5vw",
                  }}
                >
                  Applications Closes In:
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "auto",
                    marginTop: "auto",
                  }}
                >
                  {timerDaysR} day(s), {timerHoursR} hour(s), {timerMinutesR}{" "}
                  minute(s), {timerSecondsR} second(s)
                </p>
              </div>

              <div
                className={
                  timerSecondsR === 0 &&
                  timerMinutesR === 0 &&
                  timerHoursR === 0 &&
                  timerDaysR === 0
                    ? "visible"
                    : "hidden"
                }
              >
                <p
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    marginBottom: "auto",
                  }}
                >
                  Applications have closed!
                </p>
              </div>
            </div>
            <RecruitmentContentHeaderText font='20px' text='Applications open: Aug 28 - Sept 17 2023' />

          </RecruitmentContentChild>
        </RecruitmentContentContainer>
        {/* Image */}
        <RecruitmentImageContainer>
          <RecruitmentImage src={TeamPicture}></RecruitmentImage>
        </RecruitmentImageContainer>
      </RecruitmentContainer>

      {/* Subteam FAQs */}
      <RecruitmentFAQ>Mechanical Positions</RecruitmentFAQ>
      <div className='wrapper'>
        <div className='accordion'>
          {mechanicalPositions.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggleFAQ(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <p>{item.winterGoals}</p>
                <p>{item.futureWork}</p>
                <p>{item.skills}</p>
              </div>
            </div>
          ))}
        </div>
      
      </div>

      {/* Subteam FAQs */}
      <RecruitmentFAQ>Electrical Positions</RecruitmentFAQ>
      <div className='wrapper'>
        <div className='accordion'>
          {electricalPositions.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggleFAQ(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <p>{item.winterGoals}</p>
                <p>{item.futureWork}</p>
                <p>{item.skills}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>

      {/* Subteam FAQs */}
      <RecruitmentFAQ>Business Team Positions</RecruitmentFAQ>
      <div className='wrapper'>
        <div className='accordion'>
          {businessPositions.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggleFAQ(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))} 
        </div>
       
      </div>

      <RecruitmentFAQ>Recruitment FAQ</RecruitmentFAQ>
      <div className='wrapper'>
        <div className='accordion'>
          {data.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggleFAQ(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
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

export default RecruitmentPage;
