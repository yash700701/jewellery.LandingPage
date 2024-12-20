import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ring from '../images/ring.jpg'
import bres from '../images/bres.jpg'
import hand from '../images/hand.jpg'
import { div, span } from 'framer-motion/client';
import necklaceVid from '../videos/necklace.mp4'
import earringVid from '../videos/earring.mp4'
import ringVid from '../videos/ring.mp4'
import explore from '../icons/explore.png'
import { Link } from 'react-router-dom';

const categories = [
  {
    video: necklaceVid,
    category: "Necklaces",
    link: "/necklaces",
  },
  {
    video: ringVid,
    category: "Rings",
    link: "/rings",
  },
  {
    video: earringVid,
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
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
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
                  src={item.video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className='absolute mb-3 pl-5 bottom-0 '>
                <div className=' text-5xl text-white font-bold'>{item.category}</div>
                <Link
                    to={item.link}
                    className="group  mt-5 -mb-5 flex py-2  border-[1px] border-white pl-4 pr-8 rounded-lg transition"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Explore
                    
                    <img src={explore} className='w-5  mx-4 group-hover:translate-x-4 duration-150 my-auto' alt="" />
                    
                  </Link>
                <div className='flex'>
                  <h1 className='text-7xl text-white'>
                    {item.category=="Necklaces" ? <span><span className='text-black'>.</span>..</span> : item.category=="Earrings" ? <span>..<span className='text-black'>.</span></span> : item.category=="Rings" ? <span>.<span className='text-black'>.</span>.</span> : null}
                  </h1>
                  
                </div>
              </div>
               
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategoryCardSwiper