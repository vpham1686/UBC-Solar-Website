import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';

import {
    RecruitmentContainer,

} from './RecruitmentStyle';

const RecruitmentPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <NavigationBar isOpen={isOpen }toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div>
            <RecruitmentContainer>
                Recruitment.
            </RecruitmentContainer>
        </div>

        </>
    );
};

export default RecruitmentPage