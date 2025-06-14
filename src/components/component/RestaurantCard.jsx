import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = () => {
  const navigate = useNavigate();
  const id = 1;

  return (
    <div 
      onClick={() => navigate(`/details/${id}`)} 
      className="mx-auto cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row gap-6 mt-6 p-6 rounded-xl border bg-white bg-opacity-60 backdrop-blur-lg">
        
        <div className="w-full sm:w-1/3 flex justify-center items-center mb-4 sm:mb-0">
          <img
            className="rounded-lg h-[200px] w-[300px] object-cover shadow-lg"
            src="https://th.bing.com/th/id/OIP.3MEpKjAjT2jsg_JaMsx7egHaE8?rs=1&pid=ImgDetMain"
            alt="restaurant"
          />
        </div>
        
       
        <div className="w-full sm:w-2/3">
          <p className="text-2xl font-bold text-gray-900">Restaurant Name</p>
          <p className="text-gray-600 mt-1 text-sm">Address: 123 Restaurant St.</p>
          <p className="text-gray-600 mt-1 text-sm">Contact: (123) 456-7890</p>
          <p className="text-gray-600 mt-1 text-sm">Rating: ⭐⭐⭐⭐</p>
          <p className="text-gray-600 mt-1 text-sm">Cuisines: Italian, Pizza, Pasta</p>

          <div className="mt-4">
            <p className="text-gray-600 text-sm">🍽️ Price Range: $$</p>
            <p className="text-gray-600 text-sm">⏰ Open: Mon-Sun, 9:00 AM - 10:00 PM</p>
            <p className="text-gray-600 text-sm">✨ Features: Free Wi-Fi, Outdoor Seating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
