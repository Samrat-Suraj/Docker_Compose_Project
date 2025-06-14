import { MinusCircle, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
import { GiChiliPepper } from "react-icons/gi";

const AllFoodItems = () => {
    const foodItems = [
            { id: 1, name: 'Margherita Pizza', price: 10, rating: 4.5 },
            { id: 2, name: 'Pepperoni Pizza', price: 12, rating: 4.7 },
            { id: 3, name: 'Vegetarian Pizza', price: 9, rating: 4.3 },
            { id: 4, name: 'BBQ Chicken Pizza', price: 14, rating: 4.8 },
            { id: 5, name: 'Hawaiian Pizza', price: 11, rating: 4.2 },
        ];

    const [sortOption, setSortOption] = useState('');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortedFoodItems = [...foodItems].sort((a, b) => {
        if (sortOption === 'priceLow') {
            return a.price - b.price;
        } else if (sortOption === 'priceHigh') {
            return b.price - a.price;
        } else if (sortOption === 'rating') {
            return b.rating - a.rating;
        }
        return 0;
    });

    return (
        <div className="h-screen flex-1 p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[10px] lg:text-3xl font-bold text-gray-800">Delicious Pizza</h1>
                <div className="flex items-center">
                    <select
                        id="sortBy"
                        className="p-[2px] w-[100px] bg-white lg:px-4 lg:py-2 border border-gray-300 rounded-full focus:outline-none"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="">Sort By</option>
                        <option value="priceLow">Price (Low to High)</option>
                        <option value="priceHigh">Price (High to Low)</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            <div className="w-full overflow-y-auto p-2 h-[85vh]">
                {sortedFoodItems.map((item) => (
                    <div key={item.id} className='shadow-lg p-5'>
                        <div className="bg-white rounded-lg mb-4 flex flex-col lg:flex-row justify-between items-center">
                            <div className='flex w-full lg:w-[70%] flex-col lg:justify-between items-center lg:items-start'>
                                <h3 className="text-sm lg:text-xl font-semibold text-gray-800">{item.name}</h3>

                                <div className="text-red-500 flex">
                                    {[...Array(Math.floor(item.rating))]?.map((_, index) => (
                                        <GiChiliPepper key={index} />
                                    ))}
                                </div>
                                <p className="text-sm lg:text-base">1 McChiken , 1 Big Mac</p>
                            </div>

                            <div className="w-full lg:w-[30%] flex justify-center lg:justify-start mt-4 lg:mt-0">
                                <img className='lg:h-[160px] lg:w-[160px] w-[100px] h-[100px] rounded-full object-cover' src="https://th.bing.com/th/id/OIP.XzUnt5Afjbz_9Bmkng2IMQHaEK?rs=1&pid=ImgDetMain" alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="hidden sm:flex">
                                <p className="text-red-500 flex justify-center items-center rounded-sm font-semibold w-fit p-[5px] lg:p-4 text-[12px] lg:text-lg text-center">Price &nbsp; <span className='text-red-500 text-xl'>&#8377; {item.price}</span></p>
                            </div>
                            <div className="sm:hidden">
                                <p className="text-red-500 text-xl">&#8377;{item.price}</p>
                            </div>
                            <div className='flex justify-between items-center gap-2 lg:pl-3 lg:pr-3 lg:p-2 p-[1px] border bg-green-400 rounded'>
                                <PlusCircle className='text-white' size={25} />
                                <p className="text-sm lg:text-base">12</p>
                                <MinusCircle className='text-white' size={25} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllFoodItems