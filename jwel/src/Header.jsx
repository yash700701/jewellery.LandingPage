import React from 'react'

function Header() {
  return (
    <div className='w-screen p-3 z-10 flex   top-0 fixed justify-between' style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent)', backdropFilter: 'blur(10px)'}}>
        <div className='pl-6 font-extrabold text-xl  text-orange-200' style={{fontFamily: 'brilliant'}}>Jwels Co.</div>
        <ul  className='flex gap-4 text-[10px]' style={{fontFamily: 'Montserrat Alternates'}}>
            <li className='px-3 py-1   rounded-2xl hover:outline outline-1 outline-offset-2'><button>Home</button></li>
            <li className='px-3 py-1  rounded-2xl hover:outline outline-1 outline-offset-2 '><button>About Us</button></li>
            {/* <li className='px-3 py-1 text-orange-100 bg-amber-800 rounded-2xl hover:outline outline-1 outline-offset-2'><button>Shop</button></li>
            <li className='px-3 py-1 text-orange-100 bg-amber-800 rounded-2xl hover:outline outline-1 outline-offset-2'><button>Lookbook</button></li> */}
            {/* <li className='px-3 hover:text-amber-800 pl-12'><button>s</button></li>
            <li className='px-3 hover:text-amber-800'><button>c</button></li> */}
        </ul>
    </div>
  )
}

export default Header