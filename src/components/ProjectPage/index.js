import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';

import {
    ProjectPageContainer,

} from './ProjectPageStyle';

const ProjectPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <NavigationBar isOpen={isOpen }toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div>
            <ProjectPageContainer>
                Projects.
            </ProjectPageContainer>
        </div>

        </>
    );
};

export default ProjectPage