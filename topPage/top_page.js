const movieContainer = document.querySelector('.movie-container')

const createMovie = (id,rank) =>{
    const movieLink = document.createElement('a');
    movieLink.classList.add('movie-link');
    movieLink.href = '#'
    movieLink.innerHTML = 
    `
             <div class="movie-box">
                <img src="../images/${id}.jpg" alt="">
                <h1>#${rank}</h1>
            </div>
    `
    movieContainer.appendChild(movieLink);
}

const initMovies = async () => {
    for (let i = 1; i <= 100; i++) {
        const data = await fetch(`../data/top100/${i}.json`)
        const res = await data.json();
        console.log(res.imdbID)
        createMovie(res.imdbID,i);
    }
}


initMovies();