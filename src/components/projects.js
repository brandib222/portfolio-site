import '../App.css';

function Projects(){

    return (
        <div className='project-container'>
        <div className='projects'>
        <h2> Projects </h2>
            <div className='recipes-app'>
                <a href='https://github.com/brandib222/secret-family-recipes'>Secret Family Recipes</a>
                <p>An app that allows users to login, edit, update, and delete recipes</p>
            </div>
            <div className='nasa-app'>
                <a href='https://github.com/brandib222/nasa-photo-of-the-day'>NASA Photo of the Day</a>
                <p>An app that uses Axios to retrieve and display information from NASA's Photo of the Day API</p>
            </div>
            <div className='fitness-app'>
                <a href='https://github.com/ft-anywhere-fitness-7/front-end'>Fitness App</a>
                <img src='src/assets/fitness.png' alt='lady lifting weights'/>
                <p>An app that allows users to register and login as either students or instructors</p>
                <a className='site' href='front-end-fitness7.vercel.app'>Deployed site</a>

            </div>
            </div>
        </div>
    )
}

export default Projects;