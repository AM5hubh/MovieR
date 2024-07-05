import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const page = 1;


export const TMDBAPI = createApi({
    reducerPath: 'TMDBAPI',
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3/"}),
    endpoints: (builder) => ({

        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=62db892ba8886738cc7ed7ca724b7aa8`
        }),

        getMovie: builder.query({
            query: ({ genreName, page, searchQuery }) => {

                if(searchQuery){
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=62db892ba8886738cc7ed7ca724b7aa8`
                }

                // Get movies by Genre
                if (genreName && typeof genreName === 'number') {
                    return `/discover/movie?with_genres=${genreName}&page=${page}&api_key=62db892ba8886738cc7ed7ca724b7aa8`
                }
                // Get Popular Movies
                return `movie/popular?page=${page}&api_key=62db892ba8886738cc7ed7ca724b7aa8`;
                
                }
            // query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=62db892ba8886738cc7ed7ca724b7aa8`,
        }),
        getMov: builder.query({
            query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=62db892ba8886738cc7ed7ca724b7aa8`,
        }),
        getMovieByGenre: builder.query({
            query: () => `genre/movie/list?api_key=62db892ba8886738cc7ed7ca724b7aa8`
        })   
    }),
    
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetMovQuery,
    useGetMovieByGenreQuery,
} = TMDBAPI;