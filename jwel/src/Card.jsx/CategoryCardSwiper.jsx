import React, { useState } from 'react'
import ring from '../images/ring.jpg'
import bres from '../images/bres.jpg'
import hand from '../images/hand.jpg'

// const images = [ring, bres, hand, hand2, main, ring2, tops]


function CategoryCardSwiper() {
    const images = [
      {img: bres},
      {img: hand},
      {img: ring},    
      ]
      const texts = [
        "String It",
        "Modern Gold",
        "Engagement",
      ]

  const [index, setIndex] = useState(0)
  const leftSwipe = ()=>{ 
    setIndex((prev)=>(prev === 0 ? images.length-1 : prev-1))}
  const rightSwipe = ()=>{
    setIndex((prev)=>(prev === images.length-1 ? 0 : prev+1))}
  

  return (
    <div className='w-92 flex items-center flex-col mx-auto my-10 justify-center'>
        <img className='w-80 rounded-t-xl shadow-xl shadow-zinc-600' src={`${images[index].img}`} alt="" />
        <div className='w-80 grid grid-cols-10 rounded-b-xl bg-[#461806] text-xl text-[#c08911] p-2 place-items-center shadow-xl shadow-zinc-600' style={{fontFamily: "Playfair Display"}}>
            <button className='col-span-1 text-white font-extrabold' style={{fontFamily: 'brilliant'}} onClick={leftSwipe}>{`< <`}</button>
            <div className='col-span-5 text-sm font-bold' style={{fontFamily: 'brilliant'}}>{texts[index]}</div>
            <button className='col-span-3 text-white text-[12px]' style={{fontFamily: 'Montserrat Alternates'}}>Explore More</button>
            <button className='col-span-1 text-white font-extrabold' style={{fontFamily: 'brilliant'}} onClick={rightSwipe}>{`> >`}</button>
        </div>
        <div className='flex justify-between w-60 ' >
        </div>
    </div>
  )
}

export default CategoryCardSwiper