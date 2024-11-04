import Movie from './Movie'
import '../styles/movies.scss'

const Movies = ({ movies, viewTrailer, closeCard }) => {

    // if movies or results are undefined
    const movieList = movies.movies?.results || [];

    if (!movies || !movieList) {
        return <p>No movies found.</p>;
    }

    return (
        <div data-testid="movies">
            {movieList.map((movie) => {
                return (
                    <Movie 
                        movie={movie} 
                        key={movie.id}
                        viewTrailer={viewTrailer}
                        closeCard={closeCard}
                    />
                )
            })}
        </div>
    )
}

export default Movies
