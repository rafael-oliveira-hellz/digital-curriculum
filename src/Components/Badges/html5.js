import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Html5 = () => {    
    return (
        <>
            <h2 id="html5-badge" aria-describedby="tooltip" className='margin-left'><FontAwesomeIcon icon={faHtml5} className='margin-right badges badge-html5' /></h2>
        </>
    )
}

export default Html5;