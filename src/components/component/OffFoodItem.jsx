import React from 'react'

const OffFoodItem = () => {
    return (
        <div className='w-full relative cursor-pointer '>
            <img
                src="https://s1.1zoom.me/b4251/376/Fast_food_Hamburger_Pizza_Hot_dog_Meat_products_513904_3840x2160.jpg"
                alt="Food Item"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-50"></div>
            <div className="absolute bottom-5 left-5 text-white space-y-1">
                <p className="text-lg font-semibold">Restaurant</p>
                <p className="text-xl font-bold text-yellow-400">Maggie</p>
            </div>
            <div className=' absolute top-0 bg-black text-white p-2 rounded right-3 ' >
                -40%
            </div>
        </div>
    )
}

export default OffFoodItem
