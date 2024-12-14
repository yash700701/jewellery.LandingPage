import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ring from '../images/ring.jpg'
import bres from '../images/bres.jpg'
import hand from '../images/hand.jpg'
import { div } from 'framer-motion/client';
import necklace from '../videos/necklace.mp4'

const categories = [
  {
    video: necklace,
    category: "Necklaces",
    link: "/necklaces",
  },
  {
    video: earring,
    category: "Rings",
    link: "/rings",
  },
  {
    video: ring,
    category: "Earrings",
    link: "/earrings",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block", background: "red" }}
      // onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block", background: "green" }}
      // onClick={onClick}
    />
  );
}

function CategoryCardSwiper() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
 
  return (
    <div className='mt-10'>
      <Slider {...settings}>
        {/* <div className='bg-slate-500 h-96 w-full'>
        
        </div>
        <div className='bg-slate-500 h-96 w-96'>
        
        </div>
        <div className='bg-slate-500 h-96 w-96'>
        
        </div> */}
        {categories.map((item)=>(
          <div key={item.category} className='px-5'>
            <div className=' h-96 w-full bg-slate-400 rounded-3xl'>
              {/* <img src={item.image} className='rounded-t-xl object-contain' alt="" /> */}
              <video class=" rounded-3xl h-96 w-full object-cover" autoPlay muted loop>
                <source
                  src={necklace}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className='absolute bottom-5 pl-5'>
                <h1 className='text-7xl text-white'><span className='text-black'>.</span>..</h1>
              </div>
               
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategoryCardSwiper