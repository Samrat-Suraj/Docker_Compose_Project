import React from 'react'

const RestaurantDetails = () => {
    return (
        <div className='h-[30vw] md:h-[50vh] relative mt-5'>
            
            <img 
                className='blur-sm h-full w-full object-cover rounded-lg' 
                src="https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123" 
                alt="Restaurant background" 
            />
            <div className='absolute top-0 left-0 w-full h-full flex justify-between items-center p-6 bg-gradient-to-t from-black to-transparent rounded-lg'>
                
                <div className='text-white max-w-lg'>
                    <p className='text-sm'>Desi Flavores</p>
                    <h1 className='text-[3vw] font-bold my-2'>Restaurant Name</h1>
                    <div className='flex items-center gap-4'>
                        <p className='bg-black text-white lg:text-[1vw] text-[8px] px-3 py-1 rounded-full'>Minimum Order Rs. 1</p>
                        <p className='bg-black text-white lg:text-[1vw] text-[8px] px-3 py-1 rounded-full'>Delivery in 20 mins</p>
                    </div>
                </div>

                
                <div className='ml-6 bg-white p-1 rounded-lg shadow-xl'>
                    <div className='rounded-lg overflow-hidden'>
                        <img 
                            className='w-[20vw] h-[15vw] object-cover rounded-lg' 
                            src="https://th.bing.com/th/id/OIP.AFvhjAtUsIlRVe0gPWS0mwHaE8?rs=1&pid=ImgDetMain" 
                            alt="Restaurant Image" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetails
