import React, { useState } from 'react'
import Star from '../Star/Star'
import { AiOutlineStar } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useGetMovQuery } from '../../services/Api';


function Modal({ data, modalActive, modalClose }) {
    // for (let i = 0; i < data?.videos?.results?.length; i++) {
    //     if(data?.videos?.results[15].name == "OFFICIAL"){
    //         const x = data.videos.results[i].key;
    //     }
        
    // }
    if (!modalActive) return null;
    return (
        <div
            onClick={() => modalClose()}
            className="fixed inset-0 grid place-content-center bg-black bg-opacity-50 backdrop-blur-lg">

            {data?.videos?.results?.length > 0 && (
                <iframe
                    allowFullScreen
                    autoPlay
                    className="aspect-video h-[150px] sm:h-[250px] md:h-[350px] 1g:h-[500px]"
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
                    allow="autoplay"
                />
            )}

        </div>
    );

}
const MovieInformation = () => {

    const [modalActive, setModalActive] = useState(false);

    const { id } = useParams();

    const { data, isFetching, error } = useGetMovQuery(id);
    // console.log(data)
    return (
        <section className='w-full flex flex-col justify-center lg:flex-row'>
            <div className="p-5 mt-5 flex justify-center items-start lg:w-[45%]">
                <div className="justify-center items-start  w-[50%] my-5 shadow-2xl  shadow-zinc-900 rounded-2xl bg-cover overflow-hidden lg:w-[60%]">
                    <img src={data?.poster_path ? `http://image.tmdb.org/t/p/w500/${data?.poster_path}` : 'https://www.fillmurray.com/200/300'} alt="{data?.title}" />
                </div>
            </div>
            <div className="text-white flex flex-col justify-start p-8 lg:w-[45%]">
                <div className='text-center mt-4'>
                    <h1 className='font-black text-5xl'>{data?.title}</h1>
                    <p className='text-sm mt-1'>{data?.tagline}</p>
                </div>
                <div className='mt-3'>
                    <div className='mb-3'>
                        <p className='mb-2 font-bold font-serif'>Rating:-</p>
                        <Star rating={data?.vote_average} />
                    </div>
                    <h1 className="font-bold font-serif ">
                        Length / Date Release / Language :-
                    </h1>
                    <p className=' mb-4 font-normal font-serif'>{data?.runtime} min / {data?.release_date} / <span className='uppercase'>{data?.original_language}</span> </p>
                </div>
                <div className=''>
                    <h1 className='font-bold font-serif'>Genre:</h1>
                    <div className='text-white flex gap-4 p-3 overflow-x-auto'>
                        {data?.genres
                            .map((genre, index) =>
                            (<button key={index} className='mt-3 p-1 -[2px] flex justify-center items-center gap-2 rounded-lg font-semibold border-2 hover:border-yellow-300'>
                                <AiOutlineStar />
                                <p className='m-1'>{genre?.name}</p>
                            </button>))
                            .slice(0, 6)}
                        {/* <button className='mt-3 p-1 -[2px] flex justify-center items-center gap-2 rounded-lg font-semibold border-2 hover:border-yellow-300'>
                            <AiOutlineStar />
                            <p className=''>{data?.genre}</p>
                        </button> */}
                    </div>
                </div>
                <div className=' mt-3 w-[80%]'>
                    <h1 className='font-bold font-serif'>Information:</h1>
                    <p className="text-left mt-1 ml-1">{data?.overview}</p>
                </div>
                <div className=' mt-4'>
                    <h1 className='font-bold font-serif'>Top Cast:</h1>
                    <div className='flex flex-wrap'>
                        {data?.credits?.cast
                            .map((character, index) =>
                            (<div key={index} className='p-1 mt-3 w-[110px]'>
                                <img className='rounded-xl w-full object-cover border' src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`} alt={character?.name} />
                                <p className='text-center w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>{character?.name}</p>
                            </div>))
                            .slice(0, 8)}


                        {
                        /* <div>
                            <div className='p-4'>
                                <img className='rounded-xl w-[100px] h-[100px] object-cover border' src="data:image/jpeg;base64,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" alt="cast image" />
                                <p className='text-center'>castname</p>
                            </div>
                            
                        </div>   */}
                    </div>
                </div>
                <div className=''>

                </div>
                <div className=' mt-3'>
                    <button className="my-2 p-2 mx-3 rounded-2xl border hover:border-red-500 hover:text-red-500">
                        <a href={data?.homepage} target='_blank'>
                            <span>Website</span>
                        </a>
                    </button>
                    <button onClick={()=>{setModalActive(true)}} className="my-2 p-2 mx-3 rounded-2xl border hover:border-red-500 hover:text-red-500">Trailer</button>
                    <Modal data={data} modalActive={modalActive} modalClose={() => setModalActive(false)} />
                    {/* <p></p> */}
                </div>
            </div>
        </section>
    )
}

export default MovieInformation