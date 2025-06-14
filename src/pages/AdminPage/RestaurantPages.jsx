import RegisterRestaurant from '@/components/component/Admin/RegisterRestaurant'
import RestaurantTable from '@/components/component/Admin/RestaurantTable'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantPages = () => {
    const navigate = useNavigate()
    return (
        <div className='w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mt-14 mb-14'>
            <div className='flex justify-between items-center ' >
                <input className='p-2 border focus:outline-none rounded-lg ' placeholder='Search By Name' type="text" />
                <button onClick={()=>navigate("/admin/restaurant/register")} className='p-2 bg-black text-white rounded-lg font-semibold' >New Restaurant</button>
            </div>
            <RestaurantTable/>
        </div>
    )
}

export default RestaurantPages