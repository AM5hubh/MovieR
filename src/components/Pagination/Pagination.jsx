import React from 'react'

const Pagination = ({ currentPage, totalPages, setPage }) => {
    console.log(currentPage);
    if (totalPages === 0) return null;

    const handlePrev = () => {
        if (currentPage !== 1) {
            setPage((prevPage) => prevPage - 1);
        }
    }
    
    const handleNext = () => {
        if (currentPage !== totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    }

    return (
        <div className='text-white justify-center items-center w-full flex mt-10'>
            <button className="mr-4 px-3 py-2 rounded-lg hover:text-red-500 text-xl border border-red-100 w-fit hover:border-red-500" onClick={handlePrev}>Previous</button>
            <button className="ml-4 px-3 py-2  rounded-lg hover:text-red-500 text-xl border border-red-100 w-fit hover:border-red-500" onClick={handleNext}>Next</button>
        </div>
    )
}

export default Pagination