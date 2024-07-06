import React from 'react'
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
    console.log(movies)
    console.log(movies?.page)
    return (
        <div className='p-2 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center '>
            {movies?.results?.map((movie, index) => (
                <Movie key={index} movie={movie} index={index} />
            ))}
        </div>
    )
}

export default MovieList