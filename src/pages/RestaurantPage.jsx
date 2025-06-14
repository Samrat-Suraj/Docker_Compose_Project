import RestaurantCard from '@/components/component/RestaurantCard'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const RestaurantPage = () => {
    return (
        <div>
            <div className='mx-auto mt-6 flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <ArrowLeft />
                    <p className='text-2xl'>Restaurant</p>
                </div>
                <div className='flex gap-3'>
                    <input className='p-2 lg:w-[20vw] w-[140px] focus:outline-none border rounded-lg' placeholder=' Search Restaurant... ' type="text" />
                    <button className='p-2 bg-black text-white rounded-lg' >Search</button>
                </div>
            </div>

            {
                [1,2,3,4,5,6,7].map((item , index)=>{
                    return(
                        <RestaurantCard key={index} />
                    )
                })
            }
        </div>
    )
}

export default RestaurantPage