import '../App.css';

import { Link } from 'react-router-dom';

function LandingPage(){
    return (
        <div className='landing-container'>
            <img src='https://avatars.githubusercontent.com/u/91443920?v=4' alt='profile pic'/>
            <div className='right-side'>
            <div className='intro'>
                <p className='skills'> Javascript React SQL Node.Js</p>
                {/*<ul>
                // LIST ALL OF MY SKILLS WHEN I HAVE TIME TO STYLE THEM
                    <div className='frontend-skills'>Frontend:</div>
                    <li> Javascript </li>
                    <li> React </li>
                    <li> Redux </li>
                    <li> CSS </li>
                    <li> Html </li>
                    <li> Restful APIs </li>
                    <li> Object Oriented Programming (OOP) </li>
                </ul>*/}
                <p> Welcome to the portfolio website of Brandi Ball! Stay informed, collaborate, and keep up with projects that I've been working on. Take a look at my work: </p>
            </div>
            <div className='landing-links'>
                <Link to='/projects'>Projects</Link>
                <Link to='/resume'>Resume</Link>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;