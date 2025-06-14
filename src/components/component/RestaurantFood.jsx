import React from 'react'
import RestaurantDetails from './RestaurantDetails'
import FoodMenu from './FoodMenu'
import FoodItems from './FoodItems'
import FoodBasket from './FoodBasket'
import { Search } from 'lucide-react'

const RestaurantFood = () => {
    return (
        <div>
            <RestaurantDetails />
            <div className='flex mt-4 justify-between items-center'>
                <p className='text-2xl font-bold'>Order For Restaurant Name</p>
                <div className='flex gap-2 rounded-full items-center border p-2 ' >
                    <Search size={20} />
                    <input className='focus:outline-none text-sm' type="text" placeholder='Enter Food Name' />
                </div>
            </div>
            <div className='flex w-full justify-between items-center mt-4' >
                <FoodMenu/>
                <FoodItems/>
                <FoodBasket/>
            </div>
        </div>

    )
}

export default RestaurantFood