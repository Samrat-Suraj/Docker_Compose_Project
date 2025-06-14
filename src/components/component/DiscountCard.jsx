import { Plus, PlusCircle, PlusCircleIcon } from 'lucide-react';
import React from 'react';

const DiscountCard = () => {
    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex p-4 gap-4">
                <div className="flex flex-col justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Buggers</h1>
                    <p className="text-xs text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <p className="text-[12px] font-semibold text-green-600">Rs : 22/-</p>
                </div>
                <div className=' relative '>
                    <img
                        className="w-full h-full object-cover rounded-md"
                        src="https://i.pinimg.com/originals/64/84/66/648466239f86288883993ee4cb2ca70b.jpg"
                        alt="Buggers"
                    />
                    <div className=' absolute bottom-0 flex items-center opacity-60 justify-center right-0 h-10 rounded-tl-lg w-10 bg-white' >
                        <PlusCircleIcon className=' cursor-pointer '/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DiscountCard;
