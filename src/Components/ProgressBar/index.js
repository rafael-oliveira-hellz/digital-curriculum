const ProgressBar = ({ title, percentual, level = null }) => {
    return (
        <div>
            <p>{title}</p>
             <div className="progress-bar-bg mb-1">
                <div className="progress-bar" style={`width: ${percentual}`}>{level ?? percentual}</div>
             </div>
        </div>
    )
}

export default ProgressBar;