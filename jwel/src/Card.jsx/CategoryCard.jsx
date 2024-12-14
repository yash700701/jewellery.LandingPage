import React from 'react'
import explore from '../icons/explore.png'

function CategoryCard({ image, category, link }) {
   
  return (
     <div className="relative max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Background Image with Gradient Overlay */}
      <div className="relative h-56">
        <img src={image} alt={category} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-75"></div>
      </div>

      {/* Category Info */}
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-3xl font-bold">{category}</h2>
        <button
          className="mt-3 group flex py-2 border-[1px] border-white px-5 rounded-lg transition"
          onClick={() => window.open(link, "_blank")}
        >
          Explore
          
          <img src={explore} className='w-5  mx-4 group-hover:translate-x-4 duration-150 my-auto' alt="" />
          
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
