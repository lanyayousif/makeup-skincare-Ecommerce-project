import React from 'react'
import './header.css'
import header_img from '../../assets/img/header.webp'
import Button from '../button/Button'

function Header({children}) {
  return (
    // absolute top-0 left-0 right-0
    <header className='h-screen w-full '>
        {children}
       <div className='relative w-full h-full'>
             {/* <div className="header-img w-full h-full ">
                <img className='w-full h-full object-cover object-center' src={header_img} alt="header img" />
            </div> */}
            <div className="header-text-box  absolute xsm:left-4 sm:left-9 md:left-9 lg:left-11 xl:left-11 2xl:left-11 ">
                    <h1 className='xsm:h4 sm:h3 md:h3 h1 black-text'>Get the Look You Want</h1>
                    <h5 className='xsm:h6 sm:h6 md:h6 h5 black-text '>Beautifully You Skin Care and Makeup Essentials</h5>
                    <Button classbtn={"xsm:mt-16 sm:mt-28  md:mt-32 lg:mt-32 xl:mt-32  mb-8 mx-0"} >shop now</Button>
            </div>
       </div>
    </header>
  )
}

export default Header