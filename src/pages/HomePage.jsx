import AboutUs from '@/components/component/AboutUs'
import AppDownload from '@/components/component/AppDownload'
import FoodCategory from '@/components/component/FoodCategory'
import Hero from '@/components/component/Hero'
import OffFoodItem from '@/components/component/OffFoodItem'
import RestaurantsCategory from '@/components/component/RestaurantsCategory'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <h1 className='text-xs sm:text-xl mt-8 font-semibold'>
                -40% &nbsp;
                <span className="text-2xl sm:text-5xl font-bold text-yellow-500">ForkFly.<span className="text-green-500">In</span></span>
                &nbsp; Exclusive deals
            </h1>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    [1, 2, 3].map((item, index) => {
                        return (
                            <OffFoodItem key={index} />
                        )
                    })
                }
            </div>

            <h1 className='text-xs sm:text-xl  mt-8 font-semibold'>
                Popular Category
            </h1>


            <div className='mt-4 overflow-x-auto flex gap-4 hidescroll'>

                {
                    [1, 2, 3, 5, 6, 5].map((item, index) => {
                        return (
                            <FoodCategory key={index} />
                        )
                    })
                }

            </div>

            <h1 className='text-xs sm:text-xl  mt-8 font-semibold'>
                Popular Restaurants
            </h1>

            <div className='mt-4 overflow-x-auto flex gap-4 hidescroll'>

                {
                    [1, 2, 3, 5, 6, 5].map((item, index) => {
                        return (
                            <RestaurantsCategory key={index} />
                        )
                    })
                }

            </div>

            <AppDownload />
            <AboutUs />

        </div>
    )
}

export default HomePage
