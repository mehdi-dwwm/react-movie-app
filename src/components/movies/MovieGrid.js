import React from 'react'
import MovieItem from './MovieItem'
import Spinner from '../ui/Spinner';

const MovieGrid = ({ movies, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (<section className="cards">
        { movies.map(movie => (
            <MovieItem key={ movie.id} { ...movie } />
        ))}
    </section>)
}

export default MovieGrid
