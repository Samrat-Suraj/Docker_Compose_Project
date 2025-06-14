import React, { useState } from 'react';

const RegisterRestaurant = () => {
    const [restaurantName, setRestaurantName] = useState('');

    const handleNameChange = (e) => {
        setRestaurantName(e.target.value);
    };

    const handleCancel = () => {
        setRestaurantName('');
    };

    const handleNext = () => {
        if (!restaurantName) {
            alert('Please enter a restaurant name');
        } else {
            console.log('Restaurant name:', restaurantName);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-full mt-9">
            <div className="bg-white p-8 border rounded-lg shadow-lg w-[50vw] min-w-[380px]">
                <h1 className="text-2xl font-semibold text-center text-gray-800">Restaurant Name Register</h1>
                <p className="text-center mt-4 text-gray-600 mb-6">Enter the name of your restaurant. You can always update it later.</p>

                <div className="flex flex-col mb-4">
                    <label htmlFor="restaurantName" className="text-gray-700">Your Restaurant Name</label>
                    <input
                        id="restaurantName"
                        type="text"
                        className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none"
                        placeholder="Enter Your Restaurant Name"
                        value={restaurantName}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={handleCancel}
                        className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterRestaurant;
