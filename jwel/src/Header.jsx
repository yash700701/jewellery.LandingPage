import React from 'react'
import { Link, Links } from 'react-router-dom'

function Header() {
  return (
    <div className='w-screen p-3 z-10 flex   top-0 fixed justify-between bg-white'>
        <div className='pl-3 pt-1 font-extrabold text-xl  text-orange-400' style={{fontFamily: 'brilliant'}}>Jwels Co.</div>
        <ul  className='flex gap-4 text-[15px]' style={{fontFamily: 'Montserrat Alternates'}}>
            <li className='px-3 py-1   rounded-2xl hover:outline outline-1 outline-offset-2'><Link to="/" >Home</Link></li>
            <li className='px-3 py-1  rounded-2xl hover:outline outline-1 outline-offset-2 '><Link>Cart</Link></li>
        </ul>
    </div>
  )
}

export default Header