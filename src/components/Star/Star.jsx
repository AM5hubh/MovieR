import React from 'react'
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai"; 

const Star = ({rating}) => {
    
    const starRating = rating/2;

    const starPrinting = Array.from({length: 5}, (element,index) => {
        let n = index + 0.5;
        return (
            <span key={index}>
            {
                starRating >= index + 1 ? (
                    <FaStar className="text-base text-yellow-500" />
                ) : starRating >= n ? (
                    <FaStarHalfAlt className='text-base text-yellow-500'  />
                ) :(
                    <AiOutlineStar className='text-base text-yellow-500'  />
                )
            }
            </span>
          )
    })

    return (
        <div className="flex justify-start items-center text-yellow-500">
            {starPrinting}
        </div>
    )
  
}

export default Star;