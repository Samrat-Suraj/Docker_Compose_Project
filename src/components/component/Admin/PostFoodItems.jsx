import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const PostFoodItems = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        discount: '',
        restaurant: '',
        price: '',
        image: null,
        category: '', // Add category to form data
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            console.log('Form Submitted:', formData);
        }, 2000);
    };

    return (
        <div className=" mt-6 px-4 md:px-8">
            <h1 className="text-3xl mt-4 font-bold text-center">
                <span className='text-blue-600 dark:text-blue-400'>P</span>ost <span className='text-red-600 dark:text-red-400'>F</span>ood Item
            </h1>
            <div className="flex flex-col md:flex-row w-full md:w-4/5 m-auto justify-center py-6 space-y-8 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-[90%] p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <form onSubmit={handleSubmit}>
                        {/* Food Name */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Food Name</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Enter Food Name"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Enter food description"
                                required
                            ></textarea>
                        </div>

                        {/* Discount */}
                        <div className="mb-4">
                            <label htmlFor="discount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Discount (%)</label>
                            <select
                                id="discount"
                                name="discount"
                                value={formData.discount}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            >
                                <option value="">Select a Discount</option>
                                <option value="10">10%</option>
                                <option value="20">20%</option>
                                <option value="30">30%</option>
                                <option value="40">40%</option>
                                <option value="60">60%</option>
                                <option value="70">70%</option>
                                <option value="80">80%</option>
                                <option value="90">90%</option>
                                <option value="100">100%</option>
                            </select>
                        </div>

                        {/* Restaurant */}
                        <div className="mb-4">
                            <label htmlFor="restaurant" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Restaurant</label>
                            <select
                                id="restaurant"
                                name="restaurant"
                                value={formData.restaurant}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            >
                                <option value="">Select a Restaurant</option>
                                {/* Map through your restaurant options here */}
                            </select>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Price</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Enter price in Rupees"
                                required
                            />
                        </div>

                        {/* Food Category */}
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Food Category</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            >
                                <option value="">Select a Category</option>
                                <option value="Appetizer">Appetizer</option>
                                <option value="Main Course">Main Course</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Beverage">Beverage</option>
                                <option value="Snack">Snack</option>
                            </select>
                        </div>

                        {/* Food Image */}
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Food Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleImageChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                accept="image/*"
                            />
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-3 flex justify-center gap-3 items-center bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                            >
                                {loading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostFoodItems;
