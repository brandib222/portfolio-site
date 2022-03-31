function Projects(){

    return (
        <div className='projects'>
            <div className='recipes-app'>
                <a href='https://github.com/brandib222/secret-family-recipes'>Secret Family Recipes</a>
                <p>An app that allows users to login, edit, update, and delete recipes</p>
                <img src='https://media.istockphoto.com/photos/vintage-cookbook-with-handwritten-recipe-picture-id177531518?b=1&k=20&m=177531518&s=170667a&w=0&h=SOQ9XIHH94oOqOk5cZHqYJf578SrpNuLfQgqPVTxPPE=' alt='page with written recipe'/>
            </div>
            <div className='nasa-app'>
                <a href='https://github.com/brandib222/nasa-photo-of-the-day'>NASA Photo of the Day</a>
                <p>An app that uses Axios to retrieve and display information from NASA's Photo of the Day API</p>
                <img src='https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='man on the moon'/>
            </div>
            <div className='fitness-app'>
                <a href='https://github.com/ft-anywhere-fitness-7/front-end'>Fitness App</a>
                <p>An app that allows users to register and login as either students or instructors</p>
                <img src='https://front-end-fitness7.vercel.app/static/media/fitness3.f4025b70.jpg' alt='woman lifting weights'/>
                <a href='front-end-fitness7.vercel.app'>Deployed site</a>
            </div>
        </div>
    )
}

export default Projects;