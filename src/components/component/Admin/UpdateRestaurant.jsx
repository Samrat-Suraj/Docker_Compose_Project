import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Loader2 } from 'lucide-react'
import React, { useState } from 'react'

const UpdateRestaurant = () => {
    const [image, setImage] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <div className=''>
                <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto mt-14 mb-14">
                    <div className="flex justify-between items-center mb-8">
                        <Button
                            className="flex items-center gap-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
                            onClick={() => navigate("/admin/companies")}
                            variant="outline"
                        >
                            <ArrowLeft width={16} />
                            <p>Back</p>
                        </Button>
                        <h1 className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] font-bold text-gray-900 dark:text-white">Restaurant Setup</h1>
                    </div>

                    <form className="flex gap-4 flex-col mt-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl transition-all duration-300">

                        
                        <div className="mb-6">
                            <h2 className="text-gray-600 dark:text-gray-300 font-bold text-lg mb-3">
                                <span className='text-2xl text-blue-400'>L</span>ogo Of Your Restaurant
                            </h2>
                            <label htmlFor="logo" className="cursor-pointer transition-transform transform hover:scale-105">
                                {
                                    image
                                        ? <img className='h-24 w-24 rounded-lg shadow-md transition-all duration-300' src={URL.createObjectURL(image)} alt="Restaurant Logo" />
                                        : <img className="h-24 w-24 object-contain border-2 border-dashed border-gray-300 rounded-lg transition-all duration-300" src="/camera.png" alt="Upload Logo" />
                                }
                            </label>
                            <input
                                type="file"
                                name="logo"
                                id="logo"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>

                        
                        <div className="flex gap-2 flex-col mb-6">
                            <label className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]" htmlFor="name">Restaurant Name</label>
                            <Input
                                placeholder="Enter Restaurant Name"
                                name="name"
                                id="name"
                                className="focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50 border-gray-300 p-3 rounded-lg shadow-sm transition-all duration-300 hover:border-indigo-400 focus:border-indigo-500"
                            />
                        </div>

                       
                        <div className="flex gap-2 flex-col mb-6">
                            <label className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]" htmlFor="address">Address</label>
                            <Input
                                placeholder="Enter Restaurant Address"
                                name="address"
                                id="address"
                                className="focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50 border-gray-300 p-3 rounded-lg shadow-sm transition-all duration-300 hover:border-indigo-400 focus:border-indigo-500"
                            />
                        </div>

                        
                        <div className="flex gap-2 flex-col mb-6">
                            <label className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]" htmlFor="contact">Contact</label>
                            <Input
                                placeholder="Enter Contact Number"
                                name="contact"
                                id="contact"
                                className="focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50 border-gray-300 p-3 rounded-lg shadow-sm transition-all duration-300 hover:border-indigo-400 focus:border-indigo-500"
                            />
                        </div>

                      
                        <div className="flex gap-2 flex-col mb-6">
                            <label className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]" htmlFor="cuisines">Cuisines</label>
                            <Input
                                placeholder="Enter Cuisines (comma separated)"
                                name="cuisines"
                                id="cuisines"
                                className="focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50 border-gray-300 p-3 rounded-lg shadow-sm transition-all duration-300 hover:border-indigo-400 focus:border-indigo-500"
                            />
                        </div>

                       
                        <div className="flex gap-2 flex-col mb-6">
                            <label className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]" htmlFor="priceRange">Price Range</label>
                            <Input
                                placeholder="Enter Price Range"
                                name="priceRange"
                                id="priceRange"
                                className="focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50 border-gray-300 p-3 rounded-lg shadow-sm transition-all duration-300 hover:border-indigo-400 focus:border-indigo-500"
                            />
                        </div>

                       
                        <div className="flex gap-2 flex-col mb-6">
                            <label className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]" htmlFor="hours">Opening Hours</label>
                            <Input
                                placeholder="Enter Opening Hours"
                                name="hours"
                                id="hours"
                                className="focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50 border-gray-300 p-3 rounded-lg shadow-sm transition-all duration-300 hover:border-indigo-400 focus:border-indigo-500"
                            />
                        </div>

                        
                        <div className="flex gap-2 flex-col mb-6">
                            <label className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]" htmlFor="features">Features</label>
                            <Input
                                placeholder="Enter Features (comma separated)"
                                name="features"
                                id="features"
                                className="focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-gray-50 border-gray-300 p-3 rounded-lg shadow-sm transition-all duration-300 hover:border-indigo-400 focus:border-indigo-500"
                            />
                        </div>

                        
                        {
                            loading
                                ? <Button type="submit" className="mt-6 mb-6 w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 focus:ring-2 focus:ring-indigo-500 flex items-center justify-center transition-all duration-300">
                                    <Loader2 className="animate-spin mr-2 h-5 w-5" /> Updating...
                                </Button>
                                : <Button type="submit" className="mt-6 mb-6 w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 focus:ring-2 focus:ring-indigo-500 transition-all duration-300">
                                    Update Details
                                </Button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateRestaurant
