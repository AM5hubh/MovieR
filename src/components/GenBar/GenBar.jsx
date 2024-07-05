import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { useGetMovieByGenreQuery } from '../../services/Api';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';   
import { selectGenre } from '../../Feature/currentgenre';

const GenBar = () => {

  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetMovieByGenreQuery();

  return (
    <div className='text-white flex gap-4 p-2 overflow-x-auto'>
      {isFetching || (
        data?.genres.map(({ name, id }) => (
          <Link key={id} value={id} className="text-white flex">
            <div className='mt-3 p-2 flex justify-center items-center rounded-lg font-semibold border-2 hover:border-yellow-300 hover:text-yellow-400' onClick={() => dispatch(selectGenre(id))}>
              <p className=''>{name}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}

export default GenBar

{/* <button className='px-4 py-2 border-[2px] flex justify-center items-center gap-2 rounded-lg font-semibold hover:border-yellow-300'>
        <AiOutlineStar />
        <p className=''> genre2 </p>
      </button> */}
{/* <div>
                  <img src={genreIcons[name.toLowerCase()]} width={30} height={30}
                  className='text-white invert mr-5' />
                </div> */}