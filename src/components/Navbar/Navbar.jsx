import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchMovie } from '../../Feature/currentgenre';

const Navbar = () => {

    const[query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleKeyPress = () => {
        dispatch(searchMovie(query));
    }
    // const navbutton = () => {
    //     return (
    //         <div className=''>
    //             <div className='flex'>
    //                 <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="bg-black p-2 h-10 rounded-2xl text-gray-400 text-sm placeholder:text-sm py-3 pl-4 pr-10 " placeholder='Enter Movie Name'/>
    //                 <button type='submit' className="p-3 hover:text-red-500 absolute rounded-full top-50% -right-0 cursor-pointer" onClick={handleKeyPress}><IoIosSearch /></button> 
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className='shadow-2xl bg-zinc-900 shadow-zinc-900 p-4 w-full text-white flex justify-center items-center rounded-b-3xl '>
            <div className='w-full max-w-[1700px] flex items-center justify-between'>
                <Link to="/MovieR/">
                    <p className="text-2xl font-bold flex items-center"><span className='font-black md:text-3xl sm:text-xl text-red-600'>Movie</span>R<img src="https://the3dmarket.com/cdn/shop/products/new_red_cyan_blue_1024x1024.png?v=1571438517" className='w-[100px] hidden md:block' /></p>
                </Link>
                <div className='relative items-center block'>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="bg-black p-2 h-10 rounded-2xl text-gray-400 text-sm placeholder:text-sm py-3 pl-4 pr-10 " placeholder='Enter Movie Name'/>
                    <button type='submit' className="p-3 hover:text-red-500 absolute rounded-full top-50% -right-0 cursor-pointer" onClick={handleKeyPress}><IoIosSearch /></button> 
                </div>
                <div className='p-1 rounded-3xl flex'>
                    <Link to="/MovieR/Genre">
                        <button className="p-2 font-small hover:text-red-500 text-white text-xl ">Genre</button>
                    </Link>
                    {/* <button className="p-2 font-small hover:text-red-500 text-white text-2xl" onClick={navbutton}>button</button> */}
                    <button className="p-2 font-small hover:text-red-500 text-white text-2xl hidden">Login</button>
                </div>
                
            </div>
            {/* <div className='relative items-center md:hidden block'>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="bg-black p-2 h-10 rounded-2xl text-gray-400 text-sm placeholder:text-sm py-3 pl-4 pr-10 " placeholder='Enter Movie Name'/>
                <button type='submit' className="p-3 hover:text-red-500 absolute rounded-full top-50% -right-0 cursor-pointer" onClick={handleKeyPress}><IoIosSearch /></button> 
            </div> */}
        </div>
        
    )
}

export default Navbar