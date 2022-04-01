import '../App.css';

import { Link } from 'react-router-dom';


function Header(){
    
    return (
        <div className='header'>
            <h1>Brandi Ball</h1>
            <p>Frontend Developer</p>
            <div className='header-links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Header;