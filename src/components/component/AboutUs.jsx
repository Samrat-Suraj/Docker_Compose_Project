import React from 'react';

const AboutUs = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mt-8">
                Know More About Us!
            </h1>
            <div className="h-auto bg-slate-800 mt-8 p-10 mx-auto rounded-lg shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Place An Order</h3>
                        <div className="mb-4">
                            <img src="Alearm.png" alt="Place an Order" className="w-20 h-20 object-contain rounded-lg" />
                        </div>
                        <p className="text-gray-600 text-center">Place your order through our website or mobile app.</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Track Progress</h3>
                        <div className="mb-4">
                            <img src="drank.png" alt="Track Progress" className="w-20 h-20 object-contain rounded-lg" />
                        </div>
                        <p className="text-gray-600 text-center">Track your order status and estimated delivery time.</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-500 mb-4">Get Your Order</h3>
                        <div className="mb-4">
                            <img src="/order.png" alt="Get Your Order" className="w-20 h-20 object-contain rounded-lg" />
                        </div>
                        <p className="text-gray-600 text-center">Receive your order at lightning-fast speed!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
