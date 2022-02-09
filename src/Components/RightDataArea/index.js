import React from 'react'

import ProfessionalProfileCard from "../ProfessionalProfileCard";
import ProfessionalExperienceCard from "../ProfessionalExperienceCard";
import AcademicBackgroundCard from "../AcademicBackgroundCard";
import CoursesCard from "../CoursesCard";
import '../../styles/css/index.css';

const RightDataArea = () => {
    return (
        <div className="right-content">

            <ProfessionalProfileCard />
            <ProfessionalExperienceCard />
            <AcademicBackgroundCard />
            <CoursesCard />

        </div>
    )
}

export default RightDataArea;