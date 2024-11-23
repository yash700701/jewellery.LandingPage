import React from 'react'
import CategoryCard from './Card.jsx/CategoryCard'
import CategoryCardSwiper from './Card.jsx/CategoryCardSwiper'
import { motion } from 'framer-motion'

const fadeIn = (direction, delay) => {
  return{
      hidden:{
          y: direction === 'up' ? 20 : direction === 'down' ? -40 : 0,
          x: direction === 'left' ? 20 : direction === 'right' ? -40 : 0,
      },
      show:{
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
              type: 'tween',
              duration: 1.2,
              delay: delay,
              ease: [0.25, 0.25, 0.25, 0.75],
          }
      }
  }
}

function Items() {
  return (
    <>
    <div className='mt-16  text-center pt-8'>
        <h1 className='text-4xl text-[#ffb71c]' style={{fontFamily: 'brilliant'}}>Shop By Category</h1>
        <p className='p-3 text-white text-md' style={{fontFamily: 'Montserrat Alternates'}}>Browse through your favorite categories. We've got them all!</p>
        <motion.ul
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}} 
         className='grid sm:grid-cols-3 justify-items-center  pt-20 pb-20 text-[#c08911] font-extralight text-lg' style={{fontFamily: 'Montserrat Alternates'}}>
           <div className='flex'>
           <li><CategoryCard data={{img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTvuLtP0960y8MhrthU2OhfASDYTzJV5cEA&s", category:"Mangalsutras"}}/></li>
           <li><CategoryCard data={{img: "https://www.orra.co.in/media/catalog/product/cache/a062e776095ada03f265202079309f18/o/c/oco22007_4_1.jpg", category:"Gold Coins"}}/></li>
           </div>
            <div className='flex'>
            <li><CategoryCard data={{img: "https://ratnagarbajewellers.com/wp-content/uploads/2024/08/Polished-Cut-Diamond-Earrings-1-1.jpg", category:"Earrings"}}/></li>
            <li><CategoryCard data={{img: "https://i.ebayimg.com/images/g/5OMAAOSwxABkAJxf/s-l1200.jpg", category:"Finger Rings"}}/></li>
            </div>
            <div className='flex'>
            <li><CategoryCard data={{img: "https://abhooshan.com/cdn/shop/products/il_300x300.3203438788_s9sb_8d474c47-9dd2-4678-aafc-4ae3a88032d0_medium.webp?v=1706776044", category:"Nose Pins"}}/></li>
            <li><CategoryCard data={{img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc6ce4dc0/images/hi-res/51M4D1VAM1A00_1.jpg?sw=480&sh=480", category:"Bangles"}}/></li>
            </div>
        </motion.ul>
       
    </div>
    <div className='text-center py-5 bg-orange-100'>
        <h1 className='text-4xl text-[#7F2B0A]' style={{fontFamily: 'brilliant'}}>Shop By Collections</h1>
        <CategoryCardSwiper/>
    </div>
   </> 
  )
}

export default Items