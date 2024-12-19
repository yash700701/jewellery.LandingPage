import React from 'react'
import CategoryCard from './Card.jsx/CategoryCard'
import CategoryCardSwiper from './Card.jsx/CategoryCardSwiper'
import { motion } from 'framer-motion'

const categories = [
    {
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw914040e5/homepage/shopByCategory/necklace-set-25-11-24.jpg",
      category: "Necklaces",
      link: "/necklaces",
    },
    {
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf83b74ea/homepage/shopByCategory/rings-25-11-24.jpg",
      category: "Rings",
      link: "/rings",
    },
    {
      image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4c162935/homepage/shopByCategory/earrings-25-11-24.jpg",
      category: "Earrings",
      link: "/earrings",
    },
  ];


function Items() {
  return (
    <>
    <div className='mt-16 bg-white  pt-8'>
        <h1 className='text-4xl text-center text-gray-500' style={{fontFamily: 'brilliant'}}>Shop By Category</h1>
        <p className='p-3 text-white text-md' style={{fontFamily: 'Montserrat Alternates'}}>Browse through your favorite categories. We've got them all!</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
      {categories.map((item, index) => (
        <CategoryCard
          key={index}
          image={item.image}
          category={item.category}
          link={item.link}
        />
      ))}
    </div>
       
    </div>
    <div className='pt-24 '>
        <h1 className='text-4xl text-center text-gray-500' style={{fontFamily: 'brilliant'}}>Shop By Collections</h1>
        <CategoryCardSwiper/>
    </div>
   </> 
  )
}

export default Items