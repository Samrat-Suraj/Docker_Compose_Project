import AllFoodItems from '@/components/component/AllFoodItems'
import AllFoodMenu from '@/components/component/AllFoodMenu'
import { Search } from 'lucide-react'
import React from 'react'

const MenuPages = () => {
    return (
        <div className='mt-10'>
            <div className='flex mt-4 justify-between items-center'>
                <p className='text-2xl font-bold'>All Category </p>
                <div className='flex gap-2 rounded-full items-center border p-2 ' >
                    <Search size={20} />
                    <input className='focus:outline-none text-sm' type="text" placeholder='Enter Food Name' />
                </div>
            </div>
            <div className='flex mt-6' >
                <AllFoodMenu />
                <AllFoodItems />
            </div>
        </div>
    )
}

export default MenuPages