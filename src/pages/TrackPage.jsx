import React from 'react'

const TrackPage = () => {
  return (
    <div className="bg-gradient-to-t py-20">
        <div className="container mx-auto px-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
               
                <div className="flex justify-between items-center mb-6">
                    <div>
                        {/* <p className="text-sm text-gray-500">Order ID <span className="font-semibold text-black">1222528743</span></p> */}
                        <p className="text-sm text-gray-500">Placed on <span className="font-semibold text-black">12, March 2019</span></p>
                    </div>
                    <div className="flex items-center">
                        {/* <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View Details</a> */}
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center mb-6">
                    <div className="sm:flex-1">
                        <h5 className="font-semibold text-lg">Pasta Primavera</h5>
                        <p className="text-sm text-gray-500">Qty: 1 Plate</p>
                        <h4 className="mt-3 mb-4 font-semibold text-xl">
                            ₹500 <span className="text-sm text-gray-500">via (COD)</span>
                        </h4>
                        <p className="text-sm text-gray-500">Tracking Status on: <span className="text-gray-700">11:30pm, Today</span></p>
                        <button type="button" className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Food is Being Prepared
                        </button>    
                    </div>
                    <img className="w-40 h-40 object-contain mt-4 sm:mt-0 sm:ml-6" src="https://i.pinimg.com/originals/64/84/66/648466239f86288883993ee4cb2ca70b.jpg" alt="food" />
                </div>

                <div className="mb-8">
                    <ul className="flex justify-between">
                        <li className="text-center text-sm font-medium text-gray-500">
                            <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                                1
                            </div>
                            <span className="block">Order Placed</span>
                        </li>
                        <li className="text-center text-sm font-medium text-gray-500">
                            <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                                2
                            </div>
                            <span className="block">Food Being Prepared</span>
                        </li>
                        <li className="text-center text-sm font-medium text-gray-500">
                            <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                                3
                            </div>
                            <span className="block text-gray-300">Out for Delivery</span>
                        </li>
                        <li className="text-center text-sm font-medium text-gray-500">
                            <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                                4
                            </div>
                            <span className="block text-gray-300">Delivered</span>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-between text-center border-t border-gray-200 pt-4">
                    <div className="flex-1 py-2">
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm w-full">Call</button>
                    </div>
                    <div className="flex-1 py-2">
                        <button className="text-red-600 hover:text-red-800 font-medium text-sm w-full">Cancel</button>
                    </div>
                    <div className="flex-1 py-2">
                        <button className="text-green-600 hover:text-green-800 font-medium text-sm w-full">Back</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackPage
