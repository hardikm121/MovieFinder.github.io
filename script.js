const apiKey = 'your_api_key_here';

function getTopRatedMovies() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById('movie-list');

            data.results.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                const image = document.createElement('img');
                image.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                image.alt = movie.title;
                movieCard.appendChild(image);

                const title = document.createElement('h3');
                title.textContent = movie.title
