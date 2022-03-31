import '../App.css';
import Projects from './projects';
import Resume from './resume';
import { Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';


function Header(){
    
    return (
        <div className='header'>
            <h1>Brandi Ball</h1>
            <p>Frontend Developer</p>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link>
        </div>
    )
}

export default Header;