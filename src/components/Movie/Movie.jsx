import React from 'react'
import Star from '../Star/Star'
import { Link } from 'react-router-dom'

const Movie = ({ movie, index}) => {
    if(movie.poster_path === null) return null;
    return (
        <div className=' h-[440px] w-[250px] text-white flex flex-col justify-start items-center'>
            <Link to={`/movie/${movie?.id}`}>
                <div className="w-[250px] h-full shadow-2xl  hover:shadow-zinc-900 rounded-2xl bg-cover overflow-hidden">
                    <img className=''
                    src={movie.poster_path?`http://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'} 
                    alt={movie?.title} />
                </div>
            </Link>
            <div className='text-center mb-2 p-2 w-full'>
                <h1 className="cursor-pointer font-semibold whitespace-nowrap  overflow-hidden overflow-ellipsis">{movie?.title}</h1>
            </div>
            <Star rating={movie?.vote_average}/>
        </div>
    )
}

export default Movie;