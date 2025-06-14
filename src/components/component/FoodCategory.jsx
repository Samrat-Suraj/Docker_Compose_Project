import React from 'react'

const FoodCategory = () => {
    return (
        <div className='h-[190px] w-[180px] flex flex-col m-auto rounded-lg'>
            <div className='' >
                <div className='bg-gray-300 h-[86%] w-[180px] relative'>
                    <img
                        className='object-cover w-full h-full transform transition duration-500'
                        src="https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg"
                        alt="Food Category"
                    />
                    <div className='absolute inset-0 bg-black opacity-0'></div>
                </div>

                <div className='p-2 flex bg-black flex-col justify-between'>
                    <p className='text-lg font-semibold text-gray-50 truncate hover:text-yellow-500'>
                        Bugger
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FoodCategory
