import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CSS3 = () => {    
    return (
        <>
            <h2 id="css3-badge" aria-describedby="tooltip" className='margin-left'><FontAwesomeIcon icon={faCss3Alt} className='margin-right badges badge-css3' /></h2>
        </>
    )
}

export default CSS3;