import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function ItemCard({ image, price, itemsLeft, slug, id, name, description }) {
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4">
    {/* Item Image */}
    <img
      src={image}
      alt="Item"
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-4">
      {/* Price */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        ₹{price.toLocaleString()}
      </h2>
      {/* Items Left */}
      <p className="text-gray-600 text-base">
        <span className="font-medium">Items Left:</span> {itemsLeft}
      </p>
    </div>
    {/* Buy Now Button */}
    <Link
    to={slug}
    className="w-full border-[1px] border-black  text-lg py-2 rounded-lg mt-4  transition"
      disabled={itemsLeft === 0}
    >
      {itemsLeft > 0 ? "Buy Now" : "Out of Stock"}
    </Link>
  </div>
  )
}

export default ItemCard