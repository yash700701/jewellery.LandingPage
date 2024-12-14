import React from 'react'

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
      <h2 className="text-2xl font-semibold">{category}</h2>
      <button
        className="mt-3 px-4 py-2 bg-amber-500 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-300 transition"
        onClick={() => window.open(link, "_blank")}
      >
        Explore
      </button>
    </div>
  </div>
  )
}

export default CategoryCard