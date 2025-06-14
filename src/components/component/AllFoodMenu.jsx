import React from 'react';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaBreadSlice, FaFish, FaHamburger, FaIceCream, FaPastafarianism, FaPizzaSlice, FaStackOverflow, FaStepBackward } from "react-icons/fa";

const AllFoodMenu = () => {
    const FoodItems = [
        { name: "Pizza", icon: <FaPizzaSlice /> },
        { name: "Burger", icon: <FaHamburger /> },
        { name: "Pasta", icon: <FaPastafarianism /> },
        { name: "Sushi", icon: <FaFish /> },
        { name: "Ice Cream", icon: <FaIceCream /> },
        { name: "Sandwich", icon: <FaBreadSlice /> },
        { name: "Pancakes", icon: <FaStackOverflow /> },
        { name: "Steak", icon: <FaStepBackward /> },
    ];

    return (
        <div className='h-screen lg:w-[250px] w-[130px] rounded-lg bg-gray-100 border-r'>
            <div className='flex gap-2 mt-4 justify-center items-center'>
                <MdOutlineRestaurantMenu className='text-4xl text-orange-500' />
                <p className='lg:text-4xl font-bold text-gray-800'>Menu</p>
            </div>

            <div className='flex flex-col gap-2 mt-2 px-2 lg:px-4'>
                {FoodItems.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex items-center gap-3 bg-white p-3 rounded-lg  cursor-pointer transition duration-300'
                        >
                            <div className='lg:text-3xl text-orange-500'>{item.icon}</div>
                            <p className='lg:text-xl font-semibold text-sm text-gray-700'>{item.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AllFoodMenu