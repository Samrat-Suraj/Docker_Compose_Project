import React from 'react';

const OrderTable = () => {
    return (
        <div className="border mt-3 rounded-lg p-4 max-w-3xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-start space-x-3 mb-5">
                <img className="w-14 h-14 object-cover rounded-md" src="/Package.png" alt="Package Icon" />
                <div className="flex flex-col flex-grow">
                    <p className="font-semibold text-lg text-gray-800 leading-snug">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo
                    </p>
                    <div className="flex justify-between text-gray-600 mt-2 text-sm">
                        <p className="font-medium">Item 6</p>
                        <p className="font-semibold text-gray-900">Rs 600/-</p>
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-between mb-5 text-sm">
                <label htmlFor="order-status" className="text-gray-600 font-medium">
                    Order Status
                </label>
                <select
                    name="order-status"
                    id="order-status"
                    className="px-4 py-1.5 border rounded-lg bg-red-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out"
                >
                    <option value="food-preparing">Food Being Prepared</option>
                    <option value="out-for-delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                </select>
            </div>


            <div className="mt-5 text-gray-700">
                <h3 className="font-semibold text-md text-gray-800">Shipping Address</h3>
                <p className="mt-1 text-gray-600 text-sm">
                    <span className="font-medium">John Doe</span>
                    <br />
                    123 Maple Street
                    <br />
                    Springfield, IL 62704
                </p>
            </div>
        </div>
    );
};

export default OrderTable;
