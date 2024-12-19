import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import items from './NecklaceItems';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store/cart';

function ProductPage() {
    const {slug} = useParams()
    const [detail, setDetail] = useState([])
    useEffect(()=>{
        const findDetail = items.filter((p)=>p.slug == slug)
        if(findDetail.length > 0){
            setDetail(findDetail[0])
        }
    },[slug])

    const [quantity, setQuantity] = useState(1)
    const incQuantity = ()=>{
         setQuantity(quantity + 1)
    }
    const decQuantity = ()=>{
         setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    const dispatch = useDispatch() 
    const handleAddToCart = ()=>{
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }))
    }
    const data = useSelector((s)=>s.cart.items)
    console.log(data);


    
    
  return (
    <div className="max-w-4xl mt-20 mx-auto p-6 bg-white shadow-md rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Product Image */}
      <div>
        <img
          src={detail.image}
          alt={detail.image}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{detail.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{detail.description}</p>
          <p className="text-xl font-semibold text-emerald-600">
            Price: ₹{detail.price}
          </p>
          <p
            className={`text-md mt-2 ${
              detail.itemsLeft > 0 ? "text-gray-700" : "text-red-600"
            }`}
          >
            {detail.itemsLeft > 0
              ? `${detail.itemsLeft} items left`
              : "Out of stock"}
          </p>
        </div>
        <div className='flex'>
        <button onClick={incQuantity} className='px-2 border-2 border-black rounded-md'>+</button>
          <p className='px-5'>{quantity}</p>
          <button onClick={decQuantity} className='px-2 border-2 border-black rounded-md'>-</button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={detail.itemsLeft === 0}
          className={`mt-6 px-6 py-2 text-white rounded-lg ${
            detail.itemsLeft > 0
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {detail.itemsLeft > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProductPage