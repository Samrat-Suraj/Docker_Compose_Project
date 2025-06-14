import { Clock, Delete, ShoppingBasket, Trash2 } from 'lucide-react'
import { MdDeleteForever } from "react-icons/md";
import React from 'react'

const FoodBasket = () => {
  return (
    <div className='h-screen hidden lg:block w-[250px] border rounded-lg relative'>
      <div className='bg-orange-400 rounded-t-lg text-white font-bold text-sm items-center flex gap-2 p-6' >
        <Clock />
        <p>Open Till 3.0 PM</p>
      </div>
      <div>
        <div className='bg-green-500 text-white font-bold text-sm items-center flex gap-2 p-6'>
          <ShoppingBasket className='text-xl' size={30} />
          <p className='text-xl' >My Basket</p>
        </div>
      </div>
      <div className=' overflow-scroll hidescroll h-[40vh]' >
        {
          [1, 1, 1, 1, 1, 1].map((item, index) => {
            return (
              <div key={index} className='flex items-center justify-between p-3 bg-gray-200 mt-2' >
                <p className='h-8 w-8 bg-orange-500 rounded-full'></p>
                <div className='text-sm'>
                  <p>Rs. 200/-</p>
                  <p>Food Name</p>
                  <p>Decsriptions</p>
                </div>
                <MdDeleteForever size={25} className=' cursor-pointer hover:text-red-600' />
              </div>
            )
          })
        }
      </div>
      <hr />
      <div className='p-4 w-full mt-2 absolute bottom-0 '>
        <div className='flex justify-between items-center'>
          <p>Sub Total : </p>
          <p>Rs 200/-</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Discount : </p>
          <p>Rs -30/-</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Delivary Free : </p>
          <p>Rs 10/-</p>
        </div>
        <p className='p-2 bg-orange-400 w-full text-center font-bold text-white'>Total Pay :- Rs 100/-</p>
        <button className='p-2 bg-green-500 w-full text-center font-bold text-white' >Check Out</button>
      </div>

    </div>
  )
}

export default FoodBasket