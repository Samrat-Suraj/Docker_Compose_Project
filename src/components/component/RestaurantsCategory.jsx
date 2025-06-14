import React from 'react'

const RestaurantsCategory = () => {
    return (

        <div className='h-[200px] w-[180px] flex flex-col  m-auto'>
            <div className='' >
                <div className='bg-gray-300 h-[90%]  w-[180px] relative'>
                    <img
                        className='object-cover w-full h-[99%] transform transition duration-500'
                        src="https://chandigarhofficial.com/wp-content/uploads/2018/11/Mcdonals-Logo.png"
                        alt="Food Category"
                    />
                    <div className='absolute inset-0 bg-black opacity-0'></div>
                </div>

                <div className=' bg-orange-400 flex flex-col justify-between'>
                    <p className='text-lg text-center font-semibold text-gray-800 truncate'>
                        McDonald
                    </p>
                </div>
            </div>
        </div>

    )
}

export default RestaurantsCategory