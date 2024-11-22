import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import watchLaterSlice from '../data/watchLaterSlice'
import Movie from './Movie'
import '../styles/starred.scss'

const WatchLater = ({viewTrailer}) => {
    const state = useSelector((state) => state)
    const { watchLater } = state
    const { removeAllWatchLater } = watchLaterSlice.actions
    const dispatch = useDispatch()
  
    if(!watchLater || !watchLater.watchLaterMovies)
    {
      return <p>Error: Unable to load watch later movies.</p>;
    }

  return (
    <div className="starred" data-testid="watch-later-div">
      {watchLater.watchLaterMovies.length > 0 && (
        <div data-testid="watch-later-movies" className="starred-movies">
          <h6 className="header">Watch Later List</h6>
          <div className="row">
            {watchLater.watchLaterMovies.map((movie) => (
              <div className="movie" key={movie.id}>
                <Movie movie={movie} viewTrailer={viewTrailer} />
              </div>
            ))}
          </div>

          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(removeAllWatchLater())}>
              Empty list
            </button>
          </footer>
        </div>
      )}

      {watchLater.watchLaterMovies.length === 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-heart" />
          <p>You have no movies saved to watch later.</p>
          <p>Go to <Link to='/'>Home</Link></p>
        </div>
      )}
    </div>
  )
}

export default WatchLater