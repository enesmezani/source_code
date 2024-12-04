import Movie from './Movie'
import '../styles/movies.scss'
import styles from './movies.module.scss'

const Movies = ({ movies, viewTrailer, closeCard }) => {

    // if movies or results are undefined
    const movieList = movies.movies?.results || [];

    if(movies.fetchStatus === 'loading' && movieList.length === 0) return <div>Loading...</div>

    if (!movies || !movieList) {
        return <p>No movies found.</p>;
    }

    return (
        <div className='movies' data-testid="movies">
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
