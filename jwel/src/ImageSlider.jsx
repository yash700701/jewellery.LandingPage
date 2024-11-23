import React, { useState } from 'react'
import { useEffect } from 'react'
import ring from './images/ring.jpg'
import bg from './images/bg.jpg'
import bres from './images/bres.jpg'
import hand from './images/hand.jpg'
import hand2 from './images/hand2.jpg'
import main from './images/main.jpg'
import ring2 from './images/ring2.jpg'
import tops from './images/tops.jpg'



function ImageSlider() {
  const images = [
      {img: ring},
      {img: bres},
      {img: hand},
      {img: hand2},
      {img: main},
      {img: ring2},
      {img: tops},
    ]
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
   
    useEffect(() => {
        const intervalId = setInterval(() => {
          setFade(false)
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(true);
          }, 500);
        }, 4000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      }, [images.length]);
  
  return (
    <div className={`grid place-items-center columns-1 p-2 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className='col-start-1 row-start-1 animate-float'>
          <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M286.863 193.137L193.137 286.863C171.92 308.08 143.143 320 113.137 320C50.6532 320 0 269.347 0 206.863C0 176.857 11.9197 148.08 33.137 126.863L126.863 33.1371C148.08 11.9198 176.857 0 206.863 0C269.347 0 320 50.6532 320 113.137C320 143.143 308.08 171.92 286.863 193.137Z"
                fill="none"
                stroke="white"
                stroke-width='1'
                stroke-alignment='inner'
              />
          </svg>
        </div>
        <div className='col-start-1 row-start-1'>
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <clipPath id="clip-path">
                    <path d="M286.863 193.137L193.137 286.863C171.92 308.08 143.143 320 113.137 320C50.6532 320 0 269.347 0 206.863C0 176.857 11.9197 148.08 33.137 126.863L126.863 33.1371C148.08 11.9198 176.857 0 206.863 0C269.347 0 320 50.6532 320 113.137C320 143.143 308.08 171.92 286.863 193.137Z" />
                  </clipPath>
              </defs>
          </svg>
          <img className='w-80 h-80' style={{clipPath: 'url(#clip-path)'}} src={`${images[index].img}`} alt="" />
        </div>
    </div>
  )
}

export default ImageSlider