import DiscountCard from '@/components/component/DiscountCard'
import React from 'react'

const SpecialOffersPage = () => {
    return (
        <div className="container mx-auto px-4 py-6 mt-6">
            <h1 className='text-4xl'>Discount Up To - 40% off</h1>
            <div className="mb-12 mt-12">
                <h2 className="text-3xl font-semibold mb-4 text-red-600">Pizza</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {[1, 2, 3, 4 ,4,4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-green-600">Burger</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">Pasta</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-yellow-600">Sushi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-pink-600">Ice Cream</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-orange-600">Sandwich</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-teal-600">Pancakes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-brown-600">Steak</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>


            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-blue-600">Cold Drink</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 1, 1, 1].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <DiscountCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecialOffersPage
