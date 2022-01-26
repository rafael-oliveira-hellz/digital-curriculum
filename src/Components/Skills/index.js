import Html5 from '../Badges/html5';
import CSS3 from '../Badges/css3';
import Javascript from '../Badges/javascript';
import Sass from '../Badges/sass';
import Bootstrap from '../Badges/bootstrap';
import Typescript from '../Badges/typescript';
import Scrum from '../Badges/scrum';
import ReactJS from '../Badges/reactJS';
import PHP from '../Badges/php';
import Python from '../Badges/python';
import Databases from '../Badges/databases';
import Git from '../Badges/git';

const Skills = () => {
    return (
        <>
            <section>
                <div className='margin-right badges-container'>
                    <Html5 />
                    <CSS3 />
                    <Sass />
                    <Bootstrap />
                </div>
            </section>

            <section>
                <div className='margin-right margin-top badges-container'>
                    <Javascript />
                    <Typescript />
                    <Scrum />
                    <ReactJS />
                </div>
            </section>

            <section>
                <div className='margin-right margin-top badges-container'>
                    <PHP />
                    <Python />
                    <Databases />
                    <Git />
                </div>
            </section>
        </>

    )
}

export default Skills;