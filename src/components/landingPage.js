import '../App.css';

import { Link } from 'react-router-dom';

function LandingPage(){

    return (
        <div className='landing-container'>
            <img src='https://avatars.githubusercontent.com/u/91443920?v=4' alt='profile pic'/>
            <div className='right-side'>
                <div className='intro'>
                    <p className='skills'> Javascript React SQL Node.Js</p>
                    <p> Welcome to the portfolio website of Brandi Ball! Stay informed, collaborate, and keep up with projects that I've been working on. Take a look at my work: </p>
                </div>
                <div className='landing-links'>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/resume'>Resume</Link>
                </div>
            </div>
            <ul className='all-skills-container'>
                        <div className='frontend-skills'>Frontend:
                            <p> Javascript </p>
                            <p> React </p>
                            <p> Redux </p>
                            <p> CSS </p>
                            <p> Html </p>
                            <p> Restful APIs </p>
                            <p> Axios </p>
                        </div>
                        <div className='backend-skills'>Backend:
                            <p> SQL </p>
                            <p> PostgreSQL </p>
                            <p> Node.js </p>
                            <p> Express </p>
                            <p> Python </p>
                        </div>
                    </ul>
        </div>
    )
}

export default LandingPage;