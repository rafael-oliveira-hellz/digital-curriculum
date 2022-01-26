import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bootstrap = () => {    
    return (
        <>
            <h2 id="bootstrap-badge" aria-describedby="tooltip" className='margin-left badge-hovering'><FontAwesomeIcon icon={faBootstrap} className='margin-right badges badge-bootstrap' /></h2>
        </>
    )
}

export default Bootstrap;