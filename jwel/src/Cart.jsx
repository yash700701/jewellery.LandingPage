import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import Header from './Header'

function Cart() {

    const cart = useSelector((s)=>s.cart.items)
    const totalPrice = Number(useSelector(s=>s.cart.totalPrice))
    // console.log(totalPrice);
    
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-4 mt-16 border-black border-[1px] p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>

    {cart.length > 0 ? (
      <>
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <CartItems key={index} data={item}/>
          ))}
        </ul>
        <br/>
        <p>Total Amount : {totalPrice}</p>
        <button className='text-lg font-medium text-green-500 hover:text-green-700 border-black'>proceed to pay</button>
        <p></p>
        <button
        //   onClick={onExit}
          className="mt-6  py-2  text-lg font-medium "
        >
          Exit
        </button>
      </>
    ) : (
      <p className="text-gray-600 text-lg">Your cart is empty.</p>
    )}
    
  </div>
  </>
  )
}

export default Cart