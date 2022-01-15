import ProfessionalProfileCard from "../ProfessionalProfileCard";
import ProfessionalExperienceCard from "../ProfessionalExperienceCard";
import AcademicBackgroundCard from "../AcademicBackgroundCard";
import CoursesCard from "../CoursesCard";

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