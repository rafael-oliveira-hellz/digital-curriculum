import scrumLogo from '../../assets/images/scrum.png';

const Scrum = () => {    
    return (
        <>
            <h2 id="scrum-badge" aria-describedby="tooltip" className='margin-left'><img src={scrumLogo} alt='Scrum: Metodologias Ágeis' className='margin-right' /></h2>
        </>
    )
}

export default Scrum;