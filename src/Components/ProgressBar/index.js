import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ title = '', percentual = '0%', level = null }) => {

    return (
        <div>
            <p className='margin-right margin-left'>{title}</p>
             <div className="progress-bar-bg mb-1 margin-right margin-left">
                <div className="progress-bar" style={{ width: `${percentual}` }} >{level ?? percentual}</div>
             </div>
        </div>
    )
}

ProgressBar.propTypes = {
    title: PropTypes.string,
    percentual: PropTypes.string,
    level: PropTypes.string
}

export default ProgressBar;