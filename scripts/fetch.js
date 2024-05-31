const API_KEY = '258a10d91fc0ae505bc7bbf0d3b31c0e';
const LANGUAGE = 'en-US';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const popularMoviesContainer = document.getElementById("trending-today");
const acclaimedMoviesContainer = document.querySelector('.acclaimed-movies');
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

let popularMoviesPage = 1;

const buildURL = (type, page) => `${BASE_URL}${type}?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`;

const loadMovies = async (type, container, page) => {
    try {
        const response = await fetch(buildURL(type, page));
        if (!response.ok) {
            throw new Error('Hubo un error al cargar las películas.');
        }
        const data = await response.json();
        displayMovies(data.results, container);
    } catch (error) {
        console.error('Error al cargar películas:', error.message);
    }
}

const displayMovies = (movies, container) => {
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieHTML = `
        <a href="./pages/detail.html">
            <div class="movie">
                    <img class="trending-image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                    <div class="movie-title"><h4>${movie.title}</h4></div>
            </div>
        </a>`;
        container.insertAdjacentHTML('beforeend', movieHTML);
    });
}

const updatePage = (type, value) => {
    const nextPage = popularMoviesPage + value;
    if (nextPage >= 1) {
        popularMoviesPage = nextPage;
        loadMovies(type, popularMoviesContainer, popularMoviesPage);
    }
}

previousButton.addEventListener("click", () => updatePage('popular', -1));
nextButton.addEventListener("click", () => updatePage('popular', 1));

loadMovies('popular', popularMoviesContainer, popularMoviesPage);
loadMovies('top_rated', acclaimedMoviesContainer, 1);