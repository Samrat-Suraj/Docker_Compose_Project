import FoodItemsTable from '@/components/component/Admin/FoodItemsTable'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FoodItemsPages = () => {
  const navigate = useNavigate()
  return (
    <div className='w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mt-14 mb-14'>
      <div className='flex justify-between items-center ' >
        <input className='p-2 border focus:outline-none rounded-lg ' placeholder='Search By Name' type="text" />
        <button onClick={() => navigate("/admin/items/post")} className='p-2 bg-black text-white rounded-lg font-semibold' >Post Food Item</button>
      </div>
      <FoodItemsTable/>
    </div>
  )
}

export default FoodItemsPages