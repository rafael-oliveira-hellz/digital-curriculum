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
<<<<<<< HEAD
=======
import Magento from '../Badges/magento';
>>>>>>> 2d7fe96a7e49c017382a32d70c1d31fc198b7ea2

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
                    <ReactJS />
                    <Typescript /> 
                    <Databases />
                </div>
            </section>

            <section>
                <div className='margin-right margin-top badges-container'>
                    <PHP />
                    <Python />
                    <Git />
                    <Scrum />
                </div>
<<<<<<< HEAD
            </section> <br /><br />
=======
            </section> 
            
            <section>
                <div className='margin-right margin-top badges-container'>
                    <Magento />
                </div>
            </section><br /><br />
>>>>>>> 2d7fe96a7e49c017382a32d70c1d31fc198b7ea2
        </>

    )
}

export default Skills;