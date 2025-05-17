import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchbar = (e) => {
        e.preventDefault();
        console.log("Search Term:", searchTerm);
        setIsOpen(false);
    };

    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 bg-white h-24 z-50" : "w-auto"}`}>
            {isOpen ? (
                <form onSubmit={handleSearchbar} className='relative flex items-center justify-center w-full'>
                    <div className="relative w-1/2">
                        <input
                            type='text'
                            placeholder='Search'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'
                        />
                        
                        {/* Submit Search */}
                        <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'> 
                            <HiMagnifyingGlass className="h-6 w-6" />
                        </button>

                        {/* Close Button */}
                        <button type='button' onClick={handleSearch} className='absolute top-1/2 left-full transform -translate-y-1/2 ml-2 text-gray-600 hover:text-gray-800'>
                            <HiMiniXMark className='h-6 w-6'/>
                        </button>
                    </div>
                </form>
            ) : (
                <button onClick={handleSearch}>
                    <HiMagnifyingGlass className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default Searchbar;
