import React, { useState } from 'react';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);

        } else {
            console.log('Please enter a search query.');
        }
    };

    return (
        <div className="h-[35vw] relative mt-4 bg-gray-100 overflow-hidden">
            <img
                className="object-cover w-full h-full transform transition-all duration-300 ease-in-out scale-110"
                src="/heroimg.png"
                alt="A background hero image"
            />
            <div className="absolute lg:top-[35%] md:top-[35%] top-0 lg:left-4 md:left-12 text-left p-6 rounded-3xl max-w-lg w-full lg:backdrop-blur-sm">
                <p className="text-[1vw] lg:flex hidden md:text-sm text-gray-700">We provide the best services for you</p>
                <h1 className="lg:text-[3vw] md:text-4xl font-semibold text-gray-800">Feast And Your <span className='text-red-500' >Senses</span></h1>
                <h1 className="lg:text-[2vw] md:text-2xl text-orange-500 font-semibold">Fast And Fresh</h1>

                <p className="mt-2 lg:text-[1.2vw] text-[12px] font-semibold text-gray-600">Search Your Favorite Food Here</p>
                <div className="lg:mt-6 flex items-center gap-3">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search for food, dishes, or cuisines..."
                        className="w-full sm:w-[60%] lg:w-auto p-[1vw] text-[14px] md:text-[1.1vw] lg:text-[1.3vw] rounded-md shadow-md focus:outline-none"
                        aria-label="Search food"
                    />
                    <button
                        onClick={handleSearchSubmit}
                        className="w-fit sm:w-auto bg-orange-500 text-[14px] lg:text-[1.3vw] text-white p-[1vw] rounded-md hover:bg-orange-600 transition-all duration-200 ease-in-out"
                        aria-label="Submit search"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
