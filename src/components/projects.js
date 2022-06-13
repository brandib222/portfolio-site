import '../App.css';

function Projects(){

    return (
        <div className='project-container'>
            <h2> Recent Projects </h2>
            <div className='projects'> 
                <a href='https://github.com/brandib222/secret-family-recipes'>Secret Family Recipes</a>
                    <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, CSS
                        <p className='app-description'>An app built with React that allows users to login, edit, update, and delete recipes</p>
                        <a href='https://github.com/brandib222/secret-family-recipes'>GitHub</a>

                    </div>
                <a href='https://nasa-photo-of-the-avr07vys3-brandib222.vercel.app/'>NASA Photo of the Day </a>
                    <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, CSS
                        <p className='app-description'>An app that uses Axios to retrieve and display information from NASA's Photo of the Day API</p>
                        <a href='https://github.com/brandib222/nasa-photo-of-the-day'>GitHub</a><br/>
                        <a href='https://nasa-photo-of-the-avr07vys3-brandib222.vercel.app/'>Deployed Site </a>

                    </div>
                <a href='https://github.com/ft-anywhere-fitness-7/front-end'>Fitness App</a>
                    <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, css
                        <p className='app-description'>An app that allows users to register and login as either students or instructors</p>
                        <a href='https://github.com/ft-anywhere-fitness-7/front-end'>GitHub</a>

                    </div>
            </div>
    </div>
    )
}

export default Projects;