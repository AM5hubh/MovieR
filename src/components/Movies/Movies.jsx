import React, { useState } from 'react'
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';
import { useGetMovieQuery, useGetMovieByGenreQuery } from '../../services/Api';
import { useSelector } from 'react-redux';

const Movies = () => {
    
    const [page, setPage ] = useState(1);
    const {genreName, searchQuery} = useSelector((state) => state.currentGenre);
    const { data, isFetching, error} = useGetMovieQuery({ genreName, page, searchQuery }); 
    return (
        <section className='justify-center items-center w-full h-auto p-9 mt-2'>
            <MovieList movies={data} />
            <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages}/>
            <p className='text-white flex justify-center text-center w-full mt-3'>{page} of {data?.total_pages}</p>
        </section>
    )
}

export default Movies