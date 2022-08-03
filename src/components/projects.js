import '../App.css';
import Nasa from '../assets/nasa.png';
import Fitness from '../assets/fitness.png';

function Projects(){

    return (
        <div className='project-container'>
            <h2> Recent Projects </h2>
            <div className='projects'> 
            <button className='fitness-app project'>
                    <a href='https://github.com/ft-anywhere-fitness-7/front-end' className='fitness project'>Fitness App</a>
                    <img src={Fitness} alt='Woman lifting weights' />
                    <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, css
                        <p className='app-description'>An app that allows users to register and login as either students or instructors</p>
                        <a href='https://github.com/ft-anywhere-fitness-7/front-end'>GitHub</a>
                    </div>
                </button>

                <button className='nasa-app project'>
                    <a href='https://nasa-photo-of-the-avr07vys3-brandib222.vercel.app/' className='nasa project'>NASA Photo of the Day </a>
                        <img src={Nasa} alt='Nasa Photo of the Day' />
                        <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, CSS
                            <p className='app-description'>An app that uses Axios to retrieve and display information from NASA's Photo of the Day API</p>
                            <a href='https://github.com/brandib222/nasa-photo-of-the-day'>GitHub</a><br/>
                            <a href='https://nasa-photo-of-the-avr07vys3-brandib222.vercel.app/'>Deployed Site </a>
                        </div>
                </button>
                
                <button className='recipes-app project'>
                    <a href='https://github.com/brandib222/secret-family-recipes'>Secret Family Recipes</a>
                        <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, CSS
                            <p className='app-description'>An app built with React that allows users to login, edit, update, and delete recipes</p>
                            <a href='https://github.com/brandib222/secret-family-recipes'>GitHub</a>

                        </div>
                </button>
            </div>
    </div>
    )
}

export default Projects;