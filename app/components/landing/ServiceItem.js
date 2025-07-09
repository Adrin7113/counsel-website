import React from 'react';

const ServiceItem = ({ title, description, color }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-full h-48 ${color} flex items-center justify-center text-white font-light`}
      >
        <h2 className='px-[10%]'>{title}</h2>
      </div>
      <p className="text-gray-600 text-lg mt-4 mb-6 font-light">{description}</p>
      <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 hover:text-white rounded-full font-light hover:bg-orange-500 transition-all ease-in-out duration-200 cursor-pointer">Read More</button>
    </div>
  );
};

export default ServiceItem;
