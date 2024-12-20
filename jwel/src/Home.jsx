import './App.css'
import backgroundImage from './images/bg.jpg'
import ImageSlider from './ImageSlider'
import stroke from './images/Stroke.png'

function Home() {
  
  return (
    <>
      {/* <div className='h-screen w-full cover'>
        <img className='h-screen w-full ' src={backgroundImage} alt="bgImg" /> 
        <div className='absolute top-28 left-12 grid grid-cols-2'>
            <div className='mt-20 bg-slate-500' style={{fontFamily: 'brilliant'}}>
              <h1 className='text-8xl w-[700px] text-white'>Beautify Your Look.</h1>
              <p className='w-[450px] pt-5 text-white text-lg' style={{fontFamily: 'Montserrat Alternates', fontStyle: 'italic', fontWeight: '300'}}>We believe in providing the best jewellery as per your amazing choices and deliver to your door.</p>
              <div className=' mt-5 w-min grid auto-cols-min auto-rows-min group/shop'>
                <div className='translate-x-[5px] translate-y-[5px] col-start-1 row-start-1 rounded-tl-[12px] rounded-br-[12px] rounded-tr-[1px] rounded-bl-[1px] border-[1px] border-yellow-50 w-40 h-10 group-hover/shop:translate-x-[6px] group-hover/shop:translate-y-[6px] duration-300'></div>
                <button className='translate-x-0  translate-y-0 col-start-1 row-start-1 px-5 py-1 rounded-tl-[9px] rounded-br-[9px] rounded-tr-[1px] rounded-bl-[1px] bg-amber-800 text-orange-100 group-hover/shop:-translate-x-[2px] group-hover/shop:-translate-y-[2px] duration-300 ' style={{fontFamily: 'Montserrat Alternates', fontWeight: '900'}}>SHOP NOW</button>
              </div>
            </div>
            <div className='h-96 w-48 bg-slate-700'>img</div>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div>mds</div>
        <div>sjdjbb</div>
      </div> */}


      <div className='h-screen w-screen'>
        <div className='grid grid-flow-col'>
          <img  className='col-start-1 row-start-1 w-screen h-screen -z-10' style={{maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'}} src={backgroundImage} alt="bgImg" loading='lazy'/>
          <div className='grid place-items-center sm:grid-cols-10 col-start-1 row-start-1 h-screen'>
              <div id='homeimg' className='sm:col-span-4 justify-self-center self-center'>
                <ImageSlider/>
              </div>
              <div id='displayText' className='sm:col-span-6  grid p-5'>
                <img src={stroke} className='col-start-1 row-start-1' alt="" />
                  <div id='block2' className='col-start-1 row-start-1' style={{fontFamily: 'brilliant'}}>
                    <h1 className='text-[50px] sm:text-[60px]  py-5'>Beautify Your<br/>Look.</h1>
                    <p className='pt-5 text-sm font-bold' style={{fontFamily: 'Montserrat Alternates', fontStyle: 'italic', fontWeight: '300'}}>We believe in providing the best jewellery as per your amazing choices and deliver to your door.</p>
                    <div className=' mt-5 w-min grid auto-cols-min auto-rows-min group/shop'>
                      <div className='transform translate-x-[5px] translate-y-[5px] col-start-1 row-start-1 rounded-tl-[12px] rounded-br-[12px] rounded-tr-[1px] rounded-bl-[1px] border-[1px] border-gray-700 w-40 h-10 group-hover/shop:translate-x-[6px] group-hover/shop:translate-y-[6px] duration-300'></div>
                      <button className='transform translate-x-0  translate-y-0 col-start-1 row-start-1 px-5 py-1 rounded-tl-[9px] rounded-br-[9px] rounded-tr-[1px] rounded-bl-[1px] border-[1px] border-black group-hover/shop:-translate-x-[2px] group-hover/shop:-translate-y-[2px] duration-300 ' style={{fontFamily: 'Montserrat Alternates', fontWeight: '900'}}>SHOP NOW</button>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
