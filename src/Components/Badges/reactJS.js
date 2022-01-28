import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const reactJS = () => {    
    return (
        <>
            <h2 id="reactjs-badge" aria-describedby="tooltip" className='margin-left'>
                
                <FontAwesomeIcon icon={faReact} className='margin-right badges badge-reactjs' />

                <div className='badge-hover'>Noções do framework ReactJS</div>  
                
            </h2>
        </>
    )
}

export default reactJS;