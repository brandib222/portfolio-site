import '../App.css';

function Projects(){

    return (
        <div className='project-container'>
        <div className='projects'>
            <h2> Welcome to my portfolio page </h2>
            <p>Here are a few of my favorite projects</p>
                <a href='https://github.com/brandib222/secret-family-recipes'>
                    <button className='recipes-app'> Secret Family Recipes
                        <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, CSS
                            <p>An app built with React that allows users to login, edit, update, and delete recipes</p>
                        </div>
                    </button>
                </a>
                <a href='https://github.com/brandib222/nasa-photo-of-the-day'>
                    <button className='nasa-app'> NASA Photo of the Day
                        <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, CSS
                            <p>An app that uses Axios to retrieve and display information from NASA's Photo of the Day API</p>
                        </div>
                    </button>
                </a>

                <a href='https://github.com/ft-anywhere-fitness-7/front-end'>
                    <button className='fitness-app'> Fitness App
                        <div className='tech-stack'>Tech Stack: Javascript, React.js, Node.js, Express, HTML, css
                            <p>An app that allows users to register and login as either students or instructors</p>
                        </div>
                    </button>
                    </a>
            </div>
        </div>
    )
}

export default Projects;